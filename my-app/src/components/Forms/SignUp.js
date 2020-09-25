import './Login.css'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from './validate-signup'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Commented our BrowserRouter as Router from react-router-dom since it isn't being used

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	text-decoration: none;
	font-family: 'Roboto Slab', sans-serif;

	p {
		color: red;
		text-decoration: none;
		display: flex;
		margin-top: 6%;
		width: 100%;
	}

	body {
		font-family: 'Roboto Slab', sans-serif;
		background: white;
		color: #484848;
		padding: 40px;
	}

	input {
		display: block;
		margin-bottom: 15px;
		margin-top: 5px;
		padding: 10px;
		border: 1px solid #cfcfcf;
		font-family: 'Roboto Slab', sans-serif;
		font-size: 16px;
		outline: none;
	}
`

const intitialformvalues = {
	// strings
	email: '',
	password: '',
	// check box
	terms: false,
}
const initialFormErrors = {
	email: '',
	password: '',
	terms: '',
}

export default function RegistryForm(props) {
	const [users, setUsers] = useState({})
	//Commented out since it isn't being used

	const [formValues, setFormValues] = useState(intitialformvalues)
	const [formErrors, setFormErrors] = useState(initialFormErrors)
	const [disabled, setDisabled] = useState(true)
	const history = useHistory()

	const addNewUser = (newuser) => {
		axiosWithAuth()
			.post('api/auth/register', newuser)
			.then((response) => {
				console.log(response)
				localStorage.setItem('token', response.data.payload)
				history.push('/login')
			})
			.catch((error) => {
				alert('Register failed.')
			})
			.finally(() => {})
		console.log(newuser)
		setFormValues(intitialformvalues)
	}

	const validate = (email, value) => {
		yup
			.reach(schema, email)

			.validate(value)

			.then((valid) => {
				setFormErrors({
					...formErrors,
					[email]: '',
				})
			})
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[email]: err.errors[0],
				})
			})
	}

	const inputChange = (email, value) => {
		validate(email, value)
		setFormValues({
			...formValues,
			[email]: value,
		})
	}

	const formSubmit = () => {
		const newuser = {
			email: formValues.email.trim(),
			password: formValues.password.trim(),
		}
		addNewUser(newuser)
	}

	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			setDisabled(!valid)
		})
	}, [formValues])

	const Submit = (evt) => {
		evt.preventDefault()
		formSubmit()
	}
	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target
		const valueToUse = type === 'checkbox' ? checked : value
		inputChange(name, valueToUse)
	}
	return (
		<StyledDiv>
			<div id="signup">
				<form className="registryform" onSubmit={Submit}>
					<div className="inputs">
						<label class="register">Register:{<br></br>}</label>
						<label>
							Email:{<br></br>}
							<input
								value={formValues.email}
								onChange={onChange}
								name="email"
								type="text"
							/>
						</label>
						{<br></br>}
						<label>
							Password:{<br></br>}
							<input
								value={formValues.password}
								onChange={onChange}
								name="password"
								type="password"
							/>
						</label>
						{<br></br>}

						<label>
							{' '}
							<p>I agree to the Terms and conditions</p>
							<input
								type="checkbox"
								name="terms"
								checked={formValues.terms}
								onChange={onChange}
							/>
						</label>
					</div>
					<div className="submitarea">
						<div className="errors">
							<div>{formErrors.email}</div>
							<div>{formErrors.password}</div>
							<div>{formErrors.terms}</div>
						</div>
						<button id="submitbutton" disabled={disabled}>
							Submit
						</button>
						<Link to="/Login">
							<p>Already have an account?</p>
						</Link>
					</div>
				</form>
			</div>
		</StyledDiv>
	)
}
