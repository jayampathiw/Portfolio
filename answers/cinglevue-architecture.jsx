import React from 'react';

const CinglevueArchitecture = () => {
  return (
    <div style={{
      fontFamily: "'Poppins', -apple-system, sans-serif",
      background: 'linear-gradient(135deg, #134e4a 0%, #0f172a 100%)',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #2dd4bf, #14b8a6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '8px'
        }}>
          Cinglevue Architecture
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Education Management Platform • Micro-Frontend Architecture • 500K+ Users
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Micro-Frontend Visualization */}
        <div style={{
          background: 'rgba(45,212,191,0.05)',
          border: '1px solid rgba(45,212,191,0.2)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '24px'
        }}>
          <h3 style={{ color: '#2dd4bf', marginBottom: '24px', textAlign: 'center' }}>
            🧱 Micro-Frontend Architecture
          </h3>
          
          {/* Shell Application */}
          <div style={{
            background: 'rgba(45,212,191,0.1)',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: '600', marginBottom: '8px' }}>🏠 Shell Application</div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
              Routing • Authentication • Shared State • Event Bus
            </div>
          </div>

          {/* Micro-Frontends Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginBottom: '20px'
          }}>
            {[
              { name: 'Student Portal', icon: '👨‍🎓', color: '#3b82f6' },
              { name: 'Teacher Dashboard', icon: '👨‍🏫', color: '#22c55e' },
              { name: 'Admin Console', icon: '⚙️', color: '#f59e0b' },
              { name: 'Analytics', icon: '📊', color: '#a855f7' },
              { name: 'Assessment', icon: '📝', color: '#ec4899' },
              { name: 'Communication', icon: '💬', color: '#06b6d4' },
              { name: 'Enrollment', icon: '📋', color: '#84cc16' },
              { name: 'Reports', icon: '📈', color: '#f97316' }
            ].map(mfe => (
              <div key={mfe.name} style={{
                background: `${mfe.color}15`,
                border: `1px solid ${mfe.color}40`,
                borderRadius: '10px',
                padding: '16px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{mfe.icon}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: '500' }}>{mfe.name}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem' }}>
            20+ Micro-Frontends built with Angular Elements & Web Components
          </div>
        </div>

        {/* Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {/* Backend Services */}
          <div style={{
            background: 'rgba(168,85,247,0.05)',
            border: '1px solid rgba(168,85,247,0.2)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#a855f7', marginBottom: '20px' }}>
              🔧 Backend Microservices
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'User Service', tech: 'Spring Boot' },
                { name: 'Course Service', tech: 'Spring Boot' },
                { name: 'Assessment Service', tech: 'Spring Boot' },
                { name: 'Analytics Service', tech: 'Spring Boot' },
                { name: 'Notification Service', tech: 'Node.js' }
              ].map(service => (
                <div key={service.name} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 16px',
                  background: 'rgba(168,85,247,0.1)',
                  borderRadius: '8px'
                }}>
                  <span>{service.name}</span>
                  <span style={{
                    padding: '4px 10px',
                    background: 'rgba(168,85,247,0.2)',
                    borderRadius: '12px',
                    fontSize: '0.75rem'
                  }}>
                    {service.tech}
                  </span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '16px',
              padding: '12px',
              background: 'rgba(168,85,247,0.1)',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '0.85rem'
            }}>
              15 Microservices • MongoDB • Event-Driven Architecture
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{
            background: 'rgba(45,212,191,0.05)',
            border: '1px solid rgba(45,212,191,0.2)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#2dd4bf', marginBottom: '20px' }}>
              📊 Key Achievements
            </h3>
            {[
              { label: 'Modularity Improvement', value: '40%', bar: 40 },
              { label: 'System Scalability', value: '60%', bar: 60 },
              { label: 'Development Acceleration', value: '35%', bar: 35 },
              { label: 'Data Sync Latency Reduction', value: '70%', bar: 70 }
            ].map(metric => (
              <div key={metric.label} style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.9rem' }}>{metric.label}</span>
                  <span style={{ color: '#2dd4bf', fontWeight: '600' }}>{metric.value}</span>
                </div>
                <div style={{
                  height: '8px',
                  background: 'rgba(45,212,191,0.2)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${metric.bar}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #2dd4bf, #14b8a6)',
                    borderRadius: '4px'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Migration Story */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '24px'
        }}>
          <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
            🔄 Legacy Migration Journey
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div style={{
              flex: 1,
              padding: '20px',
              background: 'rgba(239,68,68,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '8px' }}>🏚️</div>
              <div style={{ fontWeight: '600', color: '#ef4444' }}>Legacy Monolith</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                100,000+ lines of code
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontSize: '1.5rem' }}>→</div>
              <div style={{
                padding: '8px 16px',
                background: 'rgba(45,212,191,0.2)',
                borderRadius: '20px',
                fontSize: '0.8rem',
                color: '#2dd4bf'
              }}>
                8 months
              </div>
              <div style={{ fontSize: '1.5rem' }}>→</div>
            </div>
            
            <div style={{
              flex: 1,
              padding: '20px',
              background: 'rgba(34,197,94,0.1)',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '8px' }}>🏗️</div>
              <div style={{ fontWeight: '600', color: '#22c55e' }}>Modern Micro-Frontends</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                20+ independent modules
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack & Compliance */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '24px'
        }}>
          {/* Tech Stack */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ marginBottom: '16px' }}>🛠️ Technology Stack</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                'Angular Elements', 'Web Components', 'TypeScript', 
                'Spring Boot', 'MongoDB', 'Docker', 'Kubernetes',
                'Keycloak', 'Angular Material', 'RxJS', 'Event-Driven'
              ].map(tech => (
                <span key={tech} style={{
                  padding: '8px 16px',
                  background: 'rgba(45,212,191,0.1)',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  border: '1px solid rgba(45,212,191,0.3)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Compliance */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ marginBottom: '16px' }}>🔒 Compliance</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['PDPA (Singapore)', 'GDPR', 'FERPA', 'WCAG Standards'].map(item => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  background: 'rgba(34,197,94,0.1)',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinglevueArchitecture;
