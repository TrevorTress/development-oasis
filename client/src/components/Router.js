import { Route, Routes } from 'react-router-dom';

import Home from './pages/content/Dashboard';
import Login from './pages/auth/Login';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default Router;
