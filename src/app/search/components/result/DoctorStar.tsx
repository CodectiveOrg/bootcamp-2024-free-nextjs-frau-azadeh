import React from "react";
import styles from "./doctorCard.module.css";

interface StarProps {
  filled: boolean;
  onClick: () => void;
}

const DoctorStar: React.FC<StarProps> = ({ filled, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.ratingStar} ${filled ? styles.active : ""}`}
    >
      ★
    </button>
  );
};

export default DoctorStar;
