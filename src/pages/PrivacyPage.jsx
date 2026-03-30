import { Link } from 'react-router-dom';

export default function PrivacyPage(){
  return (
    <>
      <section className="hero-bg page-hero text-center">
        <div className="container-lg">
          <h1 className="font-display page-title">
            Politique de <span className="gradient-text">confidentialité</span>
          </h1>
          <p className="page-lead">
            Informations concernant la collecte et le traitement des données personnelles.
          </p>
        </div>
      </section>

      <section className="page-section-lg">
        <div className="container-md stack-col">
          <div className="glass glass--small">
            <h2 className="info-title">Collecte des données</h2>
            <p className="muted">Les données transmises via le formulaire de contact (nom, email, téléphone, message) sont utilisées uniquement pour répondre à votre demande et ne sont pas partagées avec des tiers.</p>
          </div>

          <div className="glass glass--small">
            <h2 className="info-title">Durée de conservation</h2>
            <p className="muted">Les données sont conservées le temps nécessaire au traitement de la demande, sauf obligation légale contraire. Vous pouvez demander la suppression de vos données en contactant contact@informel-tic.com.</p>
          </div>

          <div className="glass glass--small">
            <h2 className="info-title">Cookies</h2>
            <p className="muted">Ce site utilise un cookie de consentement minimal pour mémoriser votre choix concernant les cookies. Aucun outil tiers de tracking n'est activé sans votre consentement explicite.</p>
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
          </div>
        </div>
      </section>
    </>
  );
}
