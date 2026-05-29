"use client"
import React, { useState } from "react";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import showAlert from "./../../../components/Swal";
import OffreCard from "./../../../components/offreCard";

const Offres = () => {
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

      showAlert("Merci!", "Votre demande a été soumise", "success");
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
          <h1>Offres d'emploi</h1>
          <p>
            Consultez les postes ouverts au FONAREV et transmettez votre candidature spontanée.
          </p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.subtitle}>
          <div className={styles.titleContainer}>
            <div>
              <span className={styles.eyebrow}>Recrutement</span>
              <h2>Les offres d'emploi</h2>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <OffreCard reference="CDI" expiration="18 Novembre 2024" titre="Avis d'appel à candidatures pour le recrutement de : 1 Responsable du numérique et sécurité de l'information, 1 Secrétaire permanent de la cellule des passations des marchés, 1 Responsable sécurité " isAvis={true} bigTitle="Avis d'appel à candidatures" link="/Recrutement-FONAREV.pdf" />
            <OffreCard reference="CDD (2 à 5 mois)" expiration="06 Juin 2024" depasse="true" titre="Avis d'appel à candidatures pour le recrutement des Agents chargés de l'identification des victimes des violences sexuelles liées aux conflits et victimes des crimes contre la paix et la sécurité de l'humanité." isAvis={true} bigTitle="Avis d'appel à candidatures" link="/avis-d-appel-a-candidature.pdf" />
          </div>
        </div>

                <div className={styles.formContainer}>
          <h2>Candidature spontanée</h2>
          <p className={styles.formIntro}>
            Ajoutez votre CV et votre lettre de motivation afin que votre dossier soit transmis aux équipes concernées.
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
                <label>Uploader la lettre de motivation</label>
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
      </section>
    </main>
  );
};

export default Offres;
