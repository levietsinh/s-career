import clsx from "clsx";
import React from "react";
import styles from "./Projects.module.scss"

const Projects = () => {
  return (
    <div className={clsx(styles["projects"], "container")}>
      <a href="https://codelearn.io/sharing/7-meo-va-thu-thuat-trong-javascript">Các tips JS nên biết</a>
      <a href="https://topdev.vn/blog/9-du-an-moi-nhat-giup-ban-thanh-trum-front-end-trong-nam-2020/">Các dự án nên làm</a>
    </div>
  )
}

export default Projects;
