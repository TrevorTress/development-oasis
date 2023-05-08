import { useState, useEffect, useRef } from 'react';
import { Main, Container, Content, ContentNav, Header, Footer, Navbar } from '../../components/layout';
import { Carousel, Image, Modal, Tooltip, Table, HomeButton } from '../../components/utilities';
import { For, If } from '../../components/scripts';
import $ from 'jquery';

import AnimatedCursor from '../../components/utilities/cursor/Cursor';
import GM from '../../assets/GM.png';
import Hyundai from '../../assets/HYUNDAI.png';
import Stellantis from '../../assets/STELLANTIS.png';

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
						<HomeButton title="workshop" img={Hyundai} />
					</Content>
				</Container>
			</Main>
			<Footer />
		</>
	);
};

export default Dashboard;
