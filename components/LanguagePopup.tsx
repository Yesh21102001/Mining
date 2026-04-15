"use client";

import styles from "../styles/modal.module.css";
import enJson from "../locales/en.json";
import zhJson from "../locales/zh.json";

type LanguageKey = "en" | "zh";

interface LanguagePopupProps {
    visible: boolean;
    onSelectLanguage: (language: LanguageKey) => void;
}

const modalText = {
    en: enJson.modal,
    zh: zhJson.modal,
};

export default function LanguagePopup({ visible, onSelectLanguage }: LanguagePopupProps) {
    if (!visible) {
        return null;
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.popup} role="dialog" aria-modal="true">
                <div className={styles.header}>
                    <h2>{modalText.en.title}</h2>
                    <p>{modalText.en.description}</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.primaryButton} onClick={() => onSelectLanguage("en")}>{modalText.en.english}</button>
                    <button className={styles.secondaryButton} onClick={() => onSelectLanguage("zh")}>{modalText.en.chinese}</button>
                </div>
            </div>
        </div>
    );
}
