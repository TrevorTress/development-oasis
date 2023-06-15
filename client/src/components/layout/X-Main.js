import styled from 'styled-components';

import Header from './I-Header';
import Navbar from './II-Navbar';
import Container from './III-Container';
import ContentNav from './IV-ContentNav';
import Content from './V-Content';
import Footer from './VI-Footer';

import bg from './assets/bg.jpeg';

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
