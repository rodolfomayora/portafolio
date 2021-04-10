import React, { FC } from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import style from './style.module.scss';

const ContactForm: FC = () => {

  const schema: any = Yup.object().shape({
    fullName: Yup.string()
      .required('Campo requerido'),
    email: Yup.string()
      .email('Correo no válido')
      .required('Campo requerido'),
    message: Yup.string()
      .required('Campo requerido')
  })

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

        validationSchema={schema}

        onSubmit={(values: any) => {
          const { fullName, ...rest } = values;
          const requestBody: object = {
            fullName: capitelizeAllWords(fullName),
            ...rest
          }
          console.log(requestBody);
        }}

        initialErrors={{ fullName: 'required', email: 'required' }}
      >
      {({
        values,
        errors,
        touched,
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
              className={touched.fullName && errors.fullName
                ? `${style.fullNameInput} ${style.errorInput}` 
                : style.fullNameInput
              }
              type="text"
              value={values.fullName}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
            {
              touched.fullName &&
              errors.fullName &&
              <span className={style.error}>{errors.fullName}</span>
            }
          </label>
          
          <label>
            Correo <br />
            <input name="email"
              className={touched.email && errors.email
                ? `${style.emailIntput} ${style.errorInput}`
                : style.emailIntput
              }
              type="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
            {
              touched.email &&
              errors.email &&
              <span className={style.error}>{errors.email}</span>
            }
          </label>

          <label>
            Mensaje <br />
            <textarea name="message"
              className={touched.messageInput && errors.messageInput
                ? `${style.messageInput} ${style.errorInput}`
                : style.messageInput
              }
              value={values.message}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              maxLength={1000}
            />
            {
              touched.message &&
              errors.message &&
              <span className={style.error}>{errors.message}</span>
            }
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