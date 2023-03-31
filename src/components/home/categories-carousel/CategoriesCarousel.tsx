import * as React from "react";
import Slider, { Settings } from "react-slick";
import SButton from "components/common/s-button/SButton";
import { categoriesList } from "data/categories";

// Styles
import styles from "./CategoriesCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  interface ICategory {
    name: string;
    image: string;
  }

  const navigate = useNavigate();

  const settings: Settings = {
    className: "center",
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleSeeMore = () => {
    navigate(`${process.env.PUBLIC_URL}/libraries`);
  };

  const handleGotoDetails = (id: number) => {
    navigate(`${process.env.PUBLIC_URL}/libraries/${id}`);
  };

  return (
    <div className={styles["categories"]}>
      <h2>Libraries</h2>
      <Slider {...settings}>
        {categoriesList.slice(0, 6).map((item: ICategory, index) => (
          <div
            key={item.name}
            className={styles["category"]}
            onClick={() => handleGotoDetails(index + 1)}
          >
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
      <div className={styles["categories__button"]}>
        <SButton name="See more..." onClick={handleSeeMore} />
      </div>
    </div>
  );
};
export default Categories;
