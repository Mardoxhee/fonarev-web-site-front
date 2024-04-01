"use client"
import styles from './style.module.scss'
import { useForm } from "react-hook-form";
import React from 'react'
import {useState, useEffect} from 'react'

const Colloque = () => {

    const { handleSubmit, setValue,register, formState: { errors } } = useForm();
    const [spinner, setSpinner] = useState(false)
    const [disbaled, setDisbaled] = useState(false)


    const onSubmit =async (values)=>{   
      setDisbaled(true)
      setSpinner(true)
        const PARTICIPANTS_ROUTE = "https://fonarev-api.onrender.com/participants";
        const resp = await   fetch(PARTICIPANTS_ROUTE, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json; charset=UTF-8",
        
            },
          body: JSON.stringify(values)
      })
      const response = await  resp.json();
      setSpinner(false)
      console.log("waiting response", response)
      if(resp.status !==201){
        // setOpen(true);
        // setSpiner(false);
        // setresponseCode(0);
        // setResponseTitle(response.status);
        // setResponseContent(response.error)
    
      }else{
        window.location.reload();
      }
      }
    

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


  return (
    <main className={styles.main}>
        <section className={styles.imageContainer}>
            <h1>Colloque sur la santé mentale des victimes</h1>
            <p>details colloque details colloquedetails colloque
            details colloquedetails colloquedetails colloquedetails 
            details colloquedetails colloquedetails colloquedetails 
            </p>
        </section>
        <section className={styles.formContainer}>
            <h2>Formulaire de préenregistrement</h2>
            <form onSubmit= {handleSubmit(onSubmit)} >
                <div className={styles.inputFlexer}>
                  <div>
                    <input type='text' placeholder='Votre nom'
                        {...register("nom", {
                        required: "Ce champ est obligatoire",
                        })}
                        className={errors.nom ? styles.inputError : ''}
                    />
                    {errors.nom && <span className={styles.errorMessage}>{errors.nom.message}</span>}
                    </div>
                    <div>
                        <input type='text' placeholder='Votre prenom'
                              {...register("prenom", {
                                required: "Ce champ est obligatoire",
                              })}
                              className={errors.prenom ? styles.inputError : ''}
                        />
                            {errors.prenom && <span className={styles.errorMessage}>{errors.prenom.message}</span>}
                    </div>

                </div>
                <div className={styles.inputFlexer}>
                  <div>
                      <select 
                      {...register("genre", {
                          required: "Ce champ est obligatoire",
                        })}
                        className={errors.genre ? styles.inputError : ''}
                        >
                              <option value="M">M</option>
                              <option value="F">F</option>
                      </select>
                      {errors.genre && <span className={styles.errorMessage}>{errors.genre.message}</span>}
                </div>
                  <div>
                      <input type='text' placeholder='Votre nationalité'
                        {...register("nationalite", {
                          required: "Ce champ est obligatoire",
                        })}
                        className={errors.nationalite ? styles.inputError : ''}
                      />
                          {errors.nationalite && <span className={styles.errorMessage}>{errors.nationalite.message}</span>}
                    </div>
                </div>
                <div className={styles.inputFlexer}>
                    <div>
                    <input type='text' placeholder='Votre email'
                            {...register("email", {
                                required: "Ce champ est obligatoire",
                                validate: validateEmail // Validation personnalisée
                            })}
                            className={errors.email ? styles.inputError : ''}
                        />
                           {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                    </div>
                    <div>
                    <input type='text' placeholder='Votre téléphone' 
                            {...register("telephone", {
                                required: "Ce champ est obligatoire",
                                validate: validatePhoneNumber // Validation personnalisée
                            })}
                            className={errors.telephone ? styles.inputError : ''}
                        />
                    {errors.telephone && <span className={styles.errorMessage}>{errors.telephone.message}</span>}
                    </div>
                </div>
                <div className={styles.inputFlexer}>
                    <div>
                      <input type='text' placeholder='Votre pays'
                        {...register("pays", {
                          required: "Ce champ est obligatoire",
                        })}
                        className={errors.pays ? styles.inputError : ''}
                      />
                            {errors.pays && <span className={styles.errorMessage}>{errors.pays.message}</span>}
                    </div>
                    <div>
                      <input type='text' placeholder='Votre ville'
                        {...register("ville", {
                          required: "Ce champ est obligatoire",
                        })}
                        className={errors.ville ? styles.inputError : ''}
                      />
                      {errors.ville && <span className={styles.errorMessage}>{errors.ville.message}</span>}
                    </div>
                </div>
                <div className={styles.freeInput}>
                  <div>
                    <input type='text' placeholder='Votre profession'
                      {...register("profession", {
                        required: "Ce champ est obligatoire",
                      })}
                      className={errors.profession ? styles.inputError : ''}
                    />
                      {errors.profession && <span className={styles.errorMessage}>{errors.profession.message}</span>}
                    </div>
                    <textarea type='text' placeholder='Laissez un message'
                      {...register("message", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                </div>
                <button disbaled ={disbaled}><span className={spinner ? styles.Dnone : ""}>Soumettre</span> <span className={spinner ? styles.loader : styles.Dnone} ></span></button>
            </form>
        </section>
    </main>
  )
}

export default Colloque