"use client"
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    passWord: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    comfirmPassword: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Required'),
});

const ValidationSchemaExample = () => (
  <div>
    <h1>Sign up</h1>
    <Formik
      initialValues={{
        fullName: '',
        phoneNumber: '',
        passWord: "",
        comfirmPassword: "",
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="fullName"
          placeholder="Full Name"/>
          {errors.fullName && touched.fullName ? (
            <div>{errors.fullName}</div>
          ) : null}
          <Field name="phoneNumber"
          placeholder="Phone Number" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <Field name="passWord"
          placeholder="PassWord"
          type="password"/>
          {errors.passWord && touched.passWord ? (
            <div>{errors.passWord}</div>
          ) : null}
           <Field name="comfirmPassword"
          placeholder="Comfirm Password"
          type="comfirmPassword"/>
          {errors.comfirmPassword && touched.comfirmPassword ? (
            <div>{errors.comfirmPassword}</div>
          ) : null}
          <Field name="email"
          placeholder="Email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);



export default ValidationSchemaExample
