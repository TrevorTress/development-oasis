import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { Axios } from 'axios';

const Login = () => {
	const [password, setPassword] = useState('');
	let navigate = useNavigate();

	const handleLogin = () => {
		if (password === 'xxx') {
			navigate('#');
		}
	};

	return (
		<>
			<Form onSubmit={handleLogin}>
				<h2>Login</h2>

				<Form.Group className="mb-3">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
				</Form.Group>

				<Form.Group>
					<Button variant="primary" type="submit" style={{ display: 'block', margin: '0 auto' }}>
						Submit
					</Button>
				</Form.Group>
			</Form>
		</>
	);
};

export default Login;
