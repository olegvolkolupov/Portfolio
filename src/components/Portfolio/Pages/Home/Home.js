import React from "react";

import styles from "./Home.module.css";

export default function Home({ onClick }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <span className={styles.bigTitle}>
          JAVA Script
        </span>
        <br />
        <span className={styles.smallTitle}>DEVELOPER</span>
      </p>
      <button
        className={styles.button}
        type="button"
        onClick={onClick}
      >
        View Works
      </button>
    </div>
  );
}
