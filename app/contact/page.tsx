"use client";

import { useState } from "react";
import { useLanguage } from "../../components/LanguageContext";
import styles from "../../styles/contact.module.css";

// 🔁 Replace these with your real values later
const ADMIN_WHATSAPP = "911234567890";      // country code + number, no "+" or spaces
const ADMIN_WECHAT = "your_wechat_id";    // your WeChat ID (not phone number)

function WaIcon() {
    return (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

function WeChatIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .547-.014.817-.038-.173-.58-.267-1.189-.267-1.817 0-3.747 3.633-6.787 8.107-6.787.207 0 .412.01.615.022-.618-3.593-4.426-6.332-9.071-6.332zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 4.867c-3.825 0-6.924 2.56-6.924 5.717 0 3.156 3.099 5.716 6.924 5.716.795 0 1.585-.145 2.411-.33a.66.66 0 0 1 .484.074l1.63.946a.3.3 0 0 0 .14.046c.13 0 .237-.12.237-.25 0-.062-.024-.12-.037-.178l-.336-1.254a.583.583 0 0 1-.013-.126.582.582 0 0 1 .2-.434c1.524-1.112 2.477-2.696 2.477-4.46 0-3.157-3.098-5.717-6.923-5.717h-.27zm-2.52 2.088c.492 0 .892.404.892.902 0 .499-.4.904-.892.904a.898.898 0 0 1-.892-.904c0-.498.4-.902.892-.902zm4.319 0c.492 0 .892.404.892.902 0 .499-.4.904-.892.904a.898.898 0 0 1-.892-.904c0-.498.4-.902.892-.902z" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="10" r="3" />
            <path d="M12 2a8 8 0 0 1 8 8c0 6-8 13-8 13S4 16 4 10a8 8 0 0 1 8-8z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 .1 1.18 2 2 0 0 1 2.09 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6.16 6.16l1.27-.44a2 2 0 0 1 2.11.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12,5 19,12 12,19" />
        </svg>
    );
}

export default function ContactPage() {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [focused, setFocused] = useState<string | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [wcToast, setWcToast] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = (): Record<string, string> => {
        const errs: Record<string, string> = {};
        if (!formData.name.trim()) errs.name = "Please enter your name";
        if (!formData.email.trim()) errs.email = "Please enter your email";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Enter a valid email";
        if (!formData.message.trim()) errs.message = "Please write a message";
        return errs;
    };

    const buildMessage = () =>
        [
            "📋 *New Contact Form Submission*",
            "",
            `👤 *Name:* ${formData.name}`,
            `📧 *Email:* ${formData.email}`,
            "💬 *Message:*",
            formData.message,
        ].join("\n");

    const handleWhatsApp = () => {
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        window.open(
            `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(buildMessage())}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const handleWeChat = async () => {
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        // WeChat has no prefilled-message URL, so we copy the message
        // and open the WeChat deep link (works if the app is installed).
        try {
            await navigator.clipboard.writeText(buildMessage());
        } catch {
            // clipboard may fail on insecure contexts — ignore silently
        }

        setWcToast(`Message copied! Add WeChat ID: ${ADMIN_WECHAT}, then paste.`);
        window.setTimeout(() => setWcToast(null), 5000);

        // Try to open WeChat app on mobile
        window.location.href = `weixin://dl/chat?${ADMIN_WECHAT}`;
    };

    const fieldCls = (name: string, extra?: string): string => {
        const classes = [styles.fieldGroup];
        if (extra) classes.push(styles[extra]);
        if (focused === name) classes.push(styles.active);
        if (formData[name as keyof typeof formData]) classes.push(styles.filled);
        if (errors[name]) classes.push(styles.hasError);
        return classes.join(" ");
    };

    return (
        <div className={styles.pageWrapper}>
            <section className={styles.sectionBlock}>
                <div className={styles.contactWrap}>

                    {/* Left dark panel */}
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
                                    <LocationIcon />
                                </span>
                                <div>
                                    <p className={styles.infoLabel}>{t.contact.addressTitle}</p>
                                    <p className={styles.infoVal}>{t.contact.address}</p>
                                </div>
                            </li>
                            <li className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <EmailIcon />
                                </span>
                                <div>
                                    <p className={styles.infoLabel}>Email</p>
                                    <a href={`mailto:${t.contact.email}`} className={styles.infoLink}>
                                        {t.contact.email}
                                    </a>
                                </div>
                            </li>
                            <li className={styles.infoRow}>
                                <span className={styles.infoIcon}>
                                    <PhoneIcon />
                                </span>
                                <div>
                                    <p className={styles.infoLabel}>Phone</p>
                                    <a href={`tel:${t.contact.phone}`} className={styles.infoLink}>
                                        {t.contact.phone}
                                    </a>
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
                            <ArrowIcon />
                        </a>

                        <a
                            href={`weixin://dl/chat?${ADMIN_WECHAT}`}
                            className={styles.wcPanelBtn}
                        >
                            <WeChatIcon />
                            Direct WeChat chat
                            <ArrowIcon />
                        </a>
                    </aside>

                    {/* Right form card */}
                    <div className={styles.formArea}>
                        <div className={styles.formCard}>
                            <h3 className={styles.cardTitle}>Send a message</h3>
                            <p className={styles.cardSub}>
                                Reach us on WhatsApp or WeChat — whichever you prefer.
                            </p>

                            <div className={styles.fields}>

                                <div className={fieldCls("name")}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("name")}
                                        onBlur={() => setFocused(null)}
                                        autoComplete="name"
                                    />
                                    <label htmlFor="name">{t.contact.formName}</label>
                                    {errors.name && (
                                        <span className={styles.errorMsg}>{errors.name}</span>
                                    )}
                                </div>

                                <div className={fieldCls("email")}>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("email")}
                                        onBlur={() => setFocused(null)}
                                        autoComplete="email"
                                    />
                                    <label htmlFor="email">{t.contact.formEmail}</label>
                                    {errors.email && (
                                        <span className={styles.errorMsg}>{errors.email}</span>
                                    )}
                                </div>

                                <div className={fieldCls("message", "textareaGroup")}>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused(null)}
                                        rows={4}
                                    />
                                    <label htmlFor="message">{t.contact.formMessage}</label>
                                    {errors.message && (
                                        <span className={styles.errorMsg}>{errors.message}</span>
                                    )}
                                </div>

                                <div className={styles.sendRow}>
                                    <button
                                        type="button"
                                        className={styles.waBtn}
                                        onClick={handleWhatsApp}
                                    >
                                        <WaIcon />
                                        Send via WhatsApp
                                    </button>

                                    <button
                                        type="button"
                                        className={styles.wcBtn}
                                        onClick={handleWeChat}
                                    >
                                        <WeChatIcon />
                                        Send via WeChat
                                    </button>
                                </div>

                                <p className={styles.waHint}>
                                    WhatsApp opens pre-filled. WeChat copies the message — just paste it in chat.
                                </p>

                                {wcToast && (
                                    <div className={styles.wcToast} role="status">
                                        {wcToast}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}