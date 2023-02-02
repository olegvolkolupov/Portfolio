import React from "react";

import styles from "./Works.module.css";

import keycodeImg from "./img/01_keycode.png";
import galleryImg from "./img/02_gallery.png";
import timerImg from "./img/03_timer.png";
import countryInfoImg from "./img/04_countryInfo.png";
import imgSearchImg from "./img/05_imageSearch.png";
import onCinemaImg from "./img/06_onCinema.png";

export default function Works() {
  return (
    <div className={styles.container}>

    <div className={styles.contantBlock}>
        <p>Online cinema</p>
        <a href="https://olegvolkolupov.github.io/online-cinema/" target="_blanck">
          <img className={styles.siteImage} src={onCinemaImg} alt="online-cinema" />
        </a>
        <p>
          <span>Repository: </span>
          <a href="https://github.com/olegvolkolupov/online-cinema" target="_blanck">
            github.com/olegvolkolupov/online-cinema
          </a>
        </p>
      </div>

      <div className={styles.contantBlock}>
        <p>Search for images</p>
        <a
          href="https://olegvolkolupov.github.io/images-search/"
          target="_blanck"
        >
          <img className={styles.siteImage} src={imgSearchImg} alt="images search" />
        </a>
        <p>
          <span>Repository: </span>
          <a
            href="https://github.com/olegvolkolupov/images-search"
            target="_blanck"
          >
            github.com/olegvolkolupov/images-search
          </a>
        </p>
      </div>

      <div className={styles.contantBlock}>
        <p>Get info about country</p>
        <a
          href="https://olegvolkolupov.github.io/country-info/"
          target="_blanck"
        >
          <img className={styles.siteImage} src={countryInfoImg} alt="country info" />
        </a>
        <p>
          <span>Repository: </span>
          <a
            href="https://github.com/olegvolkolupov/country-info"
            target="_blanck"
          >
            github.com/olegvolkolupov/country-info
          </a>
        </p>
      </div>

      <div className={styles.contantBlock}>
        <p>Simple timer</p>
        <a href="https://olegvolkolupov.github.io/timer/" target="_blanck">
          <img className={styles.siteImage} src={timerImg} alt="timer" />
        </a>
        <p>
          <span>Repository: </span>
          <a href="https://github.com/olegvolkolupov/timer" target="_blanck">
            github.com/olegvolkolupov/timer
          </a>
        </p>
      </div>

      <div className={styles.contantBlock}>
        <p>Images gallery</p>
        <a href="https://olegvolkolupov.github.io/gallery-1/" target="_blanck">
          <img className={styles.siteImage} src={galleryImg} alt="gallery" />
        </a>
        <p>
          <span>Repository: </span>
          <a
            href="https://github.com/olegvolkolupov/gallery-1"
            target="_blanck"
          >
            github.com/olegvolkolupov/gallery-1
          </a>
        </p>
      </div>

      <div className={styles.contantBlock}>
        <p>Keycode</p>
        <a href="https://olegvolkolupov.github.io/keycode/" target="_blanck">
          <img className={styles.siteImage} src={keycodeImg} alt="keycode" />
        </a>
        <p>
          <span>Repository: </span>
          <a href="https://github.com/olegvolkolupov/keycode" target="_blanck">
            github.com/olegvolkolupov/keycode
          </a>
        </p>
      </div>
    </div>
  );
}
