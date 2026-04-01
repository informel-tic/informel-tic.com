import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Clock, Code } from 'lucide-react';

const STATS = [
    { icon: TrendingUp, number: '10+', label: 'années d\'expérience' },
    { icon: Users, number: '150+', label: 'projets livrés' },
    { icon: Clock, number: '24h', label: 'délai de réponse' },
    { icon: Code, number: '100%', label: 'code source livré' },
];

function useCountUp(target, duration = 1200) {
    const [value, setValue] = useState('0');
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            obs.unobserve(el);

            const match = target.match(/^(\d+)/);
            if (!match) { setValue(target); return; }

            const end = parseInt(match[1], 10);
            const suffix = target.slice(match[1].length);
            const start = performance.now();

            function tick(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(Math.round(end * eased) + suffix);
                if (progress < 1) requestAnimationFrame(tick);
            }

            requestAnimationFrame(tick);
        }, { threshold: 0.3 });

        obs.observe(el);
        return () => obs.disconnect();
    }, [target, duration]);

    return { ref, value };
}

export default function StatsBar() {
    return (
        <section className="stats-bar">
            <div className="container-lg stats-grid">
                {STATS.map(({ icon: Icon, number, label }) => {
                    const { ref, value } = useCountUp(number);
                    return (
                        <div key={label} className="stat-item" ref={ref}>
                            <div className="stat-icon-wrap">
                                <Icon size={20} aria-hidden="true" />
                            </div>
                            <span className="stat-value">{value}</span>
                            <span className="stat-label">{label}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
