import Container from './Container';
import Content from './Content';
import ContentNav from './ContentNav/ContentNav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';

import bg from './bg.jpeg';

const MainComp = ({ className, children }) => {
	return (
		<main className={className}>
			<Header />
			<Navbar />
			<Container>
				{/* <ContentNav /> */}

				<Content>{children}</Content>
			</Container>
			<Footer />
		</main>
	);
};

export const Main = styled(MainComp)`
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
