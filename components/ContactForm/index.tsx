import React, { FC, useState } from 'react';

import { Formik, FormikProps, FormikValues } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import capitelizeAllWords from '../../utils/capitelizeAllWords';
import { Loader } from '../../components';
import { RequestBody } from './type';

import {
  ContactFormStyled,
  ErrorLabel,
  FailureResponse,
  Input,
  LoaderWrapper,
  TextArea,
  SubmitButton,
  SuccessResponse,
} from './styles';

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
      <ContactFormStyled onSubmit={handleSubmit}>
        <label>
          Nombre y apellido <br />
          <Input
            name="fullName"
            type="text"
            value={values.fullName}
            error={!!touched.fullName && !!errors.fullName}
            disabled={loader}
            required
            onBlur={handleBlur}
            onChange={handleChange}/>
          {
            touched.fullName &&
            errors.fullName &&
            <ErrorLabel>{errors.fullName}</ErrorLabel>
          }
        </label>
        
        <label>
          Correo <br />
          <Input
            name="email"
            type="email"
            value={values.email}
            error={!!touched.email && !!errors.email}
            disabled={loader}
            required
            onBlur={handleBlur}
            onChange={handleChange}/>
          {
            touched.email &&
            errors.email &&
            <ErrorLabel>{errors.email}</ErrorLabel>
          }
        </label>

        <label>
          Mensaje <br />
          <TextArea
            name="message"
            as="textarea"
            value={values.message}
            maxLength={2000}
            error={!!touched.message && !!errors.message}
            disabled={loader}
            required
            onBlur={handleBlur}
            onChange={handleChange}/>
          {
            touched.message &&
            errors.message &&
            <ErrorLabel>{errors.message}</ErrorLabel>
          }
        </label>


        <SubmitButton
          type="submit"
          disabled={!isValid || loader}>
          {loader && (
            <LoaderWrapper>
              <Loader small />
            </LoaderWrapper>
          )}

          {requestError && (
            <FailureResponse>
              <span className="notification">
                Intentelo de nuevo
              </span>
            </FailureResponse>
          )}

          {requestSuccess && (
            <SuccessResponse>
              <span className="notification">
                Mensaje enviado
              </span>
            </SuccessResponse>
          )}

          Enviar mensaje
        </SubmitButton>

      </ContactFormStyled>
    )}
    </Formik>
  );
}

export default ContactForm;