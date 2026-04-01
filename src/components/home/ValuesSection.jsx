import { MapPin, Award, Heart } from 'lucide-react';

const VALUES = [
  {
    icon: MapPin,
    title: 'Ancrage Local (59)',
    desc: 'Basé à Lourches, votre artisan numérique intervient dans tout le département du Nord. Un interlocuteur unique, joignable et réactif.',
  },
  {
    icon: Award,
    title: 'Qualité "Grande Agence"',
    desc: 'Code propre, performances optimisées, SEO intégré et design soigné — la qualité d\'une agence web, la proximité et le prix d\'un artisan.',
  },
  {
    icon: Heart,
    title: 'Engagement Associatif',
    desc: '4 heures de mécénat de compétences offertes chaque mois à une association loi 1901 du 59. Le numérique accessible à tous.',
  },
];

/**
 * Render the value pillars that support the homepage positioning.
 */
export default function ValuesSection() {
  return (
    <section className="section-padding section-alt values-section">
      <div className="container-lg">
        <div className="section-header">
          <h2 className="section-title">
            Nos <span className="gradient-text">Valeurs</span>
          </h2>
          <p className="section-subtitle">
            Ce qui nous différencie : un artisan numérique engagé, local et exigeant sur la qualité.
          </p>
        </div>

        <div className="flex-3col">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="value-card glass glass-hover">
              <div className="value-icon-wrap">
                <Icon size={22} className="value-icon" aria-hidden="true" />
              </div>
              <h3 className="value-title">{title}</h3>
              <p className="value-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
