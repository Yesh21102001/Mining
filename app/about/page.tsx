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
            src="/photos/0b6cbe18-5f2c-45b4-9810-24a0468b5ab7.jpg"
            alt="Port of Lianyungang"
          />
        </div>
      </section>

      {/* ── PHOTO STRIP (3 stacked images) ── */}
      <section className={styles.photoStrip}>
        <div className={styles.stripImg}>
          <img src="/photos/0cebe91c-954e-4ee1-8174-e1b8bb7b1ab1.jpg" alt="Cargo containers" />
          <div className={styles.stripCaption}>Port Operations</div>
        </div>
        <div className={styles.stripImg}>
          <img src="/photos/1a8a3a8e-5d19-4475-8fcb-30ef5e3cd6ee.jpg" alt="Warehouse" />
          <div className={styles.stripCaption}>Warehousing</div>
        </div>
        <div className={styles.stripImg}>
          <img src="/photos/3af35d3b-4cf7-4c02-a3a6-0ca10954d241.jpg" alt="Trade route map" />
          <div className={styles.stripCaption}>Trade Routes</div>
        </div>
        <div className={styles.stripImg}>
          <img src="/photos/4b8c5b67-171f-42f4-ba38-42d0afa3eccd.jpg" alt="Mountain minerals" />
          <div className={styles.stripCaption}>Mineral Sourcing</div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            <img
              src="/photos/5b1ac0f0-9923-4b17-b24c-f701d6857910.jpg"
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
              <img src="/photos/5c1f6973-dc9d-4e05-95f7-09af98c204b3.jpg" alt="Minerals" />
              <img src="/photos/6aefaedc-6704-4b6f-a456-1e03c700d1a1.jpg" alt="Logistics" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH PANORAMA ── */}
      <section className={styles.panoramaSection}>
        <img
          src="/photos/6d859d7f-8c21-4fdb-bc20-a3dc22c2a433.jpg"
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
                src="/photos/India-to-China.png"
                alt="Mineral imports"
              />

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
                src="/photos/China-to-India.png"
                alt="Industrial exports"
              />

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
            <img src="/photos/40f6c833-2a03-4af3-945a-4f8bf941299f.jpg" alt="Freight train" />
          </div>
          <div className={styles.mosaicCell}>
            <img src="/photos/58a14e25-69b4-4e8a-bddd-d1f7dc5f4f34.jpg" alt="Port cranes" />
          </div>
          <div className={styles.mosaicCell}>
            <img src="/photos/88a4fea5-f453-4087-a5e2-74ec738cab8f.jpg" alt="Mineral processing" />
          </div>
          <div className={`${styles.mosaicCell} ${styles.mosaicWide}`}>
            <img src="/photos/367c6bc2-d923-475b-b389-535622e01a31.jpg" alt="Container ship" />
            <div className={styles.mosaicLabel}>Lianyungang Port, China</div>
          </div>
          <div className={styles.mosaicCell}>
            <img src="/photos/768e7e84-b96d-48ec-978a-dc76efe8e24d.jpg" alt="India industry" />
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
            src="/photos/771fcfa2-0a68-4c72-8ff5-80d7a73d5ed1.jpg"
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
          src="/photos/772c6070-6ca8-48ee-8741-b53dbd86445d.jpg"
          alt="Global logistics night"
        />
        <div className={styles.panoramaOverlayDark} />
      </section>

      {/* ── CLOSING ── */}
      <section className={styles.closingSection}>
        <div className={styles.closingImage}>
          <img
            src="/photos/0806a8e8-b33f-4c19-82fa-820bd451d5f2.jpg"
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