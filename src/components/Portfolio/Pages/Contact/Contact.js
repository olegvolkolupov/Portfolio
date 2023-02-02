import React from "react";

import styles from './Contact.module.css';

export default function Contacts() {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <a className={styles.myLinkedin} href="https://www.linkedin.com/in/oleh-volkolupov/" target="_blank" rel="noreferrer">linkedin.com/in/oleh-volkolupov</a>
      <h2 className={styles.myMail}>Volkolupov.Oleh@gmail.com</h2>
      <form action="mailto:volkolupov.oleh@gmail.com">
        <input className={styles.submitButton} type="submit" value="Send me an email" />
      </form>
    </div>
  );
}
