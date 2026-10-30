import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, Heart } from 'lucide-react';

export default function Footer({ onOpenB2B }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="pt-20 pb-12 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'transparent', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold tracking-[0.25em] text-white font-heading">
                S<span className="text-amber-400">Ō</span>SA
              </span>
              <span className="text-[10px] tracking-[0.53em] uppercase text-zinc-400 font-semibold -mt-1">
                SAUCES SOJA
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              La nouvelle vague des sauces de dégustation. Flacon squeeze 150ml haute précision, 100% Vegan et élaboré en France avec passion.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400 transition-colors"
                aria-label="TikTok"
              >
                <span className="text-[11px] font-bold font-mono">TK</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
              Navigation
            </h4>
            <a href="#collection" className="text-sm text-zinc-400 hover:text-amber-300 transition-colors">
              La Collection SŌSA Originale
            </a>
            <a href="#experience" className="text-sm text-zinc-400 hover:text-amber-300 transition-colors">
              Palette de Saveurs
            </a>
            <a href="#philosophie" className="text-sm text-zinc-400 hover:text-amber-300 transition-colors">
              L'Esprit SŌSA
            </a>
            <a href="#trouver" className="text-sm text-zinc-400 hover:text-amber-300 transition-colors">
              Points de Vente Partenaires
            </a>
            <button
              onClick={onOpenB2B}
              className="text-sm text-amber-400 hover:text-amber-300 text-left transition-colors font-semibold"
            >
              Demande d'échantillons B2B →
            </button>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
              Le Cercle SŌSA
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Inscrivez-vous pour recevoir nos recettes inédites, nos secrets de chefs et les annonces de nos points de vente éphémères.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" />
                Bienvenue dans le cercle gourmand SŌSA !
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-base sm:text-xs focus:outline-none focus:border-amber-400 flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <span className="text-[11px] text-zinc-500">
              Sans spam. Désinscription possible en un clic.
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SŌSA France. Tous droits réservés.</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-400">
              <span>Fabriqué en France</span>
              <span className="inline-flex w-3.5 h-2.5 rounded-[1px] overflow-hidden shadow-sm shrink-0 border border-white/20">
                <span className="w-1/3 h-full bg-[#002654]"></span>
                <span className="w-1/3 h-full bg-white"></span>
                <span className="w-1/3 h-full bg-[#ce1126]"></span>
              </span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
