import React from 'react';

const EBuilderArchitecture = () => {
  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, sans-serif",
      background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #818cf8, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '8px'
        }}>
          eBuilder Technology Centre
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Enterprise Financial Solutions • Nordic Markets • 1M+ Daily Transactions
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Transaction Processing Visual */}
        <div style={{
          background: 'rgba(99,102,241,0.05)',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '24px'
        }}>
          <h3 style={{ color: '#818cf8', marginBottom: '24px', textAlign: 'center' }}>
            💳 Transaction Processing Pipeline
          </h3>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: '🏦', label: 'Nordea Bank', sub: 'Source' },
              { icon: '→', label: '', sub: '' },
              { icon: '📥', label: 'Ingestion', sub: 'API Gateway' },
              { icon: '→', label: '', sub: '' },
              { icon: '✅', label: 'Validation', sub: 'Business Rules' },
              { icon: '→', label: '', sub: '' },
              { icon: '🔄', label: 'Processing', sub: 'Oracle DB' },
              { icon: '→', label: '', sub: '' },
              { icon: '📊', label: 'Reporting', sub: 'Dashboard' },
              { icon: '→', label: '', sub: '' },
              { icon: '📤', label: 'Settlement', sub: 'Complete' }
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: item.icon === '→' ? '0 8px' : '16px',
                background: item.icon === '→' ? 'transparent' : 'rgba(99,102,241,0.1)',
                borderRadius: '12px',
                minWidth: item.icon === '→' ? 'auto' : '90px'
              }}>
                <div style={{ 
                  fontSize: item.icon === '→' ? '1.2rem' : '1.8rem', 
                  marginBottom: item.icon === '→' ? '0' : '8px',
                  color: '#818cf8'
                }}>
                  {item.icon}
                </div>
                {item.label && <div style={{ fontWeight: '600', fontSize: '0.8rem' }}>{item.label}</div>}
                {item.sub && <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>{item.sub}</div>}
              </div>
            ))}
          </div>
          
          <div style={{
            textAlign: 'center',
            marginTop: '20px',
            padding: '12px',
            background: 'rgba(34,197,94,0.1)',
            borderRadius: '8px'
          }}>
            <span style={{ color: '#22c55e', fontWeight: '600', fontSize: '1.2rem' }}>1,000,000+</span>
            <span style={{ color: '#94a3b8', marginLeft: '8px' }}>Daily Transactions Processed</span>
          </div>
        </div>

        {/* Architecture Components */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {/* Frontend */}
          <div style={{
            background: 'rgba(34,197,94,0.05)',
            border: '1px solid rgba(34,197,94,0.2)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#22c55e', marginBottom: '16px' }}>🖥️ Frontend Layer</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'ExtJS Framework',
                'Bootstrap Responsive',
                'jQuery Optimization',
                'Cross-browser Support',
                'Mobile-first Design'
              ].map(tech => (
                <div key={tech} style={{
                  padding: '10px 14px',
                  background: 'rgba(34,197,94,0.1)',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div style={{
            background: 'rgba(99,102,241,0.05)',
            border: '1px solid rgba(99,102,241,0.2)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#818cf8', marginBottom: '16px' }}>⚙️ Backend Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Java Microservices',
                'RESTful APIs',
                'Message Queues',
                'Batch Processing',
                'Event Sourcing'
              ].map(tech => (
                <div key={tech} style={{
                  padding: '10px 14px',
                  background: 'rgba(99,102,241,0.1)',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div style={{
            background: 'rgba(245,158,11,0.05)',
            border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: '16px',
            padding: '24px'
          }}>
            <h3 style={{ color: '#f59e0b', marginBottom: '16px' }}>🗄️ Data Layer</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Oracle Database',
                'Optimized SQL',
                'Stored Procedures',
                'Data Warehousing',
                'Real-time Sync'
              ].map(tech => (
                <div key={tech} style={{
                  padding: '10px 14px',
                  background: 'rgba(245,158,11,0.1)',
                  borderRadius: '8px',
                  fontSize: '0.85rem'
                }}>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {[
            { value: '60%', label: 'Mobile Engagement ↑', color: '#22c55e', icon: '📱' },
            { value: '45%', label: 'Frontend Performance ↑', color: '#818cf8', icon: '⚡' },
            { value: '50%', label: 'DB Processing ↑', color: '#f59e0b', icon: '🗄️' },
            { value: '$10M+', label: 'Annual Client Savings', color: '#ec4899', icon: '💰' }
          ].map(stat => (
            <div key={stat.label} style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              padding: '24px',
              textAlign: 'center',
              border: `1px solid ${stat.color}30`
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: stat.color }}>
                {stat.value}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects & Clients */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px'
        }}>
          {/* Key Projects */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ marginBottom: '16px' }}>🎯 Key Projects</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Corporate Card Management', client: 'Nordea Bank', impact: 'Responsive UI with ExtJS' },
                { name: 'Travel & Expense Platform', client: 'Nordic Institutions', impact: '1M+ daily transactions' },
                { name: 'Financial Reporting System', client: 'Enterprise Clients', impact: 'Real-time analytics' }
              ].map(project => (
                <div key={project.name} style={{
                  padding: '16px',
                  background: 'rgba(99,102,241,0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(99,102,241,0.1)'
                }}>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>{project.name}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                    <span style={{ color: '#818cf8' }}>{project.client}</span>
                    <span style={{ color: '#94a3b8' }}>{project.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Quality */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '16px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ marginBottom: '16px' }}>🚀 DevOps & Quality</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              {[
                { label: 'CI/CD', value: 'Bamboo + Maven' },
                { label: 'Deployment', value: '40% Faster' },
                { label: 'Testing', value: 'Automated' },
                { label: 'Security', value: 'Financial Grade' }
              ].map(item => (
                <div key={item.label} style={{
                  padding: '14px',
                  background: 'rgba(34,197,94,0.05)',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>
                    {item.label}
                  </div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#22c55e' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{
              marginTop: '16px',
              padding: '12px',
              background: 'rgba(99,102,241,0.1)',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <span style={{ fontWeight: '600' }}>Nordic Financial Compliance</span>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
                PCI-DSS • GDPR • Financial Regulations
              </div>
            </div>
          </div>
        </div>

        {/* Technology Summary */}
        <div style={{
          marginTop: '24px',
          textAlign: 'center'
        }}>
          <h3 style={{ marginBottom: '16px', color: '#94a3b8' }}>Technology Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {[
              'JavaScript', 'jQuery', 'ExtJS', 'Bootstrap', 
              'Java', 'Oracle DB', 'SQL', 'RESTful APIs',
              'Bamboo', 'Maven', 'Microservices'
            ].map(tech => (
              <span key={tech} style={{
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                fontSize: '0.85rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBuilderArchitecture;
