import App from './components/App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// DO NOT TOUCH
// creates root page using 'App.js'
// 'public/index.html' takes root and displays page on browser
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
