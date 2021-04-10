import React, { FC } from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';
import style from './style.module.scss';

const ContactForm: FC = () => {

  // const schema: any = 

  const capitalizeWord = (str: string): string => {
    return str[0].toUpperCase() + str.slice(1);
  }

  const capitelizeAllWords = (str: string): string => {
    return str.trim()
    .split(' ')
    .filter((word: string) => word !== '')
    .map((word: string) => capitalizeWord(word))
    .join(' ');
  }

  return (
    <div className={style.temporalLayer}>
      <Formik
        initialValues={{
          fullName: '',
          email   : '',
          message : '',
        }}

        // validationSchema={}

        onSubmit={(values: any) => {
          const { fullName, ...rest } = values;
          const requestBody: object = {
            fullName: capitelizeAllWords(fullName),
            ...rest
          }
          console.log(requestBody);
        }}
      >
      {({
        values,
        errors,
        isValid,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
      }: FormikProps<FormikValues>) => (
        <form className={style.ContactForm}
          onSubmit={handleSubmit}
        >
          <label>
            Nombre y Apellido <br />
            <input name="fullName"
              className={style.fullNameInput}
              type="text"
              value={values.fullName}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </label>
          
          <label>
            Correo <br />
            <input name="email"
              className={style.emailIntput}
              type="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mensaje <br />
            <textarea name="message"
              className={style.messageInput}
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              maxLength={1000}
            />
          </label>

          <button className={style.submitButton}
            type="submit"
            disabled={!isValid}
          >
            Enviar Mensaje
          </button>
        </form>
      )}
      </Formik>
    </div>
  );
}

export default ContactForm;