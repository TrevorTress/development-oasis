import styled from 'styled-components';
import bg from './bg.jpeg';

const MainComp = ({ className, children }) => {
	return <main className={className}>{children}</main>;
};
// component that holds main page content (to the right of the navbar)

const Main = styled(MainComp)`
	display: flex;
	height: 100vh; // (page - header - footer)
	width: 100vw; // (page - navbar)
	background-size: cover;
	background-image: url(${bg});

	// mobile adjustments
	@media screen and (max-width: 480px) {
		height: 82vh;
	}
`;

export default Main;

// <Main></Main>
