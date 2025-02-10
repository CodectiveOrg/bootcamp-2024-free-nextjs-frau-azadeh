import React from "react";
import styles from "./signup.module.css";
import Button from "./Button";
import SocialAuth from "./SocialAuth";
import Input from "./Input";

export default function SignupForm() {
  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.title}>Create an account</h2>
      <p className={styles.subtitle}>Sign up and get 30 day free trial</p>
      
      <Input label="Full name" type="text" placeholder="Amélie Laurent" />
      <Input label="Email" type="email" placeholder="amelielaurent7622@gmail.com" />
      <Input label="Password" type="password" placeholder="***************" />
      
      <Button text="Submit" />
      
      <SocialAuth />
      
      <p className={styles.footer}>
        Have any account? <a href="/login">Sign in</a>
      </p>
      <p className={styles.terms}><a href="/terms">Terms & Conditions</a></p>
    </div>
  );
}
