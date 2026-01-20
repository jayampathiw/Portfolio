import React from 'react';

const CSGArchitecture = () => {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, sans-serif",
      background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '8px'
        }}>
          CSG International Architecture
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Enterprise Telecom Solutions • Fortune 500 • APAC Markets
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Architecture Overview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Client Layer */}
          <div style={{
            background: 'rgba(96,165,250,0.1)',
            border: '1px solid rgba(96,165,250,0.3)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#60a5fa', marginBottom: '16px', fontSize: '1.1rem' }}>
              📱 Client Applications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Web Portal', 'Mobile Apps', 'Admin Dashboard', 'Agent Interface'].map(item => (
                <div key={item} style={{
                  padding: '10px 14px',
                  background: 'rgba(96,165,250,0.15)',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Core Platform */}
          <div style={{
            background: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.3)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#22c55e', marginBottom: '16px', fontSize: '1.1rem', textAlign: 'center' }}>
              ⚙️ Angular Enterprise Platform
            </h3>
            
            {/* Micro-Frontend Architecture */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              marginBottom: '20px'
            }}>
              {[
                'Customer Module',
                'Billing Module',
                'Analytics Module',
                'Support Module',
                'Reporting Module',
                'Admin Module'
              ].map(module => (
                <div key={module} style={{
                  padding: '12px',
                  background: 'rgba(34,197,94,0.15)',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: '0.8rem'
                }}>
                  {module}
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'center'
            }}>
              {['Angular 14-16', 'TypeScript', 'NgRx', 'RxJS', 'Angular Material', 'Storybook'].map(tech => (
                <span key={tech} style={{
                  padding: '6px 12px',
                  background: 'rgba(34,197,94,0.2)',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  color: '#22c55e'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Services */}
          <div style={{
            background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.3)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#a855f7', marginBottom: '16px', fontSize: '1.1rem' }}>
              🔧 Backend Services
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['REST APIs', 'Microservices', 'Message Queue', 'Data Pipeline'].map(item => (
                <div key={item} style={{
                  padding: '10px 14px',
                  background: 'rgba(168,85,247,0.15)',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {[
            { value: '1M+', label: 'End Users Served', color: '#60a5fa' },
            { value: '40%', label: 'Performance Improvement', color: '#22c55e' },
            { value: '30%', label: 'Dev Time Reduction', color: '#f59e0b' },
            { value: '95%', label: 'Test Coverage', color: '#a855f7' }
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              border: `1px solid ${stat.color}30`
            }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: stat.color }}>
                {stat.value}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Component Library & DevOps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}>
          {/* Component Library */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              🧩 Enterprise Component Library
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px'
            }}>
              {[
                '50+ Reusable Components',
                'Storybook Documentation',
                'Angular Material Theming',
                'WCAG Accessibility',
                'Responsive Design',
                'Cross-browser Support'
              ].map(feature => (
                <div key={feature} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem'
                }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Pipeline */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              🚀 CI/CD Pipeline Optimization
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ef4444' }}>45 min</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Before</div>
              </div>
              <div style={{ fontSize: '2rem' }}>→</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#22c55e' }}>10 min</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>After</div>
              </div>
              <div style={{
                padding: '8px 16px',
                background: 'rgba(34,197,94,0.2)',
                borderRadius: '20px',
                color: '#22c55e',
                fontWeight: '600'
              }}>
                75% Faster
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['Docker', 'Jenkins', 'Jest', 'Jasmine', 'Automated Testing'].map(tool => (
                <span key={tool} style={{
                  padding: '6px 12px',
                  background: 'rgba(96,165,250,0.2)',
                  borderRadius: '16px',
                  fontSize: '0.75rem'
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Compliance */}
        <div style={{
          marginTop: '24px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <h3 style={{ marginBottom: '16px', fontSize: '1.1rem', textAlign: 'center' }}>
            🌏 APAC Regional Compliance
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            {[
              { region: 'Singapore', standards: ['MAS', 'PDPA', 'SGNIC'] },
              { region: 'Dubai', standards: ['TRA', 'DFSA'] },
              { region: 'APAC', standards: ['Data Protection', 'Telecom Regulations'] }
            ].map(item => (
              <div key={item.region} style={{
                padding: '16px 24px',
                background: 'rgba(96,165,250,0.1)',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '8px' }}>{item.region}</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {item.standards.map(std => (
                    <span key={std} style={{
                      padding: '4px 8px',
                      background: 'rgba(96,165,250,0.2)',
                      borderRadius: '4px',
                      fontSize: '0.7rem'
                    }}>
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSGArchitecture;
