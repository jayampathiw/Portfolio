# Architecture Diagrams in Mermaid Format
## For Portfolio Integration

These diagrams can be rendered in any Mermaid-compatible viewer or converted to images.

---

## 1. CompileForge Architecture

```mermaid
graph TB
    subgraph "Presentation Layer"
        A[Angular 18.2] --> B[TypeScript 5.4]
        A --> C[Angular Material]
        A --> D[PrimeNG]
    end
    
    subgraph "State Management"
        E[NgRx Store] --> F[NgRx Effects]
        G[Angular Signals] --> E
        H[RxJS 7.8] --> E
    end
    
    subgraph "Real-time Layer"
        I[Socket.io] --> J[WebSocket Events]
        J --> K[Room-based Broadcasting]
        K --> L["<50ms Latency"]
    end
    
    subgraph "Service Layer"
        M[HTTP Client] --> N[Auth Guards]
        N --> O[Interceptors]
        O --> P[RBAC]
    end
    
    subgraph "Backend"
        Q[Supabase] --> R[PostgreSQL]
        Q --> S[Edge Functions]
        Q --> T[OAuth2/OIDC]
    end
    
    subgraph "Infrastructure"
        U[Fly.io] --> V[GitHub Actions]
        V --> W[Nx Monorepo]
        W --> X[Vite Build]
    end
    
    A --> E
    E --> I
    M --> Q
    Q --> U
```

---

## 2. CompileForge Data Flow

```mermaid
sequenceDiagram
    participant Instructor
    participant Angular App
    participant NgRx Store
    participant Socket.io
    participant Supabase
    participant Other Users
    
    Instructor->>Angular App: Submit Grade
    Angular App->>NgRx Store: Optimistic Update
    NgRx Store->>Angular App: UI Updates Instantly
    Angular App->>Supabase: Save to Database
    Supabase->>Socket.io: Broadcast Event
    Socket.io->>NgRx Store: Real-time Update
    NgRx Store->>Other Users: All Users See Change
    Note over Instructor,Other Users: Total latency <50ms
```

---

## 3. ChainFortress Architecture

```mermaid
graph TB
    subgraph "Frontend"
        A[Next.js 13] --> B[React 18]
        B --> C[TypeScript]
        C --> D[GraphQL/Apollo]
    end
    
    subgraph "Web3 Layer"
        E[Web3.js] --> F[Ethers.js]
        F --> G[Wallet Connect]
    end
    
    subgraph "Smart Contracts"
        H[Solidity] --> I[OpenZeppelin]
        I --> J[LayerZero]
        J --> K[Axelar]
    end
    
    subgraph "Storage"
        L[IPFS] --> M[AES-256 Encryption]
    end
    
    subgraph "Backend"
        N[Node.js] --> O[Express.js]
        O --> P[MongoDB]
    end
    
    subgraph "Infrastructure"
        Q[Docker] --> R[Kubernetes]
        R --> S[AWS]
    end
    
    A --> E
    E --> H
    H --> L
    N --> Q
```

---

## 4. ChainFortress Document Flow

```mermaid
flowchart LR
    A[📄 Document] --> B[🔐 AES-256 Encrypt]
    B --> C[📦 IPFS Storage]
    C --> D[⛓️ Smart Contract]
    D --> E[Hash On-chain]
    E --> F[✅ Verified]
    
    style A fill:#3b82f6
    style B fill:#f59e0b
    style C fill:#22c55e
    style D fill:#a855f7
    style E fill:#ec4899
    style F fill:#14b8a6
```

---

## 5. CSG International Architecture

