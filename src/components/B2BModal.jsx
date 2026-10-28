import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS } from '../data/products';

export default function B2BModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: 'restaurant',
    email: '',
    phone: '',
    interestedSauces: ['originale', 'hot-soja'],
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const toggleSauce = (id) => {
    setFormData(prev => ({
      ...prev,
      interestedSauces: prev.interestedSauces.includes(id)
        ? prev.interestedSauces.filter(s => s !== id)
        : [...prev.interestedSauces, id]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto" style={{ backgroundColor: 'var(--bg-modal)' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading mb-2">
              Demande envoyée avec succès !
            </h3>
            <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
              Merci pour votre intérêt pour <strong className="text-white">SŌSA</strong>. Notre équipe commerciale vous contactera sous 24h pour organiser l'envoi de votre coffret d'échantillons.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-amber-400 text-black font-bold text-xs uppercase tracking-wider"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-2">
                <Sparkles className="w-3 h-3" /> Espace Professionnels & Dégustation
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Demander un coffret d'échantillons SŌSA
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Restaurateurs, chefs de poké bars, épiceries fines ou distributeurs : testez nos 6 sauces dans votre établissement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex: Alex Dupont"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Nom de l'établissement *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="ex: O'Poké Bowl Paris"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@monrestaurant.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Type d'activité
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 text-white text-base sm:text-sm focus:outline-none focus:border-amber-400"
                  style={{ backgroundColor: 'var(--bg-input)' }}
                >
                  <option value="gms">Grande Distribution / GMS / Centrale d'achat</option>
                  <option value="restaurant">Restaurant de Sushis / Japonais</option>
                  <option value="poke">Poké Bar / Street Food</option>
                  <option value="epicerie">Épicerie fine / Traiteur</option>
                  <option value="distributeur">Distributeur / Grossiste alimentaire</option>
                  <option value="autre">Autre projet culinaire</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Sauces souhaitées en échantillon (format 150ml)
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRODUCTS.map((prod) => {
                    const isChecked = formData.interestedSauces.includes(prod.id);
                    return (
                      <button
                        type="button"
                        key={prod.id}
                        onClick={() => toggleSauce(prod.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border flex items-center gap-1.5 ${
                          isChecked
                            ? 'bg-amber-400 text-black border-amber-400 shadow-sm'
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: prod.color }} />
                        {prod.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Message ou adresse d'expédition
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Précisez vos besoins en volume ou vos questions spécifiques..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                Valider ma demande d'échantillons
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
