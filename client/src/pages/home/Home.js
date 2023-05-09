import { useState, useEffect, useRef } from 'react';
import { Main, Container, Content, ContentNav, Header, Footer, Navbar } from '../../components/layout';
import { Carousel, Image, Modal, Tooltip, Table, HomeButton } from '../../components/utilities';
import { FaSearch } from 'react-icons/fa';
import pic from '../../assets/GM.png';
import styled from 'styled-components';

const HomePage = ({ className }) => {
	const [toggle] = useState(1);

	const data = [1, 2, 3];

	return (
		<>
			<Main className={className}>
				<Header />
				<Navbar />
				<Container>
					<ContentNav crumbs={['One', 'Two']} />
					<Content>
						<h1>Welcome to Trevor's Code Oasis</h1>
						<switchbox>
							<HomeButton title="WORKSHOP" img={pic} />
							<HomeButton title="WORKSHOP" icon={<FaSearch size={100} />} />
							<HomeButton title="WORKSHOP" img={pic} />
							<HomeButton title="WORKSHOP" icon={<FaSearch size={100} />} />
						</switchbox>
					</Content>
				</Container>
			</Main>
			<Footer />
		</>
	);
};

const Home = styled(HomePage)`
	& h1 {
		text-align: center;
		margin-bottom: 30px;
	}
`;

export default Home;
