import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setEmail('');
      setTimeout(() => setEmailSubmitted(false), 3000);
    }
  };

  // Logo PNG
  const LogoImg = ({ size = '40' }) => (
    <img 
      src="/zepouce-logo.png" 
      alt="ZePouce" 
      style={{ width: size, height: size }}
    />
  );

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#2D2A26' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFF9F4',
        borderBottom: '1px solid #E8DFD5',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <LogoImg />
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#2D2A26' }}>
            Ze<span style={{ color: '#FF6B35' }}>Pouce</span>
          </span>
        </div>
        <button
          onClick={() => document.getElementById('beta').scrollIntoView({ behavior: 'smooth' })}
          style={{
            backgroundColor: '#FF6B35',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '2rem',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#E55A25'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FF6B35'}
        >
          Accès bêta
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{
        marginTop: '4rem',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        textAlign: 'center',
        backgroundColor: 'linear-gradient(135deg, #FFF9F4 0%, #F5EFE7 100%)',
        backgroundImage: 'linear-gradient(135deg, #FFF9F4 0%, #F5EFE7 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <LogoImg size="120" />
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Le partage sans blabla
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#8C8278',
            marginBottom: '2.5rem',
            lineHeight: '1.6'
          }}>
            Connecte les co-voyageurs et les automobilistes en un seul clic. Simple, rapide, efficace.
          </p>
          <button
            onClick={() => document.getElementById('beta').scrollIntoView({ behavior: 'smooth' })}
            style={{
              backgroundColor: '#FF6B35',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              borderRadius: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Rejoindre l'accès bêta
          </button>
        </div>
      </section>

      {/* How it works */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Comment ça marche ?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {[
            { num: '1', title: 'Inscription', desc: 'Crée ton compte en quelques secondes' },
            { num: '2', title: 'Explorer', desc: 'Trouve les co-voyageurs ou trajets près de toi' },
            { num: '3', title: 'Connecter', desc: 'Envoie un message et partage le trajet' }
          ].map((step) => (
            <div key={step.num} style={{
              padding: '2rem',
              backgroundColor: '#FFF9F4',
              borderRadius: '1rem',
              border: '2px solid #E8DFD5',
              textAlign: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#FF6B35',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: '0 auto 1rem'
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                {step.title}
              </h3>
              <p style={{ color: '#8C8278' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#F5EFE7',
        marginTop: '3rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Pourquoi ZePouce ?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { emoji: '⚡', title: 'Ultra rapide', desc: 'Interface simple et intuitive' },
              { emoji: '🔒', title: 'Sécurisé', desc: 'Vérification des utilisateurs' },
              { emoji: '💚', title: 'Écologique', desc: 'Réduis ton empreinte carbone' },
              { emoji: '🤝', title: 'Communautaire', desc: 'Crée du lien en voyageant' },
              { emoji: '📱', title: 'Mobile first', desc: 'Optimisé pour ton téléphone' },
              { emoji: '✨', title: 'Gratuit', desc: 'Sans frais cachés' }
            ].map((feature) => (
              <div key={feature.title} style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                textAlign: 'center',
                border: '1px solid #E8DFD5'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.emoji}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#8C8278', fontSize: '0.95rem' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Beta */}
      <section id="beta" style={{
        padding: '4rem 2rem',
        maxWidth: '600px',
        margin: '3rem auto 0',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          Rejoins l'accès bêta
        </h2>
        <p style={{
          color: '#8C8278',
          marginBottom: '2rem',
          fontSize: '1.05rem'
        }}>
          Sois parmi les premiers à découvrir ZePouce. Inscription gratuite et sans engagement.
        </p>
        <form onSubmit={handleNewsletterSubmit} style={{
          display: 'flex',
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          <input
            type="email"
            placeholder="ton@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              padding: '0.9rem 1.2rem',
              border: '2px solid #E8DFD5',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#FF6B35'}
            onBlur={(e) => e.target.style.borderColor = '#E8DFD5'}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#FF6B35',
              color: 'white',
              border: 'none',
              padding: '0.9rem 1.8rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#E55A25'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FF6B35'}
          >
            S'inscrire
          </button>
        </form>
        {emailSubmitted && (
          <p style={{ color: '#4CAF7D', fontWeight: '600' }}>
            ✓ Merci ! Tu recevras bientôt un email pour accéder à la bêta.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: '#2D2A26',
        color: '#FFF9F4',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '1rem' }}>
            <a href="https://zepouce.github.io/legal/cgu.html" style={{
              color: '#FFB347',
              textDecoration: 'none',
              marginRight: '1.5rem'
            }}>
              CGU
            </a>
            <a href="https://zepouce.github.io/legal/politique-confidentialite.html" style={{
              color: '#FFB347',
              textDecoration: 'none'
            }}>
              Politique de confidentialité
            </a>
          </div>
          <p>© 2026 ZePouce. Le partage sans blabla.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
