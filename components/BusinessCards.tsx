"use client";

import { useLanguage } from "./LanguageContext";
import styles from "../styles/cards.module.css";

export default function BusinessCards() {
    const { t } = useLanguage();

    return (
        <section className={styles.servicesSection}>
            <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>{t.services.heading}</span>
                <h2>{t.services.intro}</h2>
            </div>
            <div className={styles.cardGrid}>
                {t.services.cards.map((card, index) => (
                    <article key={index} className={styles.cardItem}>
                        <span className={styles.cardAccent}>0{index + 1}</span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
