import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Star } from 'lucide-react';

/**
 * Carte de prix réutilisable pour le B2B.
 * Props :
 *   name        — Nom de l'offre
 *   price       — Prix principal (string, ex: "290 €")
 *   priceSub    — Sous-texte prix (ex: "one-shot", "/mois")
 *   monthlyPrice — Prix mensuel optionnel (ex: "+ 35 €/mois")
 *   tagline     — Courte description de l'offre
 *   target      — Cible (ex: "Artisans & commerçants")
 *   inclusions  — Array de strings (éléments inclus, check vert)
 *   exclusions  — Array de strings (éléments exclus, croix rouge)
 *   featured    — Boolean, met la carte en surbrillance
 *   featuredLabel — Texte du badge (ex: "Meilleur rapport qualité/prix")
 *   cta         — { label, to } pour le bouton CTA
 *   note        — Note additionnelle en bas de carte
 *   icon        — Composant Lucide optionnel
 */
export default function PricingCardB2B({
    name,
    price,
    pricePrefix,
    priceSub,
    monthlyPrice,
    tagline,
    target,
    inclusions = [],
    exclusions = [],
    featured = false,
    featuredLabel,
    cta,
    note,
    icon: Icon,
}) {
    const hasBadge = featured && featuredLabel;
    return (
        <div className={`pricing-card-outer${hasBadge ? ' pricing-card-outer--with-badge' : ''}`}>
            {hasBadge && (
                <div className={`pricing-badge-wrap ${featured ? 'pricing-badge-wrap--featured' : ''}`}>
                    <span className={`pricing-badge ${featured ? 'pricing-badge--featured' : ''}`}>
                        <Star size={12} aria-hidden="true" /> {featuredLabel}
                    </span>
                </div>
            )}

            <article className={`pricing-card${featured ? ' pricing-card--featured' : ''}`} aria-label={name ? `${name} — offre` : 'offre'}>
                {featured && <div className="pricing-accent-line" />}

                <header className="pricing-header">
                    {Icon && (
                        <div className="pricing-icon-wrap" aria-hidden="true">
                            <Icon size={20} aria-hidden="true" />
                        </div>
                    )}
                    <div className="pricing-header-body">
                        <h3 className="pricing-title">{name}</h3>
                        {tagline && <p className="pricing-tagline">{tagline}</p>}
                    </div>
                </header>

                <div className="pricing-prices">
                    <div className="pricing-main">
                        <div className="price-stack">
                            {pricePrefix && <span className="price-prefix">{pricePrefix}</span>}
                            <span className="price-number">{price}</span>
                            {priceSub && <span className="price-sub">{priceSub}</span>}
                        </div>
                        {monthlyPrice && (
                            <div className="pricing-sub">
                                <span className="price-month accent">{monthlyPrice}</span>
                            </div>
                        )}
                    </div>
                    {target && <p className="pricing-target">{target}</p>}
                </div>

                <div className="pricing-features">
                    {inclusions.length > 0 && (
                        <ul className="check-list" aria-label="Inclus">
                            {inclusions.map((item) => (
                                <li key={item}>
                                    <CheckCircle size={14} className="icon-check-green" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                    {exclusions.length > 0 && (
                        <ul className="exclude-list" aria-label="Non inclus">
                            {exclusions.map((item) => (
                                <li key={item}>
                                    <XCircle size={14} className="icon-exclude-red" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {note && <p className="pricing-note muted">{note}</p>}

                {cta && (
                    <div className="pricing-cta">
                        <Link to={cta.to} className={featured ? 'btn-primary' : 'btn-secondary'}>
                            {cta.label}
                        </Link>
                    </div>
                )}
            </article>
        </div>
    );
}
