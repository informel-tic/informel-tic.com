import { Link } from 'react-router-dom';

const SECTIONS = [
  {
    title: '1. Éditeur du site',
    content: `INFORMEL-TIC — Entrepreneur Individuel
Dirigeant : CHON Rachid, Bouzid, Sénouci
SIREN : 101 902 567 | SIRET : 101 902 567 00011
Code APE : 6201Z — Programmation informatique
Siège : 1333 Rue Jean Jaurès, 59156 Lourches, France
Email : contact@informel-tic.com
TVA non applicable — article 293 B du Code Général des Impôts`,
  },
  {
    title: '2. Hébergement',
    content: `Le site est hébergé via YunoHost sur un serveur dédié.
Responsable technique : CHON Rachid
Email hébergeur : contact@informel-tic.com`,
  },
  {
    title: '3. Propriété intellectuelle',
    content: `L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, code source) est la propriété exclusive d'INFORMEL-TIC, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, ou publication, même partielle, de ces éléments est strictement interdite sans autorisation écrite préalable d'INFORMEL-TIC.`,
  },
  {
    title: '4. Données personnelles & RGPD',
    content: `Les données recueillies via le formulaire de contact (nom, email, téléphone, message) sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni vendues, ni partagées avec des tiers. Conformément au RGPD (Règlement Général sur la Protection des Données), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez : contact@informel-tic.com`,
  },
  {
    title: '5. Cookies',
    content: `Ce site n'utilise aucun cookie de tracking, aucun cookie publicitaire, et aucun outil d'analyse tiers (pas de Google Analytics). Seuls des cookies strictement nécessaires au fonctionnement technique du site peuvent être utilisés.`,
  },
  {
    title: '6. Limitation de responsabilité',
    content: `INFORMEL-TIC met tout en œuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, INFORMEL-TIC ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations disponibles. INFORMEL-TIC décline toute responsabilité en cas de dommage résultant d'une intrusion frauduleuse d'un tiers, d'un virus informatique, ou plus généralement de tout dysfonctionnement indépendant de sa volonté.`,
  },
  {
    title: '7. Loi applicable',
    content: `Les présentes mentions légales sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents.`,
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="hero-bg" style={{ paddingTop: '10rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="container-lg">
          <h1 className="font-display" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', marginBottom: '1rem' }}>
            Mentions <span className="gradient-text">légales</span>
          </h1>
          <p style={{ color: '#94a3b8', maxWidth: '36rem', margin: '0 auto' }}>
            Informations légales conformes à la loi LCEN du 21 juin 2004.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '6rem' }}>
        <div className="container-md" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {SECTIONS.map(({ title, content }) => (
            <div key={title} className="glass" style={{ borderRadius: '1rem', padding: '2rem' }}>
              <h2 style={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.75rem' }}>{title}</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
