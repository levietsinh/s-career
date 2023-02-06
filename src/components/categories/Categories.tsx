import React from "react";
import styles from "./Categories.module.scss";
import { categoriesList } from "data/categories";

const Categories = () => {
  interface ICategory {
    name: string;
    image: string;
  }
  return (
    <div className={styles["categories"]}>
      <h2>Libraries</h2>
      <ul>
        {categoriesList.map((item: ICategory) => (
          <li key={item.name} className={styles["category"]}>
            <div className={styles["category-icon"]}>
              <img
                className={item.name === "ReactJs" ? styles["rotate"] : ""}
                src={require(`assets/images/${item.image}`)}
                alt="HTML Icon"
              />
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
