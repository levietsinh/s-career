import React from "react"

// Styles
import styles from "./Header.module.scss";

// Images
import logoImg from "../../assets/images/logo.svg";
import modeImg from "../../assets/images/dark-mode.png";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-logo"]}>
        <img src={logoImg} alt="S Logo" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>
            <img className={styles["header-mode"]} src={modeImg} alt="Dark Mode" />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;