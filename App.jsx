import React, { useState } from 'react';
import { MapPin, MessageCircle, ArrowRight, Check } from 'lucide-react';
import logoImg from '../public/logo.png';

export default function ZePouce() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simule un appel API (tu peux connecter Netlify Forms ou EmailJS)
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F4] to-[#FFE8D6]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[#E8E0D8] z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="ZePouce" className="w-10 h-10" />
            <div>
              <div className="text-lg font-bold text-[#2D2A26]">
                Ze<span className="text-[#FF6B35]">Pouce</span>
              </div>
              <div className="text-xs text-[#8C8278]">Le partage sans blabla</div>
            </div>
          </div>
          <a href="#beta" className="px-6 py-2 rounded-full bg-[#FF6B35] text-white font-semibold hover:bg-[#E55A24] transition">
            Accès bêta
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-32 h-32 flex items-center justify-center">
                <img src={logoImg} alt="ZePouce" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#2D2A26]">
            Le partage<br />
            <span className="text-[#FF6B35]">sans blabla</span>
          </h1>

          <p className="text-xl text-[#8C8278] mb-8 leading-relaxed max-w-2xl mx-auto">
            Une app qui améliore le Karma.
            <br />
            <span className="text-lg">Connecte les co-voyageurs et les conducteurs sur des spots physiques vérifiés.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#beta" className="px-8 py-4 rounded-full bg-[#FF6B35] text-white font-bold text-lg hover:bg-[#E55A24] transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              Rejoindre l'accès bêta <ArrowRight size={20} />
            </a>
            <a href="#concept" className="px-8 py-4 rounded-full border-2 border-[#4CAF7D] text-[#4CAF7D] font-bold text-lg hover:bg-[#4CAF7D]/5 transition">
              En savoir plus
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur rounded-2xl p-4">
              <div className="text-3xl font-bold text-[#FF6B35]">10+</div>
              <div className="text-sm text-[#8C8278]">Pages intégrées</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-2xl p-4">
              <div className="text-3xl font-bold text-[#4CAF7D]" style={{letterSpacing: '0.05em', textRendering: 'optimizeLegibility'}}>Firebase</div>
              <div className="text-sm text-[#8C8278]">Backend sécurisé</div>
            </div>
            <div className="bg-white/60 backdrop-blur rounded-2xl p-4">
              <div className="text-3xl font-bold text-[#FFB347]">100%</div>
              <div className="text-sm text-[#8C8278]">Gratuit</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="concept" className="py-20 px-6 bg-gradient-to-r from-[#4CAF7D]/10 to-[#FF6B35]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2D2A26]">Comment ça marche</h2>
          <p className="text-center text-[#8C8278] mb-16 text-lg">L'app en 3 screenshots</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Screen 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gradient-to-b from-white to-[#FFF9F4] rounded-3xl p-6 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-[#FFF9F4] to-[#FFE8D6] rounded-2xl flex flex-col items-center justify-center text-center p-6">
                  <div className="text-6xl mb-4">🖐️</div>
                  <h3 className="font-bold text-[#2D2A26] mb-2">Créer un compte</h3>
                  <p className="text-sm text-[#8C8278]">Email ou Google en 2 clics</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm font-semibold text-[#FF6B35] mb-2">01 · Inscription</div>
                <p className="text-[#8C8278] text-sm">Tu peux aussi consulter en anonyme</p>
              </div>
            </div>

            {/* Screen 2 */}
            <div className="relative group md:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF7D] to-[#2E7D52] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gradient-to-b from-white to-[#F0FFF4] rounded-3xl p-6 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#4CAF7D] to-[#2E7D52] rounded-2xl flex flex-col items-center justify-center text-center p-6 text-white">
                  <MapPin size={56} className="mb-4" />
                  <h3 className="font-bold mb-2">Spots vérifiés</h3>
                  <p className="text-sm opacity-90">Rond-Point de la Gare, Aire d'accueil...</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm font-semibold text-[#4CAF7D] mb-2">02 · Explorer</div>
                <p className="text-[#8C8278] text-sm">Carte interactive avec trajets disponibles</p>
              </div>
            </div>

            {/* Screen 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#FFB347] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gradient-to-b from-white to-[#FFF9F4] rounded-3xl p-6 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-[#FFE8D6] to-[#FFB347] rounded-2xl flex flex-col items-center justify-center text-center p-6">
                  <MessageCircle size={56} className="mb-4 text-[#FF6B35]" />
                  <h3 className="font-bold text-[#2D2A26] mb-2">Chat intégré</h3>
                  <p className="text-sm text-[#8C8278]">Message directement avec les conducteurs</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-sm font-semibold text-[#FF6B35] mb-2">03 · Connecter</div>
                <p className="text-[#8C8278] text-sm">Notation & avis après chaque trajet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2D2A26]">Pourquoi ZePouce ?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '🗺️', title: 'Spots physiques', desc: 'Des lieux vérifiés et sécurisés où se rencontrer' },
              { icon: '💬', title: 'Chat intégré', desc: 'Communique avant, pendant, après le trajet' },
              { icon: '⭐', title: 'Système de notes', desc: 'Notation et avis pour plus de confiance' },
              { icon: '🌍', title: 'Mobilité inclusive', desc: 'Relie les zones rurales et urbaines' },
              { icon: '🔒', title: 'Sécurité Firebase', desc: 'Données chiffrées et protégées' },
              { icon: '♻️', title: 'Écologique', desc: 'Réduis ton empreinte carbone' }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E8E0D8] hover:border-[#FF6B35] hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-[#2D2A26] mb-2">{feature.title}</h3>
                <p className="text-[#8C8278]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="beta" className="py-20 px-6 bg-gradient-to-br from-[#FF6B35] via-[#FFB347] to-[#FF6B35] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Deviens bêta-testeur 🚀
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Sois parmi les premiers à tester ZePouce. On te contactera quand l'accès bêta sera disponible.
          </p>

          {submitted ? (
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#4CAF7D] rounded-full flex items-center justify-center">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2A26]">Merci !</h3>
              <p className="text-[#8C8278]">On te contactera très bientôt pour l'accès bêta.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-xl">
              <input
                type="email"
                placeholder="Ton email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-transparent outline-none text-[#2D2A26] placeholder-[#8C8278]"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-[#FF6B35] text-white font-bold rounded-xl hover:bg-[#E55A24] transition disabled:opacity-50"
              >
                {loading ? 'Envoi...' : 'Rejoindre'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2A26] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🖐️</span>
                <div className="font-bold">ZePouce</div>
              </div>
              <p className="text-[#8C8278]">Le partage sans blabla</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Liens</h4>
              <ul className="space-y-2 text-[#8C8278]">
                <li><a href="#concept" className="hover:text-white transition">Comment ça marche</a></li>
                <li><a href="#beta" className="hover:text-white transition">Accès bêta</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-[#8C8278]">
                <li><a href="https://zepouce.github.io/legal/politique-confidentialite.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Politique de confidentialité</a></li>
                <li><a href="https://zepouce.github.io/legal/cgu.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">CGU</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#4CAF7D]/20 pt-8 text-center text-[#8C8278]">
            <p>© 2026 ZePouce. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
