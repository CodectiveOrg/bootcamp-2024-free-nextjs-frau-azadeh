import React, { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label:string;
}


export default function Input({ label, ...rest }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...rest} />
    </div>
  );
}
