import React from "react";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>Done</button>
    </div>
  );
};

export default Button;
