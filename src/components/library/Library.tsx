import * as React from "react";
import styles from "./Library.module.scss";
import { categoriesList } from "data/categories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Library = () => {
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
export default Library;
