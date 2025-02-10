import React from "react";
import styles from "./button.module.css";

export default function SocialAuth() {
  return (
    <div className={styles.socialButtons}>
      <button className={styles.appleButton}>Apple</button>
      <button className={styles.googleButton}>Google</button>
    </div>
  );
}