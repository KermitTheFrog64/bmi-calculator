import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import React from "react";
import styles from './CalculatorForm.module.css'

const CalculatorForm = (props) => {
    return (
        <Formik
                initialValues={{ weight: '', height: '' }}

                validationSchema={Yup.object({
                    weight: Yup.string()
                        .min(2, 'Minimum weight value is 2 characters')
                        .required('Required'),
                    height: Yup.string()
                        .min(2, 'Minimum height value is 2 characters')
                        .required('Required')
                })}

                onSubmit={(values, { setSubmitting }) => {
                    props.calcBmi(values);
                    setSubmitting(false);
                }}
            >
                <Form className={styles.frm}>
                    <label htmlFor="weight">Weight(ibs)</label>
                    <Field name="weight" type="text" placeholder="Enter Weight" className={styles.fld} />
                    <ErrorMessage name="weight" />

                    <label htmlFor="height">Height (in)</label>
                    <Field name="height" type="text" placeholder="Enter Height" className={styles.fld} />
                    <ErrorMessage name="height" />

                    <button type="submit" className={styles.btnSt} >Submit</button>

                    <button type="reset" className={styles.btnRt} >Reload</button>
                </Form>
            </Formik>
    )
}

export default CalculatorForm;