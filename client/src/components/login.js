import { useState } from 'react'
//import Form from "react-bootstrap/Form"
//import "./Login.css"
//import bootstrap.min.css';


function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1700/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
				
			window.location.href = '/userinterface'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div className='login-back'>
			<div className="login-box">
			<h1 color="white">SIGN IN</h1>
			
				
					<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<br/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br /><br/>
				<input type="submit" value="Login" />
				
			</form>
			</div>
			</div>
	
	)
}

export default Login