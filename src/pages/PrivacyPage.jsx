import { Link } from 'react-router-dom';

export default function PrivacyPage(){
  return (
    <>
      <section className="hero-bg" style={{ paddingTop: '10rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="container-lg">
          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text)', marginBottom: '1rem' }}>
            Politique de <span className="gradient-text">confidentialité</span>
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: '36rem', margin: '0 auto' }}>
            Informations concernant la collecte et le traitement des données personnelles.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="container-md" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass" style={{ borderRadius: '1rem', padding: '1.5rem' }}>
            <h2 style={{ color: 'var(--text)', fontWeight: 700 }}>Collecte des données</h2>
            <p style={{ color: 'var(--muted)' }}>Les données transmises via le formulaire de contact (nom, email, téléphone, message) sont utilisées uniquement pour répondre à votre demande et ne sont pas partagées avec des tiers.</p>
          </div>

          <div className="glass" style={{ borderRadius: '1rem', padding: '1.5rem' }}>
            <h2 style={{ color: 'var(--text)', fontWeight: 700 }}>Durée de conservation</h2>
            <p style={{ color: 'var(--muted)' }}>Les données sont conservées le temps nécessaire au traitement de la demande, sauf obligation légale contraire. Vous pouvez demander la suppression de vos données en contactant contact@informel-tic.com.</p>
          </div>

          <div className="glass" style={{ borderRadius: '1rem', padding: '1.5rem' }}>
            <h2 style={{ color: 'var(--text)', fontWeight: 700 }}>Cookies</h2>
            <p style={{ color: 'var(--muted)' }}>Ce site utilise un cookie de consentement minimal pour mémoriser votre choix concernant les cookies. Aucun outil tiers de tracking n'est activé sans votre consentement explicite.</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
          </div>
        </div>
      </section>
    </>
  );
}
