import { useState, useEffect } from 'react';
import { Main, Container, Content, ContentNav, Header, Footer, Navbar } from '../../components/layout';
import { Carousel, Image, Modal, Tooltip, Table, HomeButton } from '../../components/utilities';
import { For, If } from '../../components/scripts';
import $ from 'jquery';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import AnimatedCursor from '../../components/utilities/cursor/Cursor';
import GM from '../../assets/GM.png';
import Hyundai from '../../assets/HYUNDAI.png';
import Stellantis from '../../assets/STELLANTIS.png';

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
						<div className="d-flex justify-content-between">
							<HomeButton title="STELLANTIS (WTAP)" img={Stellantis} />
							<HomeButton title="HYUNDAI (HMMA)" img={Hyundai} />
							<HomeButton title="GM (FT WAYNE)" img={GM} />
							<HomeButton title="GM (SPRINGHILL)" img={GM} />
						</div>
					</Content>
				</Container>
			</Main>
			<Footer />
		</>
	);
};

export default Dashboard;
