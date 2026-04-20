"use client";

import { useLanguage } from "../../components/LanguageContext";
import StaffCard from "../../components/StaffCard";
import styles from "../../styles/StaffPage.module.css";

export default function StaffPage() {
    const { t } = useLanguage();

    return (
        <div className={styles.pageWrapper}>
            <section className={styles.sectionBlock}>
                <div className={styles.headlineBlock}>
                    <span className={styles.sectionLabel}>{t.staff.heading}</span>
                    <h1>{t.staff.heading}</h1>
                </div>
                <p className={styles.sectionText}>{t.staff.intro}</p>
            </section>

            <section className={styles.sectionBlock}>
                <div className={styles.staffGrid}>
                    {t.members.map((member, index) => (   // ✅ t.members not t.staff.members
                        <StaffCard
                            key={index}
                            index={index}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                            image={member.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}