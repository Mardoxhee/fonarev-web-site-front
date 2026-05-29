"use client"
import React, { useState } from "react";
import styles from "./../offres-emploi/style.module.scss";
import { useForm } from "react-hook-form";
import showAlert from "./../../../components/Swal";

const Stages = () => {
  const [spinner, setSpinner] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const handleFileUpload = async (file) => {
    try {
      if (!file) {
        return null;
      }

      const cloudinaryData = new FormData();
      cloudinaryData.append("file", file);
      const resp = await fetch("https://minio2.fonasite.app/minio/files/site/upload", {
        method: "post",
        body: cloudinaryData,
      });
      const data = await resp.json();
      return data.url;
    } catch (error) {
      console.error("Erreur lors de l'envoi du fichier:", error);
      return null;
    }
  };

  const validatePhoneNumber = (value) => {
    const phoneNumberRegex = /^\d+$/;
    if (!phoneNumberRegex.test(value)) {
      return "Le numéro de téléphone ne doit contenir que des chiffres";
    }
    if (value.length !== 10) {
      return "Le numéro de téléphone doit comporter 10 chiffres";
    }
    return true;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Veuillez saisir une adresse e-mail valide";
    }
    return true;
  };

  const onSubmit = async (values) => {
    setSpinner(true);
    setDisabled(true);

    try {
      const cvValue = await handleFileUpload(values.cv?.[0]);
      const lmValue = await handleFileUpload(values.lm?.[0]);
      const data = {
        ...values,
        typeCandidature: "stage",
        cv: cvValue,
        lm: lmValue,
      };

      const resp = await fetch("https://fonarev-api.onrender.com/candidatures", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      });

      if (resp.status !== 201) {
        showAlert("Erreur", "Votre demande n'a pas pu être soumise", "error");
        return;
      }

      showAlert("Merci!", "Votre demande de stage a été soumise", "success");
      reset();
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      showAlert("Erreur", "Votre demande n'a pas pu être soumise", "error");
    } finally {
      setSpinner(false);
      setDisabled(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Opportunités</span>
          <h1>Stage</h1>
          <p>
            Soumettez votre demande de stage auprès du FONAREV et présentez votre parcours académique.
          </p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.formContainer}>
          <h2>Demande de stage</h2>
          <p className={styles.formIntro}>
            Complétez les informations ci-dessous et joignez votre CV ainsi qu'une lettre de demande de stage.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputWrapper}>
                <div>
                  <input
                    type="text"
                    placeholder="Nom"
                    maxLength={30}
                    {...register("nom", { required: "Ce champ est obligatoire" })}
                    className={errors.nom ? styles.inputError : ""}
                  />
                  {errors.nom && <span className={styles.errorMessage}>{errors.nom.message}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Prénom"
                    maxLength={30}
                    {...register("prenom", { required: "Ce champ est obligatoire" })}
                    className={errors.prenom ? styles.inputError : ""}
                  />
                  {errors.prenom && <span className={styles.errorMessage}>{errors.prenom.message}</span>}
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <div>
                  <input
                    type="text"
                    placeholder="Téléphone"
                    maxLength={15}
                    {...register("phone", {
                      required: "Ce champ est obligatoire",
                      validate: validatePhoneNumber,
                    })}
                    className={errors.phone ? styles.inputError : ""}
                  />
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone.message}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    maxLength={50}
                    {...register("email", {
                      required: "Ce champ est obligatoire",
                      validate: validateEmail,
                    })}
                    className={errors.email ? styles.inputError : ""}
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <div>
                  <input
                    type="text"
                    placeholder="Ville"
                    maxLength={30}
                    {...register("ville", { required: "Ce champ est obligatoire" })}
                    className={errors.ville ? styles.inputError : ""}
                  />
                  {errors.ville && <span className={styles.errorMessage}>{errors.ville.message}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Province"
                    maxLength={25}
                    {...register("province", { required: "Ce champ est obligatoire" })}
                    className={errors.province ? styles.inputError : ""}
                  />
                  {errors.province && <span className={styles.errorMessage}>{errors.province.message}</span>}
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <div>
                  <input
                    type="text"
                    placeholder="Établissement"
                    maxLength={70}
                    {...register("etablissement", { required: "Ce champ est obligatoire" })}
                    className={errors.etablissement ? styles.inputError : ""}
                  />
                  {errors.etablissement && <span className={styles.errorMessage}>{errors.etablissement.message}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Domaine de stage"
                    maxLength={70}
                    {...register("domaine", { required: "Ce champ est obligatoire" })}
                    className={errors.domaine ? styles.inputError : ""}
                  />
                  {errors.domaine && <span className={styles.errorMessage}>{errors.domaine.message}</span>}
                </div>
              </div>

              <div className={styles.inputWrapper}>
                <div>
                  <input
                    type="text"
                    placeholder="Niveau d'étude"
                    maxLength={50}
                    {...register("niveau", { required: "Ce champ est obligatoire" })}
                    className={errors.niveau ? styles.inputError : ""}
                  />
                  {errors.niveau && <span className={styles.errorMessage}>{errors.niveau.message}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Durée souhaitée"
                    maxLength={50}
                    {...register("duree", { required: "Ce champ est obligatoire" })}
                    className={errors.duree ? styles.inputError : ""}
                  />
                  {errors.duree && <span className={styles.errorMessage}>{errors.duree.message}</span>}
                </div>
              </div>

              <div className={styles.inputUpload}>
                <div className={styles.uploadInput}>
                  <label>Uploader le CV</label>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    {...register("cv", { required: "Ce champ est obligatoire" })}
                    className={errors.cv ? styles.inputError : ""}
                  />
                  {errors.cv && <span className={styles.errorMessage}>{errors.cv.message}</span>}
                </div>
                <div className={styles.uploadInput}>
                  <label>Uploader la lettre de demande de stage</label>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    {...register("lm", { required: "Ce champ est obligatoire" })}
                    className={errors.lm ? styles.inputError : ""}
                  />
                  {errors.lm && <span className={styles.errorMessage}>{errors.lm.message}</span>}
                </div>
              </div>

              <button disabled={disabled}>
                <span className={spinner ? styles.Dnone : ""}>Soumettre</span>
                <span className={spinner ? styles.loader : styles.Dnone}></span>
              </button>
          </form>
        </div>
        <div className={styles.subtitle}>
          <div className={styles.titleContainer}>
            <div>
              <span className={styles.eyebrow}>Stages</span>
              <h2>Pour toute demande de stage</h2>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <h3>
              Merci de joindre un CV et une lettre de demande de stage en format PDF ou DOCX.
              Votre demande sera transmise aux équipes compétentes du FONAREV.
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stages;
