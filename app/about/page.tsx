"use client";

import styles from "../../styles/AboutPage.module.css";
import { useLanguage } from "../../components/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>{t.about.heading}</div>
          <h1 className={styles.heroH1}>
            Bridging <em>China</em> & <em>India</em><br />
            through trusted trade.
          </h1>
          <p className={styles.heroSub}>{t.site.tagline}</p>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1494412651409-8dd199f2ff5c?w=1400&q=80"
            alt="Port of Lianyungang"
          />
        </div>
      </section>

      {/* ── INTRO / STORY ── */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            <img
              src="https://images.unsplash.com/photo-1577416412292-747c6607f055?w=900&q=80"
              alt="Container shipping"
            />
            <div className={styles.storyBadge}>
              <small>Est.</small>
              15+
              <small>Years</small>
            </div>
          </div>

          <div className={styles.storyText}>
            <div className={styles.label}>Our Story</div>
            <h2 className={styles.h2}>
              Rooted in Lianyungang, <em>connected</em> to the world.
            </h2>
            <p className={styles.bodyText}>{t.about.paragraph}</p>
            <p className={styles.bodyText}>
              The company specializes in the efficient circulation of resources
              and industrial products between China and India, establishing
              stable cross-border channels and a quality control system. We
              provide one-stop procurement, customs clearance, logistics,
              warehousing and financial services for clients in both countries.
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE BUSINESS ── */}
      <section className={styles.coreSection}>
        <div className={styles.coreHeader}>
          <div className={styles.label}>{t.about.coreBusiness}</div>
          <h2 className={styles.h2}>
            Two markets, <em>one</em> seamless bridge.
          </h2>
        </div>

        <div className={styles.coreGrid}>
          {/* Imports */}
          <div className={styles.coreCard}>
            <div className={styles.coreImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80"
                alt="Mineral imports"
              />
              <span className={styles.coreFlag}>India → China</span>
            </div>
            <div className={styles.coreBody}>
              <h3 className={styles.coreTitle}>{t.about.importsTitle}</h3>
              <ul className={styles.coreList}>
                {t.about.imports.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exports */}
          <div className={styles.coreCard}>
            <div className={styles.coreImgWrap}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80"
                alt="Industrial exports"
              />
              <span className={styles.coreFlag}>China → India</span>
            </div>
            <div className={styles.coreBody}>
              <h3 className={styles.coreTitle}>{t.about.exportsTitle}</h3>
              <ul className={styles.coreList}>
                {t.about.exports.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className={styles.philSection}>
        <div className={styles.philInner}>
          <div className={styles.label}>{t.about.philosophyTitle}</div>
          <h2 className={styles.h2}>
            The principles that <em>guide</em> us.
          </h2>

          <div className={styles.philGrid}>
            {t.about.philosophy.map((value, i) => (
              <div key={value} className={styles.philItem}>
                <span className={styles.philNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className={styles.philTitle}>{value}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING STATEMENT ── */}
      <section className={styles.closingSection}>
        <div className={styles.closingImage}>
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80"
            alt="Global logistics"
          />
          <div className={styles.closingOverlay} />
        </div>
        <div className={styles.closingText}>
          <p className={styles.closingQuote}>
            "Deeply engaged in mineral resources and industrial equipment —
            a reliable <em>long-term partner</em> for bilateral trade between
            China and India."
          </p>
        </div>
      </section>
    </div>
  );
}