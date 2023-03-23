import React from "react";
import styles from "./ErrorStatus.module.scss";
import SButton from "components/common/s-button/SButton";
import { useNavigate } from "react-router-dom";

const ErrorStatus = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["error"]}>
      <img src={require(`assets/images/ghost.png`)} alt="" />
      <div className={styles["error__status"]}>Whoops!</div>
      <p className={styles["error__title"]}>
        We can't seem the page you are looking for
      </p>
      <SButton name="Return Home" onClick={() => navigate(process.env.PUBLIC_URL)}/>
    </div>
  );
};

export default ErrorStatus;
