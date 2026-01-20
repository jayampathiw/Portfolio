import React, { useState } from 'react';

const CompileForgeArchitecture = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  
  const layers = {
    presentation: {
      title: 'Presentation Layer',
      color: '#6366f1',
      technologies: ['Angular 18.2', 'TypeScript 5.4', 'Angular Material', 'PrimeNG'],
      description: 'Standalone components with Signals for reactive state'
    },
    state: {
      title: 'State Management',
      color: '#8b5cf6',
      technologies: ['NgRx Store', 'NgRx Effects', 'Signals', 'RxJS 7.8'],
      description: 'Hybrid NgRx + Signals for optimal reactivity'
    },
    realtime: {
      title: 'Real-time Layer',
      color: '#a855f7',
      technologies: ['Socket.io', 'WebSockets', 'Room-based Events'],
      description: '<50ms latency collaborative grading'
    },
    services: {
      title: 'Service Layer',
      color: '#d946ef',
      technologies: ['HTTP Client', 'Auth Guards', 'Interceptors', 'API Services'],
      description: 'Enterprise service architecture with RBAC'
    },
    backend: {
      title: 'Backend Services',
      color: '#ec4899',
      technologies: ['Supabase', 'PostgreSQL', 'Edge Functions', 'OAuth2/OIDC'],
      description: 'Serverless backend with real-time subscriptions'
    },
    infrastructure: {
      title: 'Infrastructure',
      color: '#f43f5e',
      technologies: ['Fly.io', 'GitHub Actions', 'Nx Monorepo', 'Vite'],
      description: 'Multi-region deployment with CI/CD'
    }
  };

  return (
    <div style={{
      fontFamily: "'IBM Plex Sans', -apple-system, sans-serif",
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '8px'
        }}>
          CompileForge Architecture
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Enterprise EdTech SaaS Platform • Angular 18 • 10,000+ Concurrent Users
        </p>
      </div>

      {/* Main Architecture Diagram */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '32px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Architecture Layers */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Object.entries(layers).map(([key, layer], index) => (
            <div
              key={key}
              onClick={() => setActiveLayer(activeLayer === key ? null : key)}
              style={{
                background: activeLayer === key 
                  ? `linear-gradient(135deg, ${layer.color}20, ${layer.color}10)`
                  : 'rgba(255,255,255,0.03)',
                border: `2px solid ${activeLayer === key ? layer.color : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: activeLayer === key ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${layer.color}, ${layer.color}80)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '700'
                }}>
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>
                    {layer.title}
                  </h3>
                  <p style={{ margin: '4px 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                    {layer.description}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '300px' }}>
                  {layer.technologies.map(tech => (
                    <span key={tech} style={{
                      background: `${layer.color}30`,
                      color: layer.color,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Panel */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h3 style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600', 
            marginBottom: '24px',
            color: '#a855f7'
          }}>
            Performance Metrics
          </h3>
          
          {[
            { label: 'Lighthouse Score', value: '95', unit: '/100', color: '#22c55e' },
            { label: 'Load Time', value: '<2', unit: 's', color: '#6366f1' },
            { label: 'Concurrent Users', value: '10K+', unit: '', color: '#a855f7' },
            { label: 'Test Coverage', value: '85', unit: '%', color: '#f59e0b' },
            { label: 'Uptime', value: '99.9', unit: '%', color: '#22c55e' },
            { label: 'Bundle Size', value: '485', unit: 'KB', color: '#ec4899' }
          ].map(metric => (
            <div key={metric.label} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <span style={{ color: '#94a3b8' }}>{metric.label}</span>
              <span style={{ 
                color: metric.color, 
                fontWeight: '700',
                fontSize: '1.1rem'
              }}>
                {metric.value}<span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{metric.unit}</span>
              </span>
            </div>
          ))}

          <h3 style={{ 
            fontSize: '1.1rem', 
            fontWeight: '600', 
            margin: '32px 0 16px',
            color: '#a855f7'
          }}>
            Key Features
          </h3>
          
          {[
            'Real-time Collaborative Grading',
            'WebSocket Live Updates',
            '5 Languages + RTL Support',
            'WCAG 2.1 AA Compliant',
            'PWA Capabilities',
            'Optimistic UI Updates'
          ].map(feature => (
            <div key={feature} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 0',
              color: '#e2e8f0'
            }}>
              <span style={{ color: '#22c55e' }}>✓</span>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Data Flow Diagram */}
      <div style={{
        maxWidth: '1200px',
        margin: '48px auto 0',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '16px',
        padding: '32px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h3 style={{ 
          fontSize: '1.3rem', 
          fontWeight: '600', 
          marginBottom: '24px',
          textAlign: 'center'
        }}>
          Real-time Data Flow
        </h3>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '👨‍🏫', label: 'Instructor', sub: 'Grades submission' },
            { icon: '→', label: '', sub: '' },
            { icon: '⚡', label: 'Socket.io', sub: 'Event broadcast' },
            { icon: '→', label: '', sub: '' },
            { icon: '🔄', label: 'NgRx', sub: 'State update' },
            { icon: '→', label: '', sub: '' },
            { icon: '📊', label: 'UI Update', sub: '<50ms latency' },
            { icon: '→', label: '', sub: '' },
            { icon: '👥', label: 'All Users', sub: 'See changes' }
          ].map((item, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: item.icon === '→' ? '0' : '16px',
              background: item.icon === '→' ? 'transparent' : 'rgba(139,92,246,0.1)',
              borderRadius: '12px',
              minWidth: item.icon === '→' ? 'auto' : '100px'
            }}>
              <div style={{ fontSize: item.icon === '→' ? '1.5rem' : '2rem', marginBottom: '8px' }}>
                {item.icon}
              </div>
              {item.label && <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.label}</div>}
              {item.sub && <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{item.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompileForgeArchitecture;
