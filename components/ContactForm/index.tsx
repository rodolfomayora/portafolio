import React, { FC, useState } from 'react';
import { Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import style from './style.module.scss';
import { SubmitLoader } from '../../components';
import emailjs from 'emailjs-com';
import { RequestBody } from './type';
import capitelizeAllWords from '../../utils/capitelizeAllWords';

const ContactForm: FC = () => {

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
        process.env.NEXT_PUBLIC_USER_ID
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
    <>
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
      <form className={style.ContactForm}
        onSubmit={handleSubmit}
      >
        <label>
          Nombre y apellido <br />
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
            disabled={loader}
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
            disabled={loader}
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
            className={touched.message && errors.message
              ? `${style.messageInput} ${style.errorInput}`
              : style.messageInput
            }
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            maxLength={2000}
            disabled={loader}
          />
          {
            touched.message &&
            errors.message &&
            <span className={style.error}>{errors.message}</span>
          }
        </label>

        <button className={style.submitButton}
          type="submit"
          disabled={!isValid || loader}
        >
          {loader && (
            <div className={style.loaderWrapper}>
              <SubmitLoader />
            </div>
          )}

          {requestError && (
            <div className={style.errorResponse}>
              <span className={style.notification}>
                Intentelo de nuevo
              </span>
            </div>
          )}

          {requestSuccess && (
            <div className={style.successResponse}>
              <span className={style.notification}>
                Mensaje enviado
              </span>
            </div>
          )}

          Enviar mensaje
        </button>
      </form>
    )}
    </Formik>
    </>
  );
}

export default ContactForm;