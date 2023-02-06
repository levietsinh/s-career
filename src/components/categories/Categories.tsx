import React from "react";
import styles from "./Categories.module.scss";
import { categoriesList } from "data/categories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Categories = () => {
  interface ICategory {
    name: string;
    image: string;
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className={styles["categories"]}>
      <h2>Libraries</h2>
      <ul>
        {categoriesList.slice(0, 6).map((item: ICategory) => (
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
      <Slider {...settings}>
        {categoriesList.slice(0, 6).map((item: ICategory) => (
          <div key={item.name} className={styles["category"]}>
            <div className={styles["category-icon"]}>
              <img
                className={item.name === "ReactJs" ? styles["rotate"] : ""}
                src={require(`assets/images/${item.image}`)}
                alt="HTML Icon"
              />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </Slider>
      <p>See more...</p>
    </div>
  );
};
export default Categories;
