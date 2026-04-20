"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../styles/StaffPage.module.css";

interface StaffCardProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    index?: number;
}

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
}

export default function StaffCard({ name, role, bio, image }: StaffCardProps) {
    const [imgError, setImgError] = useState(false);

    return (
        <article className={styles.staffCard}>
            <div className={styles.staffPhotoWrap}>
                {!imgError && image ? (
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={styles.staffPhoto}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className={styles.staffFallback}>{getInitials(name)}</div>
                )}
            </div>

            <div className={styles.staffInfo}>
                <div className={styles.staffText}>
                    <h3 className={styles.staffName}>{name}</h3>
                    <p className={styles.staffRole}>{role}</p>
                </div>
                {bio && <p className={styles.staffBio}>{bio}</p>}
            </div>
        </article>
    );
}