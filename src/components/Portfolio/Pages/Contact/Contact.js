import React from "react";

import styles from './Contact.module.css';

export default function Contacts({ onSubmit }) {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <h2 className={styles.myMail}>Volkolupov.Oleh@gmail.com</h2>
      <form action="mailto:volkolupov.oleh@gmail.com">
        <input className={styles.submitButton} type="submit" value="Send me an email" />
      </form>
    </div>
  );
}
