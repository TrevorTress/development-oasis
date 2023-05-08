import { useState, useEffect, useRef } from 'react';
import { Main, Container, Content, ContentNav, Header, Footer, Navbar } from '../../components/layout';
import { Carousel, Image, Modal, Tooltip, Table, HomeButton } from '../../components/utilities';
import { FaSearch } from 'react-icons/fa';
import pic from '../../assets/GM.png';

const Dashboard = () => {
	const [toggle] = useState(1);

	const data = [1, 2, 3];

	return (
		<>
			{/* <AnimatedCursor /> */}

			<Main>
				<Header />
				<Navbar />
				<Container>
					<ContentNav crumbs={['One', 'Two']} />
					<Content>
						<h1>Welcome to Trevor's Code Oasis</h1>
						<HomeButton title="WORKSHOP" icon={<FaSearch size={100} />} /*img={pic}*/ />
					</Content>
				</Container>
			</Main>
			<Footer />
		</>
	);
};

export default Dashboard;
