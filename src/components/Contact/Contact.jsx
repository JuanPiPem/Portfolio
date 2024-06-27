import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a
            href="mailto:jplezcano75@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <p className={styles.textLinks}>jplezcano75@gmail.com</p>
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.linkedin.com/in/juan-pablo-lezcano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <p className={styles.textLinks}>LinkedIn</p>
          </a>
        </li>
        <li className={styles.link}>
          <a
            href="https://www.github.com/JuanPiPem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <p className={styles.textLinks}>Github</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};
