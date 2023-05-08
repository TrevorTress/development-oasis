import { useState, useEffect } from 'react';
import { Main, Container, Content, ContentNav, Header, Footer, Navbar } from '../../layout';
import { Carousel, Image, Modal, Tooltip, Table } from '../../utilities';
import { For, If } from '../../scripts';
import $ from 'jquery';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import AnimatedCursor from '../../utilities/cursor/Cursor';

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
					<Content></Content>
				</Container>
			</Main>
			<Footer />
		</>
	);
};

export default Dashboard;

// <Image src="https://i.imgur.com/gYeS2WZ.jpeg" alt="test" />;
// <Carousel />
// <Button onClick={handleShowModal}>Modal Button</Button>

// <Table tablesorter={true} />
// <Modal title={modal.title} description={modal.description} showHandler={showModal} hideHandler={hideModal} />

{
	/* <Tooltip text="hello">
			<button>Tooltip Button</button>
		</Tooltip>

		<If condition={toggle === 1} otherwise="">
			hello
		</If>

		<For of={data} type="li" parent="ol" /> */
}
