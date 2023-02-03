import React, { useEffect, useState } from "react";

// Styles
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  const [isScroll, setIsScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setIsScroll(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        styles["header"],
        isScroll > 0 ? styles["header-scroll"] : ""
      )}
    >
      <div className={styles["header-logo"]}>
        <img
          src={require(`assets/images/logo${isScroll > 0 ? "-red" : ""}.svg`)}
          alt="S Logo"
        />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>
            <img
              className={styles["header-mode"]}
              src={require(`assets/images/dark-mode${isScroll ? "" : "-white"}.png`)}
              alt="Dark Mode"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
