"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import styles from "../styles/contact.module.css";

// ✅ Replace with your WhatsApp number (country code + number, no + or spaces)
const ADMIN_WHATSAPP = "919XXXXXXXXX";

const WaIcon = () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [focused, setFocused] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!formData.name.trim()) errs.name = "Please enter your name";
        if (!formData.email.trim()) errs.email = "Please enter your email";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Enter a valid email";
        if (!formData.message.trim()) errs.message = "Please write a message";
        return errs;
    };

    const handleWhatsApp = () => {
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }

        const text = [
            `📋 *New Contact Form Submission*`,
            ``,
            `👤 *Name:* ${formData.name}`,
            `📧 *Email:* ${formData.email}`,
            `💬 *Message:*`,
            formData.message,
        ].join("\n");

        window.open(
            `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(text)}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const fieldCls = (name: string, extra?: string) =>
        [
            styles.fieldGroup,
            extra ? styles[extra] : "",
            focused === name ? styles.active : "",
            formData[name as keyof typeof formData] ? styles.filled : "",
            errors[name] ? styles.hasError : "",
        ].filter(Boolean).join(" ");

    return (
        <div className={styles.contactWrap}>

            {/* ── Left dark panel ── */}
            <aside className={styles.panel}>
                <span className={styles.eyebrow}>{t.nav.contact}</span>

                <h2 className={styles.panelHeading}>
                    {t.contact.heading}
                </h2>
                <p className={styles.panelSub}>{t.contact.intro}</p>

                <div className={styles.divider} />

                <ul className={styles.infoList}>
                    <li className={styles.infoRow}>
                        <span className={styles.infoIcon}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                        </span>
                        <div>
                            <p className={styles.infoLabel}>{t.contact.addressTitle}</p>
                            <p className={styles.infoVal}>{t.contact.address}</p>
                        </div>
                    </li>
                    <li className={styles.infoRow}>
                        <span className={styles.infoIcon}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                            </svg>
                        </span>
                        <div>
                            <p className={styles.infoLabel}>Email</p>
                            <a href={`mailto:${t.contact.email}`} className={styles.infoLink}>{t.contact.email}</a>
                        </div>
                    </li>
                    <li className={styles.infoRow}>
                        <span className={styles.infoIcon}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.09 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-.44a2 2 0 012.11.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </span>
                        <div>
                            <p className={styles.infoLabel}>Phone</p>
                            <a href={`tel:${t.contact.phone}`} className={styles.infoLink}>{t.contact.phone}</a>
                        </div>
                    </li>
                </ul>

                <a
                    href={`https://wa.me/${ADMIN_WHATSAPP}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waPanelBtn}
                >
                    <WaIcon />
                    Direct WhatsApp chat
                    <svg className={styles.arrow} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </aside>

            {/* ── Right form card ── */}
            <div className={styles.formArea}>
                <div className={styles.formCard}>
                    <h3 className={styles.cardTitle}>Send a message</h3>
                    <p className={styles.cardSub}>Your details go straight to WhatsApp — quick and direct.</p>

                    <div className={styles.fields}>

                        {/* Name */}
                        <div className={fieldCls("name")}>
                            <input
                                type="text" id="name" name="name"
                                value={formData.name} onChange={handleChange}
                                onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                                autoComplete="name"
                            />
                            <label htmlFor="name">{t.contact.formName}</label>
                            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                        </div>

                        {/* Email */}
                        <div className={fieldCls("email")}>
                            <input
                                type="email" id="email" name="email"
                                value={formData.email} onChange={handleChange}
                                onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                                autoComplete="email"
                            />
                            <label htmlFor="email">{t.contact.formEmail}</label>
                            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                        </div>

                        {/* Message */}
                        <div className={fieldCls("message", "textareaGroup")}>
                            <textarea
                                id="message" name="message"
                                value={formData.message} onChange={handleChange}
                                onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                                rows={4}
                            />
                            <label htmlFor="message">{t.contact.formMessage}</label>
                            {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                        </div>

                        <button type="button" className={styles.waBtn} onClick={handleWhatsApp}>
                            <WaIcon />
                            Send via WhatsApp
                        </button>
                        <p className={styles.waHint}>Opens WhatsApp pre-filled — just tap send.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}