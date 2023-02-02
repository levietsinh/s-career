import React from "react";
import styles from "./Categories.module.scss";
import htmlIcon from "assets/images/html.png";

const Categories = () => {
  const categories = [
    
  ];

  return (
    <div className={styles["categories"]}>
      <ul>
        <li className={styles["category"]}>
          <div className={styles["category-icon"]}>
            <img src={htmlIcon} alt="HTML Icon" />
          </div>
          <span>HTML</span>
        </li>
      </ul>
    </div>
  )
}
export default Categories;