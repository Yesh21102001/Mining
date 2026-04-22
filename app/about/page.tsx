"use client";

import styles from "../../styles/AboutPage.module.css";
import { useLanguage } from "../../components/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>

      {/* ── HERO (full-bleed split) ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroTag}>{t.about.heading}</div>
          <h1 className={styles.heroH1}>
            Bridging <em>China</em> &amp; <em>India</em><br />
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

      {/* ── PHOTO STRIP (3 stacked images) ── */}
      <section className={styles.photoStrip}>
        <div className={styles.stripImg}>
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80" alt="Cargo containers" />
          <div className={styles.stripCaption}>Port Operations</div>
        </div>
        <div className={styles.stripImg}>
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Warehouse" />
          <div className={styles.stripCaption}>Warehousing</div>
        </div>
        <div className={styles.stripImg}>
          <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80" alt="Trade route map" />
          <div className={styles.stripCaption}>Trade Routes</div>
        </div>
        <div className={styles.stripImg}>
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Mountain minerals" />
          <div className={styles.stripCaption}>Mineral Sourcing</div>
        </div>
      </section>

      {/* ── STORY ── */}
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
              stable cross-border channels and a quality control system.
            </p>

            {/* Inline image row inside story */}
            <div className={styles.storyImgRow}>
              <img src="https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=600&q=80" alt="Minerals" />
              <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80" alt="Logistics" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH PANORAMA ── */}
      <section className={styles.panoramaSection}>
        <img
          src="https://images.unsplash.com/photo-1502083896352-259ab9e342d7?w=1800&q=80"
          alt="Shipping panorama"
        />
        <div className={styles.panoramaOverlay}>
          <p className={styles.panoramaStat}>
            <span>200+</span> Shipments per year
          </p>
          <p className={styles.panoramaStat}>
            <span>15+</span> Years of trade
          </p>
          <p className={styles.panoramaStat}>
            <span>2</span> Countries, 1 Vision
          </p>
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

      {/* ── MOSAIC GALLERY ── */}
      <section className={styles.mosaicSection}>
        <div className={styles.mosaicGrid}>
          <div className={`${styles.mosaicCell} ${styles.mosaicTall}`}>
            <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80" alt="Freight train" />
          </div>
          <div className={styles.mosaicCell}>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Port cranes" />
          </div>
          <div className={styles.mosaicCell}>
            <img src="https://images.unsplash.com/photo-1564419434053-a7a3bdd00e7c?w=800&q=80" alt="Mineral processing" />
          </div>
          <div className={`${styles.mosaicCell} ${styles.mosaicWide}`}>
            <img src="https://images.unsplash.com/photo-1494412651409-8dd199f2ff5c?w=1200&q=80" alt="Container ship" />
            <div className={styles.mosaicLabel}>Lianyungang Port, China</div>
          </div>
          <div className={styles.mosaicCell}>
            <img src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80" alt="India industry" />
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

      {/* ── SPLIT IMAGE + TEXT (reversed) ── */}
      <section className={styles.splitSection}>
        <div className={styles.splitImg}>
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80"
            alt="Industrial facility"
          />
        </div>
        <div className={styles.splitText}>
          <div className={styles.label}>Our Reach</div>
          <h2 className={styles.h2}>
            From the mines of India to<br /><em>factories of China.</em>
          </h2>
          <p className={styles.bodyText}>
            We manage the full supply chain — sourcing, quality control,
            documentation, customs, and last-mile delivery — so our partners
            can focus on growth.
          </p>
        </div>
      </section>

      {/* ── SECOND PANORAMA ── */}
      <section className={styles.panoramaSectionAlt}>
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=80"
          alt="Global logistics night"
        />
        <div className={styles.panoramaOverlayDark} />
      </section>

      {/* ── CLOSING ── */}
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