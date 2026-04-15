"use client";

import { useLanguage } from "../../components/LanguageContext";
import styles from "../../styles/page.module.css";

export default function ServicesPage() {
    const { t } = useLanguage();

    return (
        <div className={styles.pageWrapper}>
            <section className={styles.sectionBlock}>
                <div className={styles.headlineBlock}>
                    <span className={styles.sectionLabel}>{t.services.heading}</span>
                    <h1>{t.services.heading}</h1>
                </div>
                <p className={styles.sectionText}>{t.services.intro}</p>
            </section>

            <section className={styles.sectionBlock}>
                <div className={styles.cardGridWide}>
                    {t.services.cards.map((card, index) => (
                        <article key={index} className={styles.serviceCard}>
                            <span className={styles.cardNumber}>0{index + 1}</span>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
