"use client"
import React from 'react'
import styles from "./style.module.scss"
import AppelCard from './../../../components/appelCard'
import { useForm } from "react-hook-form";
import {useState, useEffect} from 'react'
import showAlert from './../../../components/Swal'
import Head from 'next/head'; 
import { Script } from 'next/script';

const Offres = () => {

    const [cvUrl, setCvUrl] = useState(null);
    const [lmUrl, setLmUrl] = useState(null);
    const [spinner, setSpinner] = useState(false)
    const [disbaled, setDisbaled] = useState(false)

    const { handleSubmit, setValue,register, formState: { errors } } = useForm();

    const handleFileUpload = async (file) => {
        const cloudName = "yudingplatform";
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", file);
        cloudinaryData.append("upload_preset", "yuding");
        cloudinaryData.append("cloud_name", "yudingplatform");
        cloudinaryData.append("resource_type", "auto"); 
        const resp = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "post",
            body: cloudinaryData,
          }
        );
        const data = await resp.json();
        console.log("data de cloudinary", data)
        return data.url;
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
      
    const onSubmit =async (values)=>{   
        setSpinner(true)
        const cvFile = values.cv[0];
        const lmFile = values.lm[0];
        // Uploading CV
        let cvValue;
        if (cvFile) {
        cvValue = await handleFileUpload(cvFile);
        setCvUrl(cvValue);
        }

        // Uploading lettre de motivation
        let lmValue;
        if (lmFile) {
        lmValue = await handleFileUpload(lmFile);
        setLmUrl(lmValue);
        }

        const data = {
        ...values,
        cv: cvValue || null,
        lm: lmValue || null,
        };

        setDisbaled(true)
        setSpinner(true)
          const PARTICIPANTS_ROUTE = "https://fonarev-api.onrender.com/candidatures";
          const resp = await   fetch(PARTICIPANTS_ROUTE, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
          
              },
            body: JSON.stringify(data)
        })
        const response = await  resp.json();
        setSpinner(false)
        console.log("waiting response", response)
        if(resp.status !==201){
            setSpinner(false)
          // setOpen(true);
          // setSpiner(false);
          // setresponseCode(0);
          // setResponseTitle(response.status);
          // setResponseContent(response.error)
      
        }else{
          showAlert('Merci!', 'Votre demande a été soumise', 'success');
          setSpinner(false)
  
        }
        }
      

  return (
    <>
    <Head> 
    <title>Fonarev rdc | Actualités du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
     
    </Head>
        <main className={styles.main}>
          <section className={styles.bannerContainer}>
              <h1>
                  Offres d'emplois
              </h1>
              <p>
                    Retrouvez les postes vacants au sein du fonarev.
              </p>
          </section>
          <section className={styles.mainContent}>
                <div className = {styles.formContainer}>
                    <h2>Pour toute candidature spontanée</h2>
                    <form onSubmit= {handleSubmit(onSubmit)}>
                        <div className={styles.inputWrapper}>
                            <div>
                                <input type='text' placeholder='Nom'
                                 maxLength={30} 
                                    {...register("nom", {
                                    required: "Ce champ est obligatoire",
                              
                                    })}
                                    className={errors.nom ? styles.inputError : ''}
                                />
                                {errors.nom && <span className={styles.errorMessage}>{errors.nom.message}</span>}
                            </div>
                            <div>
                                <input type='text' placeholder='Prénom'
                                  maxLength={30} 
                                    {...register("prenom", {
                                    required: "Ce champ est obligatoire",
                                    })}
                                    className={errors.prenom ? styles.inputError : ''}
                                />
                                {errors.prenom && <span className={styles.errorMessage}>{errors.prenom.message}</span>}
                            </div>  
                        </div>
                        <div className={styles.inputWrapper}>
                        <div>
                            <input type='text' placeholder='Téléphone'
                              maxLength={15}  
                                        {...register("phone", {
                                            required: "Ce champ est obligatoire",
                                            validate: validatePhoneNumber // Validation personnalisée
                                        })}
                                        className={errors.phone ? styles.inputError : ''}
                                    />
                                {errors.phone && <span className={styles.errorMessage}>{errors.phone.message}</span>}
                                </div>
                            <div>
                            <input type='text' placeholder='Email'
                              maxLength={30}  
                            {...register("email", {
                                required: "Ce champ est obligatoire",
                                validate: validateEmail // Validation personnalisée
                            })}
                            className={errors.email ? styles.inputError : ''}
                        />
                                {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                            </div>  
                        </div>

                        <div className={styles.inputWrapper}>
                            <div>
                                <input type='text' placeholder='Ville'
                                  maxLength={30}  
                                    {...register("ville", {
                                    required: "Ce champ est obligatoire",
                                    })}
                                    className={errors.ville ? styles.inputError : ''}
                                />
                                {errors.ville && <span className={styles.errorMessage}>{errors.ville.message}</span>}
                            </div>
                            <div>
                                <input type='text' placeholder='Province'
                                  maxLength={25}  
                                    {...register("province", {
                                    required: "Ce champ est obligatoire",
                                    })}
                                    className={errors.email ? styles.inputError : ''}
                                />
                                {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                            </div>  
                        </div>
                        <div className={styles.inputUpload}>
                        <div className = {styles.uploadInput}>
                                <label>Uploader le CV</label>
                                <input type='file'
                                 accept=".pdf,.docx"
                                     {...register("cv", {
                                        required: "Ce champ est obligatoire",
                                        })}
                                        className={errors.cv ? styles.inputError : ''}
                                />
                            {errors.cv && <span className={styles.errorMessage}>{errors.cv.message}</span>}
                            </div>
                            <div className = {styles.uploadInput}>
                                <label>Uploader la lettre de motivation</label>
                                <input type='file' 
                                 accept=".pdf,.docx"
                                     {...register("lm", {
                                        required: "Ce champ est obligatoire",
                                        })}
                                        className={errors.lm ? styles.inputError : ''}
                                />
                        {errors.lm && <span className={styles.errorMessage}>{errors.lm.message}</span>}
                            </div>
                        </div> 
                        <button disbaled ={disbaled}><span className={spinner ? styles.Dnone : ""}>Soumettre</span> <span className={spinner ? styles.loader : styles.Dnone} ></span></button>
                    </form>
                </div>
                <div className={styles.subtitle}>
                    <div className={styles.titleContainer}>
                        <h2> Les offres d'emplois</h2>
                        <button>Voir plus</button>
                    </div>

                    <div className={styles.cardContainer}>
                        <h3>Oups il n'y a pas de poste à pourvoir pour l'instant !</h3>

                    </div>
                </div>
          </section>
        </main>
        </>
  )
}

export default Offres