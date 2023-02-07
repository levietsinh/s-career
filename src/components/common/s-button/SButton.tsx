import React from "react";

// Styles
import styles from "./SButton.module.scss";

type Props = {
  name: String,
  onClick: React.MouseEventHandler,
}

const SButton = (props: Props) => {
  const {
    name,
    onClick,
  } = props;
  return (
    <button className={styles["btn"]} onClick={onClick}>
      { name }
    </button>
  )
}

export default SButton;
