"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import enJson from "../locales/en.json";
import zhJson from "../locales/zh.json";
import LanguagePopup from "./LanguagePopup";

type LanguageKey = "en" | "zh";

type Translations = typeof enJson;

interface LanguageContextValue {
    language: LanguageKey;
    setLanguage: (language: LanguageKey) => void;
    t: Translations;
}

const translations = {
    en: enJson,
    zh: zhJson,
};

const defaultLanguage: LanguageKey = "en";

const LanguageContext = createContext<LanguageContextValue>({
    language: defaultLanguage,
    setLanguage: () => { },
    t: translations[defaultLanguage],
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<LanguageKey>(defaultLanguage);
    const [showSelector, setShowSelector] = useState(false);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const stored = typeof window !== "undefined" ? localStorage.getItem("site-language") : null;
        if (stored === "en" || stored === "zh") {
            setLanguageState(stored);
            setShowSelector(false);
        } else {
            setShowSelector(true);
        }
        setInitialized(true);
    }, []);

    const setLanguage = (language: LanguageKey) => {
        setLanguageState(language);
        setShowSelector(false);
        if (typeof window !== "undefined") {
            localStorage.setItem("site-language", language);
        }
    };

    useEffect(() => {
        if (!initialized) return;
        if (typeof window !== "undefined") {
            localStorage.setItem("site-language", language);
        }
    }, [initialized, language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            t: translations[language],
        }),
        [language],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
            <LanguagePopup visible={showSelector} onSelectLanguage={setLanguage} />
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
