import styled from 'styled-components';
import bg from './bg.jpeg';
// component that holds main page content (to the right of the navbar)
const Main = styled.main`
	display: flex;
	height: 100vh; // (page - header - footer)
	width: 100vw; // (page - navbar)
	background-size: cover;
	background-image: url(${bg});

	// mobile adjustments
	@media screen and (max-width: 480px) {
		left: 0; // nav disappears, Main shifts back
		width: 100%;
	}
`;

export default Main;

// <Main></Main>
