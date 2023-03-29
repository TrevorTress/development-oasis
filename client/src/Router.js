import { Route, Routes } from 'react-router-dom';

import Home from './components/routes/Home';
import Login from './components/routes/Login';

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default Router;
