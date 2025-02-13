import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}
