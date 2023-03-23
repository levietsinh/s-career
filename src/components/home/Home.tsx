import React from "react";
import styles from "./Home.module.scss";
import avatar from "assets/images/s-character.png";
import CategoriesCarousel from "components/home/categories-carousel/CategoriesCarousel";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <>
      <div className={styles["home"]}>
        <div className={styles["home-intro"]} id="id-1">
          <div className={styles["x-factor"]} />
          <div className={styles["o-factor"]} />
          <div className={styles["home-avatar"]}>
            <img src={avatar} alt="S Character" />
          </div>
          <div className={styles["home-greeting"]}>
            <ReactTypingEffect
              staticText={"I am"}
              className={styles["writer"]}
              cursorClassName={styles["writer__cursor"]}
              speed={300}
              eraseDelay={200}
              typingDelay={200}
              text={["a Front End Developer.", "World!"]}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              nihil quae a nemo repellendus labore, veniam sapiente blanditiis!
              Nesciunt accusantium eos facere! Id odio asperiores iste quis cum!
              Nostrum, perferendis.
            </p>
          </div>
        </div>
      </div>
      <CategoriesCarousel />
    </>
  );
};

export default Home;
