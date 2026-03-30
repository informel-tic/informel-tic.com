import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Send, Loader, CheckCircle, XCircle, User, Mail,
  Phone, MessageSquare, FileText, ArrowRight, MapPin
} from 'lucide-react';

/* ── Regex validation rules ─────────────────────── */
const RULES = {
  name:    { regex: /^[a-zA-ZÀ-ÿ\s'\-]{2,100}$/,                  msg: 'Prénom et nom requis (2–100 caractères, lettres uniquement).' },
  email:   { regex: /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/, msg: 'Adresse e-mail invalide.' },
  phone:   { regex: /^[\d\s\+\-\(\)\.]{7,20}$/,                    msg: 'Numéro de téléphone invalide.' },
  subject: { regex: /^.{3,150}$/,                                   msg: 'Sujet requis (3–150 caractères).' },
  message: { regex: /^[\s\S]{10,5000}$/,                            msg: 'Message requis (10–5000 caractères).' },
};

const INITIAL_VALUES = { name: '', email: '', phone: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', phone: '', subject: '', message: '' };

/* ── Form field component ────────────────────────── */
function Field({ id, label, icon: Icon, type = 'text', value, onChange, onBlur, error, required, placeholder, rows }) {
  const isTextarea = !!rows;
  const commonProps = {
    id, name: id, value, onChange, onBlur, placeholder, required,
    'aria-describedby': error ? `${id}-error` : undefined,
    'aria-invalid': !!error,
    className: `form-input ${error ? 'error' : ''}`,
  };

  return (
    <div>
      <label htmlFor={id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#cbd5e1', fontWeight: 500, marginBottom: '0.5rem' }}>
        <Icon size={14} style={{ color: '#818cf8' }} />
        {label}
        {required && <span style={{ color: '#818cf8' }}>*</span>}
      </label>
      {isTextarea
        ? <textarea {...commonProps} rows={rows} style={{ resize: 'vertical', minHeight: '120px' }} />
        : <input {...commonProps} type={type} />
      }
      {error && (
        <p id={`${id}-error`} role="alert" style={{ marginTop: '0.375rem', fontSize: '0.75rem', color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <XCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

/* ── Main Contact Page ───────────────────────────── */
export default function ContactPage() {
  const [values, setValues]           = useState(INITIAL_VALUES);
  const [errors, setErrors]           = useState(INITIAL_ERRORS);
  const [touched, setTouched]         = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast]             = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    if (toast) {
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(null), 6000);
    }
    return () => clearTimeout(toastTimer.current);
  }, [toast]);

  function validateField(name, value) {
    if (name === 'phone' && !value) return '';
    const rule = RULES[name];
    if (!rule) return '';
    return rule.regex.test(value) ? '' : rule.msg;
  }

  function validateAll() {
    const newErrors = {};
    for (const key of Object.keys(RULES)) {
      newErrors[key] = validateField(key, values[key]);
    }
    return newErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });
    const newErrors = validateAll();
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch('/mailer.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, website: '' }),
      });
      const data = await response.json().catch(() => ({ success: false, message: 'Réponse inattendue du serveur.' }));

      if (response.ok && data.success) {
        setToast({ type: 'success', message: data.message });
        setValues(INITIAL_VALUES);
        setErrors(INITIAL_ERRORS);
        setTouched({});
      } else {
        setToast({ type: 'error', message: data.message || 'Une erreur est survenue. Veuillez réessayer.' });
      }
    } catch {
      setToast({ type: 'error', message: 'Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="hero-bg" style={{ paddingTop: '10rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container-lg">
          <div className="badge" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc', marginBottom: '1.5rem', display: 'inline-flex' }}>
            Contactez-nous
          </div>
          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: 'white', marginBottom: '1rem' }}>
            Parlons de votre <span className="gradient-text">projet</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto' }}>
            Décrivez-nous votre activité et vos besoins. Nous vous répondons sous <strong style={{ color: 'white' }}>24 heures</strong> avec un devis personnalisé, gratuit et sans engagement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container-lg">
          <style>{`@media(min-width:1024px){.contact-grid{grid-template-columns:2fr 3fr !important;}}`}</style>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>

            {/* Info column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass" style={{ borderRadius: '1rem', padding: '1.75rem' }}>
                <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', marginBottom: '1.25rem' }}>Informations de contact</h2>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={18} style={{ color: '#818cf8' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.125rem' }}>E-mail</p>
                      <a href="mailto:contact@informel-tic.com" style={{ color: '#e2e8f0', fontSize: '0.875rem', textDecoration: 'none' }}>contact@informel-tic.com</a>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem', background: 'rgba(99,102,241,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={18} style={{ color: '#818cf8' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.125rem' }}>Adresse</p>
                      <p style={{ color: '#e2e8f0', fontSize: '0.875rem' }}>1333 Rue Jean Jaurès<br />59156 Lourches, France</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass" style={{ borderRadius: '1rem', padding: '1.75rem', background: 'linear-gradient(135deg, rgba(52,211,153,0.1), rgba(52,211,153,0.05))', border: '1px solid rgba(52,211,153,0.2)' }}>
                <CheckCircle size={20} style={{ color: '#34d399', marginBottom: '0.75rem' }} />
                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.25rem' }}>Réponse sous 24h</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Obtenez votre devis personnalisé et gratuit en moins d'une journée ouvrée.</p>
              </div>

              <div className="glass" style={{ borderRadius: '1rem', padding: '1.75rem' }}>
                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '1rem', fontSize: '0.875rem' }}>À consulter également</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { to: '/offres', label: 'Nos offres & tarifs' },
                    { to: '/a-propos', label: "À propos d'INFORMEL-TIC" },
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none' }}>
                        <ArrowRight size={14} /> {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form column */}
            <div>
              <div className="glass" style={{ borderRadius: '1rem', padding: '2rem' }}>
                <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', marginBottom: '1.5rem' }}>Envoyez-nous un message</h2>

                {toast && (
                  <div role="alert" className={`toast ${toast.type}`} style={{ marginBottom: '1.5rem' }}>
                    {toast.type === 'success' ? <CheckCircle size={18} style={{ flexShrink: 0 }} /> : <XCircle size={18} style={{ flexShrink: 0 }} />}
                    {toast.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
                  <input type="text" name="website" tabIndex={-1} aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} autoComplete="off" />

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <Field id="name" label="Nom complet" icon={User} value={values.name} onChange={handleChange} onBlur={handleBlur} error={touched.name ? errors.name : ''} required placeholder="Jean Dupont" />
                    <Field id="email" label="Adresse e-mail" icon={Mail} type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} error={touched.email ? errors.email : ''} required placeholder="jean@exemple.fr" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <Field id="phone" label="Téléphone (optionnel)" icon={Phone} type="tel" value={values.phone} onChange={handleChange} onBlur={handleBlur} error={touched.phone ? errors.phone : ''} placeholder="+33 6 00 00 00 00" />
                    <Field id="subject" label="Sujet" icon={FileText} value={values.subject} onChange={handleChange} onBlur={handleBlur} error={touched.subject ? errors.subject : ''} required placeholder="Création de site vitrine" />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <Field id="message" label="Votre message" icon={MessageSquare} value={values.message} onChange={handleChange} onBlur={handleBlur} error={touched.message ? errors.message : ''} required placeholder="Décrivez votre activité, vos besoins, vos objectifs..." rows={6} />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }} aria-disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><span className="spinner" aria-hidden="true" /> Envoi en cours…</>
                    ) : (
                      <><Send size={18} /> Envoyer mon message</>
                    )}
                  </button>

                  <p style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center', marginTop: '1rem' }}>
                    En envoyant ce formulaire, vous acceptez d'être contacté par INFORMEL-TIC concernant votre projet.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
