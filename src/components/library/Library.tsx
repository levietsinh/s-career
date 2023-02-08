import * as React from "react";
import styles from "./Library.module.scss";
import { categoriesList } from "data/categories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Library = () => {
  interface ICategory {
    id: number;
    name: string;
    image: string;
  }

  const navigate = useNavigate();

  const handleLibraryDetail = (id: number) => {
    navigate(`${process.env.PUBLIC_URL}/libraries/${id}`);
  };

  return (
    <div className={styles["categories"]}>
      <h2>Libraries</h2>
      <ul>
        {categoriesList.map((item: ICategory) => (
          <li
            key={item.name}
            className={styles["category"]}
            onClick={() => handleLibraryDetail(item.id)}
          >
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
