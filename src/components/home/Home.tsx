import React from "react";
import styles from "./Home.module.scss";
import avatar from "assets/images/s-character.png";
import CategoriesCarousel from "components/home/categories-carousel/CategoriesCarousel";

const Home = () => {
  return (
    <>
      <div className={styles["home"]}>
        <div className={styles["home-intro"]}>
            <div className={styles["x-factor"]}/>
            <div className={styles["o-factor"]}/>
          <div className={styles["home-avatar"]}>
            <img src={avatar} alt="S Character" />
          </div>
          <div className={styles["home-greeting"]}>
            <h2>
              I’m <span>Alireza</span> Alireza Kavousy nezjad
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              nihil quae a nemo repellendus labore, veniam sapiente blanditiis!
              Nesciunt accusantium eos facere! Id odio asperiores iste quis cum!
              Nostrum, perferendis.
            </p>
          </div>
        </div>
      </div>
      <CategoriesCarousel/>
    </>
  );
};

export default Home;
