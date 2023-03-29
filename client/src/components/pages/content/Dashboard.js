import { useState, useEffect } from 'react';
import { Container, Content, Header, Footer, Navbar, Breadcrumb, Search } from '../../layout';
import { Carousel, Image, Modal, Tooltip, Table } from '../../utilities';
import { For, If } from '../../scripts';
import $ from 'jquery';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const Home = () => {
	const [toggle] = useState(1);

	const data = [1, 2, 3];

	function hello() {
		console.log('hello');
	}
	function goodbye() {
		console.log('goodbye');
	}

	return (
		<>
			<Header title="ITS" />
			<Navbar />
			<Container>
				<div className="d-flex justify-content-between">
					<Breadcrumb items={['one']} />
					<Search />
				</div>
				<Content>
					<Tooltip text="hello">
						<button>Tooltip Button</button>
					</Tooltip>

					<If condition={toggle === 1} otherwise="">
						hello
					</If>

					<For of={data} type="li" parent="ol" />
				</Content>
			</Container>
			<Footer />
		</>
	);
};

export default Home;

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
