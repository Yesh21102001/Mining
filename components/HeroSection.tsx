"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import styles from "../styles/hero.module.css";

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <p className={styles.heroPreTitle}>{t.site.companyName}</p>
                <h1>{t.hero.title}</h1>
                <p>{t.hero.subtitle}</p>
                <div className={styles.heroActions}>
                    <Link href="/services" className={styles.primaryButton}>
                        {t.hero.primaryCta}
                    </Link>
                    <Link href="/contact" className={styles.secondaryButton}>
                        {t.hero.secondaryCta}
                    </Link>
                </div>
            </div>
            <div className={styles.heroVisual}>
                <div className={styles.glowCircle} />
                <div className={styles.featureBox}>
                    <span>{t.services.heading}</span>
                    <p>{t.services.intro}</p>
                </div>
            </div>
        </section>
    );
}
