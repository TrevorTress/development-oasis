import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<GlobalStyles />
			<Router />
		</>
	);
}

// creates root page using 'App.js'
// 'public/index.html' takes root and displays page on browser
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
