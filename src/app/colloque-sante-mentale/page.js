"use client"
import styles from './style.module.scss'
import { useForm } from "react-hook-form";
import React from 'react'

const Colloque = () => {

    const { handleSubmit, setValue,register, formState: { errors } } = useForm();


    const onSubmit =async (values)=>{   

        
        const PARTICIPANTS_ROUTE = "https://fonarev-api.onrender.com/participants";
        const resp = await   fetch(PARTICIPANTS_ROUTE, {
          method: 'POST',
          headers: {
              "Content-Type": "application/json; charset=UTF-8",
        
            },
          body: JSON.stringify(values)
      })
      const response = await  resp.json();
      console.log("waiting response", response)
      if(resp.status !==201){
        // setOpen(true);
        // setSpiner(false);
        // setresponseCode(0);
        // setResponseTitle(response.status);
        // setResponseContent(response.error)
    
      }else{
        //   setSpiner(false);
        //   setOpen(true);
        //   setresponseCode(1);
        //   setResponseTitle(response.status);
        //   setResponseContent(response.message)
        //    setTimeout(() => {
        //     Router.push({
        //     pathname: "/agents",
        //         });
        //   }, "3000");
      }
      }
    


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
                    <input type='text' placeholder='Votre nom'
                        {...register("nom", {
                        required: "Ce champ est obligatoire",
                        })}
                    />
                    <input type='text' placeholder='Votre prenom'
                           {...register("prenom", {
                            required: "Ce champ est obligatoire",
                          })}
                    />
                </div>
                <div className={styles.inputFlexer}>
                <select 
                {...register("genre", {
                    required: "Ce champ est obligatoire",
                  })}
                  >
                        <option value="M">M</option>
                        <option value="F">F</option>
                </select>
                    <input type='text' placeholder='Votre nationalité'
                      {...register("nationalite", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                </div>
                <div className={styles.inputFlexer}>
                    <input type='text' placeholder='Votre email'
                      {...register("email", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                    <input type='text' placeholder='Votre téléphone' 
                      {...register("telephone", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                </div>
                <div className={styles.inputFlexer}>
                    <input type='text' placeholder='Votre pays'
                      {...register("pays", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                    <input type='text' placeholder='Votre ville'
                      {...register("ville", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                </div>
                <div className={styles.freeInput}>
                    <input type='text' placeholder='Votre profession'
                      {...register("profession", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                    <textarea type='text' placeholder='Laissez un message'
                      {...register("message", {
                        required: "Ce champ est obligatoire",
                      })}
                    />
                </div>
                <button>Soumettre</button>
            </form>
        </section>
    </main>
  )
}

export default Colloque