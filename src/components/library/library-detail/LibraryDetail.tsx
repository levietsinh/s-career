import React from "react";

//Styles
import styles from "./LibraryDetail.module.scss";

const LibraryDetail = () => {
  const handleToggleQuestion = () => {
    const questionEl = document.getElementById("question-1");
    const isShow = questionEl?.classList.contains("show");
    isShow
      ? questionEl?.classList.remove("show")
      : questionEl?.classList.add("show");
  };
  return (
    <div className={styles["library-detail"]}>
      <h2>Title</h2>
      <div className={styles["library-container"]}>
        <ul className={styles["library-detail__list"]}>
          <li id={`question-1`} className={styles["library-detail__item"]}>
            <div className={styles["question"]}>
              What is your name?
              <span
                className={styles["question-open"]}
                onClick={handleToggleQuestion}
              >
                +
              </span>
              <span
                className={styles["question-close"]}
                onClick={handleToggleQuestion}
              >
                -
              </span>
            </div>
            <div className={styles["answer"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              odio et deserunt dolores quisquam, tempore culpa dicta natus
              blanditiis labore recusandae vitae, repellat vero. Nulla veritatis
              eligendi non ab. Vel?
            </div>
          </li>
        </ul>
        <div className={styles["references"]}>
          <h3>References</h3>
          <a href="">References 1...</a>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetail;