```mermaid
graph TB
    subgraph "Client Applications"
        A[Web Portal]
        B[Mobile Apps]
        C[Admin Dashboard]
        D[Agent Interface]
    end
    
    subgraph "Angular Enterprise Platform"
        E[Customer Module]
        F[Billing Module]
        G[Analytics Module]
        H[Support Module]
        I[Reporting Module]
        J[Admin Module]
    end
    
    subgraph "State & Services"
        K[NgRx + NgRx-Entity]
        L[Angular Material]
        M[Storybook Components]
    end
    
    subgraph "Backend"
        N[REST APIs]
        O[Microservices]
        P[Message Queue]
    end
    
    A --> E
    B --> E
    C --> J
    D --> H
    E --> K
    F --> K
    G --> K
    K --> N
```

---

## 6. Cinglevue Micro-Frontend Architecture

```mermaid
graph TB
    subgraph "Shell Application"
        A[Routing]
        B[Authentication]
        C[Shared State]
        D[Event Bus]
    end
    
    subgraph "Micro-Frontends"
        E[Student Portal]
        F[Teacher Dashboard]
        G[Admin Console]
        H[Analytics]
        I[Assessment]
        J[Communication]
        K[Enrollment]
        L[Reports]
    end
    
    subgraph "Backend Microservices"
        M[User Service]
        N[Course Service]
        O[Assessment Service]
        P[Analytics Service]
        Q[Notification Service]
    end
    
    subgraph "Infrastructure"
        R[MongoDB]
        S[Keycloak]
        T[Docker/K8s]
    end
    
    A --> E
    A --> F
    A --> G
    E --> M
    F --> N
    G --> O
    H --> P
    M --> R
    S --> A
```

---

## 7. Cinglevue Migration Journey

```mermaid
graph LR
    A[🏚️ Legacy Monolith<br/>100,000+ LOC] --> B[📋 Analysis<br/>& Planning]
    B --> C[🔧 Incremental<br/>Migration]
    C --> D[🧪 Testing &<br/>Validation]
    D --> E[🏗️ Modern<br/>Micro-Frontends<br/>20+ Modules]
    
    style A fill:#ef4444
    style E fill:#22c55e
```

---

## 8. eBuilder Transaction Pipeline

```mermaid
flowchart LR
    A[🏦 Nordea Bank] --> B[📥 Ingestion]
    B --> C[✅ Validation]
    C --> D[🔄 Processing]
    D --> E[📊 Reporting]
    E --> F[📤 Settlement]
    
    G[1M+ Daily Transactions]
    
    style A fill:#6366f1
    style F fill:#22c55e
```

---

## 9. Skills Distribution

```mermaid
pie title Technical Expertise Distribution
    "Angular/Frontend" : 35
    "Full Stack" : 25
    "State Management" : 15
    "Blockchain/Web3" : 10
    "DevOps/CI-CD" : 10
    "Testing" : 5
```

---

## 10. Career Timeline

```mermaid
gantt
    title Professional Experience Timeline
    dateFormat  YYYY-MM
    section eBuilder
    Technical Lead           :2014-10, 2018-12
    section Cinglevue
    Tech Lead               :2019-01, 2020-03
    section CSG International
    Senior Angular Consultant :2020-03, 2023-06
    section ChainFortress
    Web3 Developer          :2023-06, 2024-12
    section CompileForge
    Principal Angular Dev   :2025-01, 2025-12
```

---

## Usage Instructions

### Converting to Images:
1. Use mermaid.live to render and export as PNG/SVG
2. Use mermaid-cli: `mmdc -i diagrams.md -o output.png`
3. Embed in GitHub README (GitHub supports Mermaid natively)

### Embedding in Portfolio:
```html
<!-- Option 1: Use Mermaid.js library -->
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<div class="mermaid">
  [paste mermaid code here]
</div>

<!-- Option 2: Use pre-rendered images -->
<img src="diagrams/compileforge-architecture.png" alt="CompileForge Architecture">
```

### Color Customization:
```javascript
mermaid.initialize({
  theme: 'dark',
  themeVariables: {
    primaryColor: '#6366f1',
    secondaryColor: '#a855f7',
    tertiaryColor: '#22c55e'
  }
});
```
