import React from "react";
import styles from "./ErrorStatus.module.scss";

const ErrorStatus = () => {
  return (
    <div className={styles["error"]}>
      <div className={styles["error__status"]}>404</div>
      <div className={styles["error__title"]}>Page not found!</div>
      <p>
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted
      </p>
    </div>
  );
};

export default ErrorStatus;
