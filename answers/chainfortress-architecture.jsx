import React, { useState } from 'react';

const ChainFortressArchitecture = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div style={{
      fontFamily: "'Space Grotesk', -apple-system, sans-serif",
      background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f7931a, #f59e0b)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}>
            🔐
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #f7931a, #f59e0b, #fbbf24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            ChainFortress Architecture
          </h1>
        </div>
        <p style={{ color: '#71717a', fontSize: '1.1rem' }}>
          Enterprise Web3 Document Management • Blockchain Security • 100K+ Monthly Transactions
        </p>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '32px'
      }}>
        {['overview', 'blockchain', 'fullstack'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveSection(tab)}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              background: activeSection === tab 
                ? 'linear-gradient(135deg, #f7931a, #f59e0b)' 
                : 'rgba(255,255,255,0.05)',
              color: activeSection === tab ? '#000' : '#fff',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.9rem',
              textTransform: 'capitalize'
            }}
          >
            {tab === 'fullstack' ? 'Full Stack' : tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {activeSection === 'overview' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {/* Frontend Layer */}
            <div style={{
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🖥️</span>
                <h3 style={{ margin: 0, color: '#22c55e' }}>Frontend</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Next.js 13', 'TypeScript', 'React 18', 'GraphQL/Apollo', 'Material-UI', 'WCAG 2.1'].map(tech => (
                  <li key={tech} style={{
                    padding: '8px 12px',
                    background: 'rgba(34,197,94,0.1)',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    fontSize: '0.9rem'
                  }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Blockchain Layer */}
            <div style={{
              background: 'rgba(247,147,26,0.1)',
              border: '1px solid rgba(247,147,26,0.3)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>⛓️</span>
                <h3 style={{ margin: 0, color: '#f7931a' }}>Blockchain</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Solidity', 'Ethereum', 'LayerZero', 'Axelar', 'OpenZeppelin', 'Hardhat'].map(tech => (
                  <li key={tech} style={{
                    padding: '8px 12px',
                    background: 'rgba(247,147,26,0.1)',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    fontSize: '0.9rem'
                  }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend Layer */}
            <div style={{
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>⚙️</span>
                <h3 style={{ margin: 0, color: '#8b5cf6' }}>Backend</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Node.js', 'Express.js', 'MongoDB', 'IPFS', 'Docker', 'Kubernetes'].map(tech => (
                  <li key={tech} style={{
                    padding: '8px 12px',
                    background: 'rgba(139,92,246,0.1)',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    fontSize: '0.9rem'
                  }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeSection === 'blockchain' && (
          <div style={{
            background: 'rgba(247,147,26,0.05)',
            border: '1px solid rgba(247,147,26,0.2)',
            borderRadius: '16px',
            padding: '32px'
          }}>
            <h3 style={{ color: '#f7931a', marginBottom: '24px', textAlign: 'center' }}>
              Smart Contract Architecture
            </h3>
            
            {/* Contract Flow */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                { icon: '📄', title: 'Document Upload', desc: 'Client encrypts' },
                { icon: '→', title: '', desc: '' },
                { icon: '🔐', title: 'AES-256', desc: 'Encryption layer' },
                { icon: '→', title: '', desc: '' },
                { icon: '📦', title: 'IPFS', desc: 'Decentralized storage' },
                { icon: '→', title: '', desc: '' },
                { icon: '⛓️', title: 'Smart Contract', desc: 'Hash on-chain' },
                { icon: '→', title: '', desc: '' },
                { icon: '✅', title: 'Verified', desc: 'Immutable record' }
              ].map((item, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: item.icon === '→' ? '0' : '16px 24px',
                  background: item.icon === '→' ? 'transparent' : 'rgba(247,147,26,0.1)',
                  borderRadius: '12px'
                }}>
                  <div style={{ fontSize: item.icon === '→' ? '1.5rem' : '2rem', marginBottom: '8px', color: '#f7931a' }}>
                    {item.icon}
                  </div>
                  {item.title && <div style={{ fontWeight: '600', fontSize: '0.85rem' }}>{item.title}</div>}
                  {item.desc && <div style={{ color: '#71717a', fontSize: '0.75rem' }}>{item.desc}</div>}
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px'
            }}>
              {[
                { value: '45%', label: 'Gas Cost Reduction', icon: '⛽' },
                { value: '95%', label: 'Security Improvement', icon: '🛡️' },
                { value: '35%', label: 'Cloud Cost Savings', icon: '💰' },
                { value: '0', label: 'Security Vulnerabilities', icon: '🔒' }
              ].map(metric => (
                <div key={metric.label} style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{metric.icon}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#f7931a' }}>{metric.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#71717a' }}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'fullstack' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
          }}>
            {/* API Architecture */}
            <div style={{
              background: 'rgba(139,92,246,0.05)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <h3 style={{ color: '#8b5cf6', marginBottom: '20px' }}>API Architecture</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { method: 'POST', endpoint: '/api/documents', desc: 'Upload & encrypt' },
                  { method: 'GET', endpoint: '/api/documents/:id', desc: 'Retrieve & decrypt' },
                  { method: 'POST', endpoint: '/api/verify', desc: 'Blockchain verification' },
                  { method: 'GET', endpoint: '/api/transactions', desc: 'Transaction history' }
                ].map(api => (
                  <div key={api.endpoint} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '8px'
                  }}>
                    <span style={{
                      padding: '4px 8px',
                      background: api.method === 'GET' ? '#22c55e' : '#3b82f6',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      fontWeight: '700'
                    }}>
                      {api.method}
                    </span>
                    <code style={{ flex: 1, fontSize: '0.85rem' }}>{api.endpoint}</code>
                    <span style={{ color: '#71717a', fontSize: '0.8rem' }}>{api.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Stats */}
            <div style={{
              background: 'rgba(34,197,94,0.05)',
              border: '1px solid rgba(34,197,94,0.2)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <h3 style={{ color: '#22c55e', marginBottom: '20px' }}>Performance</h3>
              {[
                { label: 'Monthly Transactions', value: '100K+', bar: 90 },
                { label: 'API Uptime', value: '99.9%', bar: 99 },
                { label: 'GraphQL Response Time', value: '40% faster', bar: 75 },
                { label: 'Load Time Improvement', value: '60%', bar: 60 },
                { label: 'Test Coverage', value: '80%', bar: 80 }
              ].map(stat => (
                <div key={stat.label} style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.9rem' }}>{stat.label}</span>
                    <span style={{ color: '#22c55e', fontWeight: '600' }}>{stat.value}</span>
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'rgba(34,197,94,0.2)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${stat.bar}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #22c55e, #4ade80)',
                      borderRadius: '3px'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tech Stack Summary */}
      <div style={{
        maxWidth: '1200px',
        margin: '48px auto 0',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '24px', color: '#71717a' }}>Core Technologies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          {[
            'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 
            'Solidity', 'Ethereum', 'IPFS', 'GraphQL', 'Docker', 
            'Kubernetes', 'AWS', 'Web3.js', 'Hardhat'
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
  );
};

export default ChainFortressArchitecture;
