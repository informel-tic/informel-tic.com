import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Send, Loader, CheckCircle, XCircle, User, Mail,
  Phone, MessageSquare, FileText, ArrowRight, MapPin
} from 'lucide-react';
import SEO from '../components/SEO';

/* ── Regex validation rules ─────────────────────── */
const RULES = {
  name: { regex: /^[a-zA-ZÀ-ÿ\s'-]{2,100}$/, msg: 'Prénom et nom requis (2–100 caractères, lettres uniquement).' },
  email: { regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, msg: 'Adresse e-mail invalide.' },
  phone: { regex: /^[\d\s+().-]{7,20}$/, msg: 'Numéro de téléphone invalide.' },
  subject: { regex: /^.{3,150}$/, msg: 'Sujet requis (3–150 caractères).' },
  message: { regex: /^[\s\S]{10,5000}$/, msg: 'Message requis (10–5000 caractères).' },
};

const INITIAL_VALUES = { name: '', email: '', phone: '', subject: '', message: '' };
const INITIAL_ERRORS = { name: '', email: '', phone: '', subject: '', message: '' };

/* ── Form field component ────────────────────────── */
/**
 * Render a labeled form field with shared accessibility wiring.
 */
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
      <label htmlFor={id} className="field-label">
        <Icon size={14} className="icon-accent" aria-hidden="true" />
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      {isTextarea
        ? <textarea {...commonProps} rows={rows} className="form-input form-textarea" />
        : <input {...commonProps} type={type} />
      }
      {error && (
        <p id={`${id}-error`} role="alert" className="field-error">
          <XCircle size={12} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

/* ── Main Contact Page ───────────────────────────── */
/**
 * Present the contact form and its supporting contact information.
 */
export default function ContactPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    if (toast) {
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToast(null), 6000);
    }
    return () => clearTimeout(toastTimer.current);
  }, [toast]);

  /**
   * Validate a single contact field against the shared regex rules.
   */
  function validateField(name, value) {
    if (name === 'phone' && !value) return '';
    const rule = RULES[name];
    if (!rule) return '';
    return rule.regex.test(value) ? '' : rule.msg;
  }

  /**
   * Validate every contact field before submit.
   */
  function validateAll() {
    const newErrors = {};
    for (const key of Object.keys(RULES)) {
      newErrors[key] = validateField(key, values[key]);
    }
    return newErrors;
  }

  /**
   * Update form state and re-validate fields that were already touched.
   */
  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
    }
  }

  /**
   * Mark a field as touched and validate it on blur.
   */
  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({ ...err, [name]: validateField(name, value) }));
  }

  /**
   * Submit the contact form and map the server response to a toast message.
   */
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
      <SEO
        title="Contact — Devis gratuit sous 24h"
        description="Contactez INFORMEL-TIC pour un devis gratuit et personnalisé. Site web, visibilité Google, caisse, dépannage ou formation — réponse sous 24h, sans engagement."
        url="https://informel-tic.com/contact"
      />
      {/* Header */}
      <section className="hero-bg page-hero text-center">
        <div className="container-lg">
          <div className="badge badge--accent">
            Contactez-nous
          </div>
          <h1 className="font-display page-title">
            Parlons de votre <span className="gradient-text">projet</span>
          </h1>
          <p className="page-lead">
            Décrivez-nous votre activité et vos besoins. Nous vous répondons sous <strong className="text-strong">24 heures</strong> avec un devis personnalisé, gratuit et sans engagement.
          </p>
          <div className="action-row">
            <a href="https://calendly.com/your-username/15min" target="_blank" rel="noopener noreferrer" className="btn-secondary btn-lg">Réserver un appel 15 min</a>
            <Link to="/contact" className="btn-primary btn-lg">Demander un devis</Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="page-section-lg">
        <div className="container-lg">
          <div className="contact-grid">

            {/* Info column */}
            <div className="stack-col">
              <div className="glass glass--padded">
                <h2 className="section-title">Informations de contact</h2>
                <ul className="contact-info-list">
                  <li>
                    <div className="icon-wrap">
                      <Mail size={18} className="icon-accent-contrast" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="muted small">E-mail</p>
                      <a href="mailto:contact@informel-tic.com" className="contact-link">contact@informel-tic.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon-wrap">
                      <MapPin size={18} className="icon-accent-contrast" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="muted small">Adresse</p>
                      <p className="muted">1333 Rue Jean Jaurès<br />59156 Lourches, France</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass glass--padded glass--value">
                <CheckCircle size={20} className="accent-check" aria-hidden="true" />
                <h3 className="info-title">Réponse sous 24h</h3>
                <p className="muted">Obtenez votre devis personnalisé et gratuit en moins d'une journée ouvrée.</p>
              </div>

              <div className="glass glass--padded">
                <h3 className="info-title">À consulter également</h3>
                <ul className="link-list">
                  {[
                    { to: '/offres', label: 'Nos offres & tarifs' },
                    { to: '/a-propos', label: "À propos d'INFORMEL-TIC" },
                  ].map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} className="link-inline"><ArrowRight size={14} aria-hidden="true" /> {label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form column */}
            <div>
              <div className="glass glass--padded">
                <h2 className="section-title">Envoyez-nous un message</h2>

                {toast && (
                  <div role="alert" className={`toast ${toast.type} toast--spaced`}>
                    {toast.type === 'success' ? <CheckCircle size={18} className="toast-icon" /> : <XCircle size={18} className="toast-icon" />}
                    {toast.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate aria-label="Formulaire de contact">
                  <input type="text" name="website" tabIndex={-1} aria-hidden="true" className="sr-only" autoComplete="off" />

                  <div className="form-grid">
                    <Field id="name" label="Nom complet" icon={User} value={values.name} onChange={handleChange} onBlur={handleBlur} error={touched.name ? errors.name : ''} required placeholder="Jean Dupont" />
                    <Field id="email" label="Adresse e-mail" icon={Mail} type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} error={touched.email ? errors.email : ''} required placeholder="jean@exemple.fr" />
                  </div>

                  <div className="form-grid">
                    <Field id="phone" label="Téléphone (optionnel)" icon={Phone} type="tel" value={values.phone} onChange={handleChange} onBlur={handleBlur} error={touched.phone ? errors.phone : ''} placeholder="+33 6 00 00 00 00" />
                    <Field id="subject" label="Sujet" icon={FileText} value={values.subject} onChange={handleChange} onBlur={handleBlur} error={touched.subject ? errors.subject : ''} required placeholder="Création de site vitrine" />
                  </div>

                  <div className="mb-3">
                    <Field id="message" label="Votre message" icon={MessageSquare} value={values.message} onChange={handleChange} onBlur={handleBlur} error={touched.message ? errors.message : ''} required placeholder="Décrivez votre activité, vos besoins, vos objectifs..." rows={6} />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary btn-lg btn-full" aria-disabled={isSubmitting}>
                    {isSubmitting ? (
                      <><span className="spinner" aria-hidden="true" /> Envoi en cours…</>
                    ) : (
                      <><Send size={18} /> Envoyer mon message</>
                    )}
                  </button>

                  <p className="muted body-sm text-center mt-1">
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
