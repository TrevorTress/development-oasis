import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Navbar, Content, Footer } from '../layout/index';
import { Button, Breadcrumb, Carousel, Image, Modal, Tooltip, Table } from '../utilities/Utilities';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import BSTooltip from 'react-bootstrap/Tooltip';
import 'tablesorter';
import 'tablesorter/dist/js/extras/jquery.tablesorter.pager.min.js';
import 'tablesorter/dist/css/theme.ice.min.css';
import GlobalStyles from '../styles/GlobalStyles';

const Home = () => {
	// code that should only run on page load

	// tooltip render function
	const renderTooltip = (content) => <BSTooltip id="button-tooltip">{content}</BSTooltip>;

	// modal state (placed into parent component)
	const [modal, setModal] = useState({
		title: 'This is a title!',
		description: 'This is a description!',
	});

	// modal handlers (placed into parent component)
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const hideModal = () => setShowModal(false);

	//conditional state
	const [conditional, setConditional] = useState(true);
	const myRef = useRef(0);
	const increment = () => {
		myRef.current += 1;
	};

	return (
		<>
			<GlobalStyles />
			<Container>
				<Header title="testing" />
				<Navbar />
				<Content>
					<Breadcrumb items={['one', 'two', 'three']} />

					{/* <Image src="https://i.imgur.com/gYeS2WZ.jpeg" alt="test" /> */}
					{/* <Carousel /> */}
					{/* <Button onClick={handleShowModal}>Modal Button</Button> */}

					{/* <Tooltip placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('This is a tooltip!')}>
						<Button>Tooltip Button</Button>
					</Tooltip> */}

					{/* <Button onClick={() => setConditional(!conditional)}>{conditional ? <span style={{ background: 'green' }}>Conditional Button True</span> : <span style={{ background: 'red' }}>Conditional Button False</span>}</Button> */}

					{/* <Button onClick={increment}>Reference Counter: {myRef.current}</Button> */}

					{/* <Table tablesorter={true} /> */}
				</Content>
				<Footer />

				<Modal title={modal.title} description={modal.description} showHandler={showModal} hideHandler={hideModal} />
			</Container>
		</>
	);
};

export default Home;
