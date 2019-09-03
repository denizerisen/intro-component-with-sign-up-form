import React, { Component } from 'react'
import {Form, ErrorMessage, Formik, Field} from 'formik'
import * as yup from 'yup'
import {Row, Col} from 'react-bootstrap'

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
                    render={({errors, touched})=>(
                        <Form>
                           <div className="form-group">
                                <Field name="name" type="text" placeholder="First Name" className="form-control"/>
                           </div>
                           <div className="form-group">
                                <Field name="surname" type="text" placeholder="Last Name" className="form-control"/>
                           </div>
                           <div className="form-group">
                                <Field name="email" type="text" placeholder="Email" className="form-control"/>
                           </div>
                           <div className="form-group">
                                <Field name="password" type="password" placeholder="Password" className="form-control"/>
                           </div>
                           <button type="submit" className="free-trial-submit">Claim your free trial </button>
                        </Form>
                    )}
                />
                
            </div>
        )
    }
}
