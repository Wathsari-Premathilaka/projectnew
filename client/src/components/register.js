import { useState } from 'react'
import { useHistory } from 'react-router-dom'
//import "./Login.css"

function Register() {
	const history = useHistory()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1700/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status) {
			alert('Registration successful')
			window.location.href = '/login'
		}
	}

	return (
		<div className='login-back'>
		<div className="login-box2">
			<h1>SIGN UP</h1>
			<form onSubmit={registerUser}>
				
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />	<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />	<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />	<br />
				<input type="submit" value="Register" />
				
			</form>
		</div>
		</div>
	)
}

export default Register