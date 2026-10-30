import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Mail, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS } from '../data/products';

const ROLE_LABELS = {
  gms: "Grande Distribution / GMS / Centrale d'achat",
  restaurant: "Restaurant de Sushis / Japonais",
  poke: "Poké Bar / Street Food",
  epicerie: "Épicerie fine / Traiteur",
  distributeur: "Distributeur / Grossiste alimentaire",
  autre: "Autre projet culinaire",
};

export default function B2BModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const sauceNames = formData.interestedSauces
      .map((id) => PRODUCTS.find((p) => p.id === id)?.name || id)
      .join(', ');

    const payload = {
      access_key: '234df21a-b940-43d5-a432-ef56aae4d351',
      subject: `Nouvelle demande d'échantillons B2B - ${formData.company || formData.name}`,
      from_name: 'SŌSA Pro Website',
      'Nom et Prénom': formData.name,
      'Établissement / Société': formData.company,
      'Type d activité': ROLE_LABELS[formData.role] || formData.role,
      'Email professionnel': formData.email,
      'Téléphone': formData.phone || 'Non renseigné',
      'Sauces sélectionnées': sauceNames || 'Toutes les sauces',
      'Message / Adresse de livraison': formData.message || 'Aucun message particulier',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        // Solution 2 : Met à jour l'URL avec le paramètre pour Google Ads / Analytics
        if (typeof window !== 'undefined') {
          const newUrl = `${window.location.pathname}?demande=success`;
          window.history.pushState({ formSubmitted: true }, '', newUrl);

          // Signal pour Google Tag Manager / GA4 si installé
          if (window.dataLayer) {
            window.dataLayer.push({
              event: 'generate_lead',
              form_name: 'b2b_degustation',
              lead_company: formData.company,
            });
          }
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'generate_lead', {
              event_category: 'B2B Form',
              event_label: formData.company,
            });
          }
        }

        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setErrorMessage(result.message || "Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (err) {
      setErrorMessage("Impossible de contacter le serveur d'envoi. Veuillez vérifier votre connexion ou nous contacter directement à contact@sosa.asia");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Si le formulaire avait été soumis, on nettoie l'URL à la fermeture
    if (submitted && typeof window !== 'undefined') {
      window.history.pushState({}, '', window.location.pathname);
    }
    setSubmitted(false);
    setErrorMessage('');
    onClose();
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
          onClick={handleClose}
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
            <p className="text-sm text-zinc-300 max-w-md mx-auto mb-4">
              Merci pour votre intérêt pour <strong className="text-white">SŌSA</strong>. Notre équipe commerciale vous contactera sous 24h pour organiser l'envoi de votre coffret d'échantillons.
            </p>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
              <span>Une question urgente ?</span>
              <a href="mailto:direction@sosa.asia" className="text-amber-400 hover:underline font-medium">direction@sosa.asia</a>
              <span>•</span>
              <a href="mailto:contact@sosa.asia" className="text-amber-400 hover:underline font-medium">contact@sosa.asia</a>
            </div>
            <button
              onClick={handleClose}
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

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 active:scale-95 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi de votre demande en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Valider ma demande d'échantillons
                  </>
                )}
              </button>

              {/* Contact direct par email */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
                <span>Vous préférez nous écrire directement ?</span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:contact@sosa.asia"
                    className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    contact@sosa.asia
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a
                    href="mailto:direction@sosa.asia"
                    className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    direction@sosa.asia
                  </a>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
