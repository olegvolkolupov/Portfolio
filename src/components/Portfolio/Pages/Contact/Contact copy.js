import React from "react";

import styles from './Contact.module.css';

export default function Contacts({ onSubmit }) {
  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <form className={styles.mailForm} onSubmit={onSubmit}>
        <fieldset className={styles.mailFieldset}>
          {/* <div role="group"> */}
            <legend>Your email & message:</legend>
            <br />
            <label>
              Enter your email address:
              <br />
              <input className={styles.emailInput} name="email" type="email" autoComplete="off" />
            </label>
            <br />
            <br />
            <label>
              Type your message:
              <br />
              <textarea className={styles.messageArea} name="message" rows="5" />
            </label>
            <br />
            <br />
          {/* </div> */}
          <input className={styles.submitButton} type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
}
