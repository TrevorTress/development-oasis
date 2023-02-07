import { useState, useEffect, useRef } from 'react';
import Header from '../Header';
import Button from '../Button';
import Footer from '../Footer';
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import BSTooltip from 'react-bootstrap/Tooltip';

const Home = () => {
	// code that should only run on page load
	// useEffect(() => {
	// 	console.log('Hello Trevor');
	// }, []);

	// tooltip render function
	const renderTooltip = (content) => <BSTooltip id="button-tooltip">{content}</BSTooltip>;

	// modal state (place into parent component)
	const [modal, setModal] = useState({
		title: '',
		description: '',
	});

	// modal handlers (place into parent component)
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => {
		setShowModal(true);
	};

	//conditional state
	const [conditional, setConditional] = useState(true);

	const myRef = useRef(0);

	const increment = () => {
		myRef.current += 1;
	};
	return (
		<>
			<Header title="testing" />
			<Button onClick={handleShowModal}>Modal Button</Button>

			<Tooltip placement="top" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('This is a tooltip!')}>
				<Button>Tooltip Button</Button>
			</Tooltip>

			<Button onClick={() => setConditional(!conditional)}>{conditional ? <span style={{ background: 'green' }}>Conditional Button True</span> : <span style={{ background: 'red' }}>Conditional Button False</span>}</Button>

			<Button onClick={increment}>
				<p>Reference Counter: {myRef.current}</p>
				<p>(Doesnt cause re-render)</p>
			</Button>

			<Footer />
			<Modal title="This is a modal!" showHandler={showModal} hideHandler={() => setShowModal(false)} />
		</>
	);
};

export default Home;
