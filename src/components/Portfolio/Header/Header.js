import React from "react";

import styles from "./Header.module.css";
import logo from "./logo.png";

export default function Header({ onClick }) {
  let container = styles.container + " js-menu";
  return (
    <div className={container} onClick={onClick}>
      <img src={logo} height="35" width="35" alt="logo" />
      <button className={styles.name} data-value={1}>
        Oleh Volkolupov
      </button>
      <button data-value={2}>Works</button>
      <button data-value={3}>About</button>
      <button data-value={4}>Contact</button>
    </div>
  );
}
