import { useState } from 'react';
import Header from '../Header';
import Button from '../Button';
import Footer from '../Footer';
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import BSTooltip from 'react-bootstrap/Tooltip';

const Home = () => {
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
	return (
		<>
			<Header title="testing" />
			<Button onClick={handleShowModal}>Modal Button</Button>

			<Tooltip placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip('This is a tooltip!')}>
				<Button>Tooltip Button</Button>
			</Tooltip>

			<Footer />
			<Modal title="This is a modal!" showHandler={showModal} hideHandler={() => setShowModal(false)} />
		</>
	);
};

export default Home;
