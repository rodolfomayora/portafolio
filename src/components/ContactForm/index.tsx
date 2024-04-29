import { useState } from 'react';

import { Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

import { capitelizeAllWords } from '#utils/capitelizeAllWords';
import { Loader } from '#components/Loader';
import { Button } from '#components/Button';
import { RequestBody } from './type';
import styles from './styles.module.scss';

export function ContactForm () {
  const [loader, setLoader] = useState<boolean>(false);
  const [requestError, setRequestErrorr] = useState<boolean>(false);
  const [requestSuccess, setRequestSuccess] = useState<boolean>(false);

  const successNotification = ({ resetForm }: any): void => {
    window.setTimeout(() => {
      setRequestSuccess(false);
      
      resetForm({
        fullName: '',
        email   : '',
        message : '',
      })
    }, 4000);
  }

  const errorNotification = (): void => {
    window.setTimeout(() => {
      setRequestErrorr(false);
    }, 4000);
  }

  const sendEmail = async (values: RequestBody, actions: any) => {
    try {
      setLoader(true);
      const { fullName, ...rest } = values;
      const requestBody: RequestBody = {
        fullName: capitelizeAllWords(fullName),
        ...rest
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        requestBody,
        process.env.NEXT_PUBLIC_KEY
      );

      setLoader(false);
      setRequestSuccess(true);
      successNotification(actions);

    }  catch (error) {
      setLoader(false);
      setRequestErrorr(true);
      errorNotification();
    }
  }

  const schema: any = Yup.object().shape({
    fullName: Yup.string()
      .required('Campo requerido'),
    email: Yup.string()
      .email('Correo no válido')
      .required('Campo requerido'),
    message: Yup.string()
      .required('Campo requerido')
  });

  return (
    <Formik
      initialValues={{
        fullName: '',
        email   : '',
        message : '',
      }}

      validationSchema={schema}

      onSubmit={sendEmail}

      initialErrors={{ fullName: 'required', email: 'required' }}
    >
    {({
      values,
      errors,
      touched,
      isValid,
      handleBlur,
      handleChange,
      handleSubmit,
    }: FormikProps<FormikValues>) => (
      <form
        className={styles.ContactForm}
        onSubmit={handleSubmit}>
        <label>
          Nombre y apellido <br />
          <input
            className={`
              ${styles.input}
              ${!!touched.fullName && !!errors.fullName ? styles.error : '' }
            `}
            name="fullName"
            type="text"
            value={values.fullName}
            disabled={loader}
            required
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {
            touched.fullName &&
            errors.fullName &&
            <div className={styles.errorLabel}>{errors.fullName}</div>
          }
        </label>
        
        <label>
          Correo <br />
          <input
            className={`
              ${styles.input}
              ${!!touched.email && !!errors.email ? styles.error : '' }
            `}
            name="email"
            type="email"
            value={values.email}
            disabled={loader}
            required
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {
            touched.email &&
            errors.email &&
            <div className={styles.errorLabel}>{errors.email}</div>
          }
        </label>

        <label>
          Mensaje <br />
          <textarea
            className={`
              ${styles.textArea}
              ${!!touched.message && !!errors.message ? styles.error : '' }
            `}
            name="message"
            value={values.message}
            maxLength={2000}
            disabled={loader}
            required
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {
            touched.message &&
            errors.message &&
            <div className={styles.errorLabel}>{errors.message}</div>
          }
        </label>


        <Button
          className={styles.submitButton}
          type="submit"
          disabled={!isValid || loader}>
          {loader && (
            <div className={styles.loaderWrapper}>
              <Loader small />
            </div>
          )}

          {requestError && (
            <div className={styles.failureResponse}>
              <span className="notification">
                Intentalo de nuevo
              </span>
            </div>
          )}

          {requestSuccess && (
            <div className={styles.successResponse}>
              <span className="notification">
                Mensaje enviado
              </span>
            </div>
          )}

          Enviar mensaje
        </Button>

      </form>
    )}
    </Formik>
  );
}