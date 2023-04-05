import { useState, useEffect } from 'react';
import { Main, Container, Content, ContentNav, Header, Footer, Navbar } from '../../components/layout';
import { Carousel, Image, Modal, Tooltip, Table } from '../../components/utilities';
import { For, If } from '../../components/scripts';
import $ from 'jquery';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import AnimatedCursor from '../../components/utilities/cursor/Cursor';

const Dashboard = () => {
	const [toggle] = useState(1);

	const data = [1, 2, 3];

	return (
		<>
			<AnimatedCursor />
			<Header title="ITS" />
			<Main>
				<Navbar />
				<Container>
					<ContentNav crumbs={['One', 'Two']} />
					<Content>
						<h1>Welcome to Trevor's Code Oasis</h1>
					</Content>
				</Container>
			</Main>
			<Footer />
		</>
	);
};

export default Dashboard;
