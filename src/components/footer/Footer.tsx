import React from "react";
import styles from "./Footer.module.scss";
import redLogo from "assets/images/logo-red.svg";

const Footer = () => {
  type SocialsType = {
    image: string,
    link: string,
  }
  const socials = [
    {
      image: "facebook",
      link: "https://www.facebook.com/levietsinh201194/",
    },
    {
      image: "zalo",
      link: "http://zaloapp.com/qr/p/19h58eheralmb",
    },
    {
      image: "linkedin",
      link: "https://www.linkedin.com/in/l%C3%AA-vi%E1%BA%BFt-sinh-753ab1155/",
    },
    {
      image: "skype",
      link: "https://join.skype.com/invite/mT9WddZxuMaD",
    },
  ]
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-main"]}>
        <div className={styles["footer-info"]}>
          <img src={redLogo} alt="Red Logo" />
          {/* <p className={styles["footer-name"]}>Le Viet Sinh - Web Developer</p> */}
          {/* <p className={styles["footer-address"]}>
            63 Tran Khanh Du, My An, Ngu Hanh Son, Danang, Vietnam
          </p> */}
        </div>
        <div className={styles["footer-contact"]}>
          <h3>Contact</h3>
          <p>Phone: +84 357 2 3333 4</p>
          <p>Email: levietsinh201194@gmail.com</p>
          <p>Address: 63 Tran Khanh Du Street, My An Ward, Ngu Hanh Son Distict, Danang city, Vietnam.</p>
        </div>
        <div className={styles["footer-social"]}>
          <h3>Social Media</h3>
          {
            socials.map((item: SocialsType) => (
              <a href={item.link} target="_blank" key={item.image}>
                <img src={require(`assets/images/${item.image}.png`)}/>
              </a>
            ))
          }
        </div>
      </div>
      <div className={styles["footer-copyright"]}>
        Copyright © 2020 S Career
      </div>
    </footer>
  )
}

export default Footer;
