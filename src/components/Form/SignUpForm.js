import React, { Component } from 'react'
import {Form, ErrorMessage, Formik, Field} from 'formik'
import * as yup from 'yup'

export default class SignUpForm extends Component {
    render() {
        return (
            <div className="sign-up-form">
                <Formik
                    initialValues={{
                        name: '',
                        surname: '',
                        email: '',
                        password: '',
                    }}
                    validationSchema={yup.object().shape({
                        name: yup.string()
                            .required('First name cannot be empty'),
                        surname: yup.string()
                            .required('Last name cannot be empty'),
                        email: yup.string()
                            .required('Email address cannot be empty')
                            .email('Looks like this is not an email'),
                        password: yup.string()
                            .required('Password cannot be empty')
                    })}
                    onSubmit={fields =>{
                        //send API request with fields as parameter.
                    }}
                    render={({errors, touched})=>(
                        <Form>
                           <div className="form-group">
                                <Field name="name" type="text" placeholder="First Name" className={'form-control ' + (errors.name && touched.name ? ' is-invalid' : '')}/>
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                           </div>
                           <div className="form-group">
                                <Field name="surname" type="text" placeholder="Last Name" className={'form-control ' + (errors.surname && touched.surname ? ' is-invalid' : '')}/>
                                <ErrorMessage name="surname" component="div" className="invalid-feedback" />
                           </div>
                           <div className="form-group">
                                <Field name="email" type="text" placeholder="Email" className={'form-control ' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                           </div>
                           <div className="form-group">
                                <Field name="password" type="password" placeholder="Password" className={'form-control ' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                           </div>
                           <button type="submit" className="trial-submit-button">Claim your free trial </button>
                        </Form>
                    )}
                />
                <p className="terms-and-service-link">By clicking the button, you are agreeing to our <a href="/linktodocument">Terms and Services</a></p>
            </div>
        )
    }
}
