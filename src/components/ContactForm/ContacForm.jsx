import { useForm } from "../../hooks/useForm";
import styles from "./ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faMessage,
  faComment,
} from "@fortawesome/free-regular-svg-icons";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El cammpo 'Comentarios' no debe exeder los 255 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const { form, errors, loading, handleChange, handleBlur, handleSubmit } =
    useForm(initialForm, validationsForm);

  return (
    <div>
      <h2 className={styles.titleContact} >Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.icon}>
          <FontAwesomeIcon
            icon={faUser}
          ></FontAwesomeIcon>
        </div>
        <input
          type="text"
          name="name"
          autoComplete="none"
          placeholder="Ingrese su Nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />

        {errors.name && <p className={styles.messageError}>{errors.name}</p>}

        <div className={styles.icon}>
          <FontAwesomeIcon
            icon={faEnvelope}
          ></FontAwesomeIcon>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p className={styles.messageError}>{errors.email}</p>}

        <div className={styles.icon}>
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && (
          <p className={styles.messageError}>{errors.subject}</p>
        )}

        <div className={styles.icon}>
          <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
        </div>
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escriba sus comentarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && (
          <p className={styles.messageError}>{errors.comments}</p>
        )}
        <button className={styles.button} disabled={loading}>
          {loading ? "Enviando" : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
