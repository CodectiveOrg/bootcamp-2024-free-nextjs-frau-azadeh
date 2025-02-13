"use client";

import { useState } from "react";
import styles from "./commentForm.module.css";

type Props = {
  onAddComment: (user: string, text: string) => void;
};

export default function CommentForm({ onAddComment }: Props) {
  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && text) {
      onAddComment(user, text);
      setUser("");
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <h3>ثبت نظر جدید</h3>
      <div className={styles.formGroup}>
        <label>نام:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label>نظر:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className={styles.textarea}
        ></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>
        ارسال نظر
      </button>
    </form>
  );
}
