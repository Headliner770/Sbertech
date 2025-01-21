import stLogo from "../img/Logo.png";
import styles from "./nav.module.css";
import { NAV_LINKS } from "../config/constants";

export const Nav = () => {
  return (
    <header className={styles.header_nav}>
      <div className="center">
        <img src={stLogo} className={styles.stLogo} alt="Лого" />
      </div>
      <div className="navElements">
        {NAV_LINKS.map((item) => (
          <a key={item.href} href={item.href}>
            {item.title}
          </a>
        ))}
      </div>
    </header>
  );
};
