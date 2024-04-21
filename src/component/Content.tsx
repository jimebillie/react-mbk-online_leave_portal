import styles from "../style/component/Content.module.css";
import React from "react";

export default function Content({children}: { children: React.ReactNode }) {
    return (
            <div className={styles.wrapContent}>
                <div className={styles.container}>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
    )
}