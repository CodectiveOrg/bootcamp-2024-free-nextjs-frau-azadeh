"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import doctors from "@/data/doctors.json";
import CommentForm from "../components/CommentForm";
import styles from "./DoctorPage.module.css";

type Props = {
  params: { id: string };
};

export default function DoctorPage({ params }: Props) {
  const doctor = doctors.find((x) => x.id === parseInt(params.id));

  if (!doctor) {
    return notFound();
  }

  const [comments, setComments] = useState(doctor.comments || []);

  useEffect(() => {
    const storedComments = JSON.parse(
      localStorage.getItem(`doctor-comments-${doctor.id}`) || "[]",
    );
    setComments([...doctor.comments, ...storedComments]);
  }, [doctor.id]);

  const addComment = (user: string, text: string) => {
    const newComment = {
      user,
      text,
      date: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    localStorage.setItem(
      `doctor-comments-${doctor.id}`,
      JSON.stringify(updatedComments),
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.doctorCard}>
        <img src={doctor.image} alt={doctor.name} className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.name}>{doctor.name}</h1>
          <p className={styles.detail}>تخصص: {doctor.specialty}</p>
          <p className={styles.detail}>جنسیت: {doctor.gender}</p>
          <p className={styles.detail}>درجه: {doctor.degree}</p>
          <p className={styles.detail}>زمان کار: {doctor.workTime}</p>
        </div>
      </div>

      <div className={styles.commentsSection}>
        <h2>نظرات کاربران</h2>
        {comments.length > 0 ? (
          <ul className={styles.commentsList}>
            {comments.map((comment, index) => (
              <li key={index} className={styles.comment}>
                <p className={styles.commentUser}>
                  <strong>{comment.user}</strong> -{" "}
                  {new Date(comment.date).toLocaleDateString()}
                </p>
                <p className={styles.commentText}>{comment.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>هنوز نظری ثبت نشده است.</p>
        )}
        <CommentForm onAddComment={addComment} />
      </div>
    </div>
  );
}
