import styles from "./Background.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faReact,
  faSquareJs,
  faPython,
  faNodeJs,
  faNpm,
  faCss3,
  faHtml5,
  faGit,
  faLinux,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Background = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconGithub}`}
          icon={faGithub}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconReact}`}
          icon={faReact}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconSquereJs}`}
          icon={faSquareJs}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconPython}`}
          icon={faPython}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconNodeJs}`}
          icon={faNodeJs}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconNpm}`}
          icon={faNpm}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconTerminal}`}
          icon={faTerminal}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconCss3}`}
          icon={faCss3}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconHtml5}`}
          icon={faHtml5}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconGit}`}
          icon={faGit}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconLinux}`}
          icon={faLinux}
        />
        <FontAwesomeIcon
          className={`${styles.icon} ${styles.iconGoogle}`}
          icon={faGoogle}
        />
      </div>
    </div>
  );
};

export default Background;
