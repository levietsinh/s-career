import clsx from "clsx";
import React from "react";

// Styles
import styles from "./SButton.module.scss";

type Props = {
  name: String;
  onClick?: React.MouseEventHandler;
  isActive?: boolean;
};

const SButton = (props: Props) => {
  const { name, onClick, isActive } = props;
  return (
    <button
      className={clsx(styles["btn"], isActive ? styles["btn__active"] : "")}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default SButton;
