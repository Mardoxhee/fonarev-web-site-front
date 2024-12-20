"use client"
import styles from './style.module.scss'
import { useForm } from "react-hook-form";
import React from 'react'
import {useState, useEffect} from 'react'
import showAlert from './../../components/Swal'
import { Icon } from '@iconify/react';
import Head from 'next/head'; 
import Link from 'next/link'
import { Script } from 'next/script';

const Colloque = () => {

    const { handleSubmit, setValue,register, formState: { errors }  } = useForm();
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
        showAlert('Merci!', 'Votre demande a été soumise', 'success');

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
    <>
    <Head> 

    <title>Fonarev rdc | Colloque sur la santé mentale des victimes du FONAREV : Fonds national des réparations des victimes de violences sexuelles liées aux conflits et des victimes des crimes contre la paix et la sécurité de l'humanité</title>  
    < meta name="google-site-verification" content="Dfs8FK4nUdFPwDyNRjv2x_ciS2PZKFuhJBT4KP9TZYs" />
     <meta name="keywords" content="victimes,violences sexuelles, Etat congolais, guerre à l'est, réparation des victimes,réparation, aide aux victimes, soutien victiles, préjudices, massacre, republique democratique du congo, tuerie, minrais, 11%, redévance" />
     
    </Head>
    <main className={styles.main}>
        <section className={styles.bannerContainer}>
              <h1>
                 Colloque sur la santé mentale des victimes
              </h1>
              <p>
                 Voir le programme <a target="_blank" href='colloque-sante-mentale/programme-colloque'>ici<Icon icon="material-symbols:download" className={styles.icone} /></a>
              </p>
          </section>
          <section className={styles.contentFlexer}>
        <div className={styles.imageContainer}>
        </div>
        <div className={styles.formContainer}>

          <h2>
                Les pré-enregistrements sont clorturés, 
                veuillez rester connectés sur nos réseaux sociaux pour suivre le colloque en direct
          </h2>

          <p>CLiquez sur les icones ci-dessous pour suivre le live : </p>
          <div className={styles.socialMedia}>
          <Link href="https://www.facebook.com/share/v/U9qLQ7ij1i8ikfGi/?mibextid=WC7FNe" target='_blank'>
            <Icon icon="logos:facebook" className={styles.icone} />
          </Link> 
          <Link href="https://www.youtube.com/live/6x3ck0IcqUQ?si=kge4yNxlHsvSWGoZ" target='_blank'>
            <Icon icon="logos:youtube-icon" className={styles.icone} />
          </Link> 
          <Link href="https://us06web.zoom.us/j/81685663629?pwd=MRvWWJZd8AU5saUfhz0cnWliqauDOE.1" target='_blank'>
            <Icon icon="logos:zoom" className={styles.icone} />
          </Link> 
          <Link href="https://x.com/fonarevrdc?s=11" target='_blank'>
            <Icon icon="devicon:twitter" className={styles.icone} />
          </Link> 
          </div>
          
            {/* <h2>Formulaire de pré-enregistrement</h2> */}
  
            {/* <form onSubmit= {handleSubmit(onSubmit)} >
                <div className={styles.inputFlexer}>
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
                <div className={styles.inputFlexer}>
                  <div>
                      <select 
                      {...register("genre", {
                          required: "Ce champ est obligatoire",
                        })}
                        className={errors.genre ? styles.inputError : ''}
                        >
                             <option value="" disabled selected>-- Sexe --</option>
                              <option value="M">M</option>
                              <option value="F">F</option>
                      </select>
                      {errors.genre && <span className={styles.errorMessage}>{errors.genre.message}</span>}
                </div>
                  <div>
                      <input type='text' placeholder='Nationalité'
                        maxLength={30} 
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
                    <div>
                    <input type='number' placeholder='Téléphone' 
                      maxLength={15} 
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
                      <select 
                            {...register("pays", {
                              required: "Ce champ est obligatoire",
                            })}
                            className={errors.pays ? styles.inputError : ''}
                      >
                      <option value="" disabled selected>-- Pays--</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">French Southern Territories</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                      <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                      <option value="Korea, Republic of">Korea, Republic of</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                      <option value="Moldova, Republic of">Moldova, Republic of</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                      <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">Virgin Islands, British</option>
                      <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                      <option value="Wallis and Futuna">Wallis and Futuna</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                            {errors.pays && <span className={styles.errorMessage}>{errors.pays.message}</span>}
                    </div>
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
                </div>
                <div className={styles.inputFlexer}>
                <div>
                      <input type='text' placeholder='Profession'
                        maxLength={30} 
                        {...register("profession", {
                          required: "Ce champ est obligatoire",
                        })}
                        className={errors.profession ? styles.inputError : ''}
                      />
                      {errors.profession && <span className={styles.errorMessage}>{errors.profession.message}</span>}
                    </div>

                    <div>
                      <input type='text' placeholder='Institution'
                        maxLength={50} 
                        {...register("institution", {
                          required: "Ce champ est obligatoire",
                        })}
                        className={errors.institution ? styles.inputError : ''}
                      />
                            {errors.institution && <span className={styles.errorMessage}>{errors.institution.message}</span>}
                    </div>
                 
                </div>
                <div className={styles.freeInput}>
                    <textarea type='text' placeholder='Message'
                      maxLength={60} 
                      {...register("description", {
                      })}
                 
                    />
             
                </div>
                <button disbaled ={disbaled}><span className={spinner ? styles.Dnone : ""}>Soumettre</span> <span className={spinner ? styles.loader : styles.Dnone} ></span></button>
            </form> */}

        </div>
        </section>
    </main>
    </>
  )
}

export default Colloque