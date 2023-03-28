import React from "react";
import styles from "./Home.module.scss";
import avatar from "assets/images/avatar.jpg";
import CategoriesCarousel from "components/home/categories-carousel/CategoriesCarousel";
import ReactTypingEffect from "react-typing-effect";
import useDetectMobile from "hooks/DetectMobile";
import SButton from "components/common/s-button/SButton";

const Home = () => {
  const isMobile = useDetectMobile();

  const printResume = () => {
    window.open(
      "https://levietsinh.github.io/cv/",
      "PRINT",
      "height=910,width=812"
    );
  };
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
            <div className={styles["home__hello"]}>Hello, It's me</div> <br />
            <ReactTypingEffect
              staticText={"I am"}
              className={styles["writer"]}
              cursorClassName={styles["writer__cursor"]}
              speed={100}
              eraseDelay={1500}
              eraseSpeed={150}
              typingDelay={200}
              text={[
                "Lê Viết Sinh",
                isMobile ? "a FE Developer" : "a Front End Developer",
              ]}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              nihil quae a nemo repellendus labore, veniam sapiente blanditiis!
              Nesciunt accusantium eos facere! Id odio asperiores iste quis cum!
              Nostrum, perferendis.
            </p>
          </div>
        </div>
        <div className={styles["home__cv"]}>
          <SButton name="Watch CV" onClick={printResume} />
        </div>
      </div>
      <CategoriesCarousel />
    </>
  );
};

export default Home;
