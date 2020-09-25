
import * as yup from 'yup'

export default yup.object().shape({
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required'),
    terms: yup.boolean()
        .oneOf([true], "you must agree to terms and conditions"),
})