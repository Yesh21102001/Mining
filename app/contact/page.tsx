"use client";

import { useLanguage } from "../../components/LanguageContext";
import ContactForm from "../../components/ContactForm";
import styles from "../../styles/contact.module.css";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className={styles.pageWrapper}>
            <section className={styles.sectionBlock}>
                {/* <div className={styles.headlineBlock}>
                    <span className={styles.sectionLabel}>{t.nav.contact}</span>
                    <h1>{t.contact.heading}</h1>
                </div> */}
                <ContactForm />
            </section>
        </div>
    );
}
