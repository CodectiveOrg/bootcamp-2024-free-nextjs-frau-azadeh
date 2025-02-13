import React, { useState } from "react";
import styles from "./rating.module.css";

interface RatingProps {
  defaultRating: number;
  onRate: (rating: number) => void;
}

export const Rating: React.FC<RatingProps> = ({ defaultRating, onRate }) => {
  const [finalRating, setFinalRating] = useState<number>(defaultRating);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className={styles.ratingContainer}>
      <p className={styles.ratingText}>امتیاز: {finalRating} از ۵</p>
      <div className={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={`${styles.star} ${index <= (hover ?? finalRating) ? styles.active : ""}`}
            onClick={() => {
              setFinalRating(index);
              onRate(index);
            }}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};
