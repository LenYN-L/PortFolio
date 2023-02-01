import styles from "./Body.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../ContactForm/ContacForm";

const Body = () => {
  return (
    <div className={styles.container}>
      <section className={styles.cards}>
        <header className={`${styles.card}`}>
          <div>
            <h2 className={`${styles.title} ${styles.title1}`}>
              Front-End Wep Developer
            </h2>
          </div>
        </header>
        <main className={`${styles.card}`}>
          <h2 className={styles.iAm}>
            Hello Word I'm Lenyn Developer Junior Front-End
          </h2>
          <p className={styles.aboutMe}>About Me</p>
          <p className={styles.aboutMe}>
            Desarrolador Junior FrontEnd de Peru con amplios conocimientos en
            Html, Css, JavaScript; manejo tecnologias como (Sequelize- Postgres,
            MongoDb, Express, Redux y React); Por el lado del frontEnd tengo la
            capacidad de crear sitios web y aplicaciones web con React, por el
            lado del Backend manejo Nodejs y Express para la creacion de apis.
            Estudie como Full stack developer en el bootcamp soy Henry. <br/> Un
            proyecto personal es este mismo portfolio responsive construido con
            React y estilizado con Css puro.
          </p>
        </main>
        <article className={`${styles.card} ${styles.cardProyect}`}>
          <p className={styles.proyectTitle}>Futuros Proyectos</p>
          <div>
            <FontAwesomeIcon
              className={styles.gearHorario1}
              icon={faGear}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className={styles.gearAntiHorario}
              icon={faGear}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className={styles.gearHorario2}
              icon={faGear}
            ></FontAwesomeIcon>
          </div>
        </article>
        <footer className={`${styles.card}`}>
          <div className={styles.contentIcon}>
            <p className={styles.contactForm}>Contactame por mis Redes</p>
            <a href="https://t.me/lenYN12">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faTelegram}
              ></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/lenynbejar/">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
            <a href="https://github.com/LenYN-L">
              <FontAwesomeIcon
                className={styles.icon}
                icon={faGithub}
              ></FontAwesomeIcon>
            </a>
          </div>
        </footer>
        <div className={`${styles.card}`}>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Body;
