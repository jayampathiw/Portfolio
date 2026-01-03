# ADR-001: Signals + NgRx Hybrid State Management

## Status
Accepted (January 2025)

## Context
CompileForge requires complex state management for:
- Real-time grading with 100+ simultaneous instructors
- Optimistic updates with rollback capability
- 10,000+ submissions across multiple views
- WebSocket events updating global state
- Local UI state (filters, pagination, selections)

The Angular ecosystem now offers multiple state management options:
- NgRx (traditional Redux pattern)
- Angular Signals (new reactive primitive in Angular 16+)
- RxJS-only solutions
- Third-party libraries (Akita, NGXS)

## Decision
Adopt a hybrid approach combining NgRx and Signals:

### NgRx for Global State
- Authentication state
- Submissions collection
- Assessments and rubrics
- Real-time sync status
- User preferences

### Signals for Local State
- Component-level UI state
- Filter selections
- Pagination state
- Modal/dialog visibility
- Form validation state

### NgRx Effects for Side Effects
- API calls
- WebSocket event handling
- Optimistic update orchestration
- Error recovery flows

## Implementation Pattern
```typescript
// Global state with NgRx
@Component({
  selector: 'app-submissions',
  template: `
    <app-filter [filters]="filters()" (change)="updateFilters($event)" />
    <app-list [items]="filteredSubmissions()" />
  `
})
export class SubmissionsComponent {
  // NgRx for global data
  private submissions = this.store.selectSignal(selectAllSubmissions);

  // Signals for local UI state
  filters = signal<FilterState>({ status: 'all', sortBy: 'date' });

  // Computed for derived state
  filteredSubmissions = computed(() =>
    this.applyFilters(this.submissions(), this.filters())
  );
}
```

## Alternatives Considered

### 1. Pure NgRx
- **Pros:** Consistent pattern, excellent devtools
- **Cons:** Verbose for local state, overkill for UI toggles
- **Rejected:** Too much boilerplate for simple local state

### 2. Pure Signals
- **Pros:** Simple, less boilerplate, built-in
- **Cons:** No effects pattern, manual async handling, no devtools
- **Rejected:** Lacks enterprise patterns for complex async flows

### 3. Observable Store Pattern
- **Pros:** Simpler than NgRx
- **Cons:** Less tooling, fewer community patterns
- **Rejected:** Less mature ecosystem

### 4. NGXS
- **Pros:** Less boilerplate than NgRx
- **Cons:** Smaller community, different patterns
- **Rejected:** Team familiar with NgRx

## Consequences

### Positive
- Optimal performance through selective reactivity
- Signals eliminate unnecessary change detection cycles
- NgRx provides robust async handling and devtools
- Familiar pattern for enterprise Angular teams
- 92% reduction in component re-renders observed

### Negative
- Team must understand both paradigms
- Slightly larger bundle than pure Signals (~15KB for NgRx)
- Need clear guidelines on when to use each

### Mitigations
- Created decision flowchart for state location
- Documented patterns in component library
- Code review checklist includes state management review

## References
- [Angular Signals RFC](https://github.com/angular/angular/discussions/49685)
- [NgRx with Signals](https://ngrx.io/guide/signals)
- [CompileForge State Architecture](../architecture/state-management.md)
