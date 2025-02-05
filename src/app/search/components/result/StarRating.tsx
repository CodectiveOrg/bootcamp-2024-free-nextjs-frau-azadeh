import React, { useState, useEffect } from "react";
import styles from "./doctorCard.module.css";
import DoctorStar from "./DoctorStar";

interface StarRatingProps {
  id: number;
  defaultRating: number;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  id,
  defaultRating,
  onRatingChange,
}) => {
  const [userRating, setUserRating] = useState<number | null>(null);

  useEffect(() => {
    const storedRating = localStorage.getItem(`doctor-rating-${id}`);
    if (storedRating) {
      setUserRating(parseInt(storedRating, 10));
    }
  }, [id]);

  const handleRating = (newRating: number) => {
    setUserRating(newRating);
    localStorage.setItem(`doctor-rating-${id}`, newRating.toString());
    onRatingChange(newRating);
  };

  const finalRating = userRating || defaultRating;

  return (
    <div className={styles.ratingInput}>
      {[1, 2, 3, 4, 5].map((star) => (
        <DoctorStar
          key={star}
          filled={star <= finalRating}
          onClick={() => handleRating(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
