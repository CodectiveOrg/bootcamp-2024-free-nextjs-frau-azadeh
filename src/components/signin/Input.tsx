import React from "react";
import styles from "./input.module.css";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
}

export default function Input({ label, type, placeholder }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
}