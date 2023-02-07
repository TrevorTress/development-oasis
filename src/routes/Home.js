import { useState } from 'react';
import Header from '../Header';
import Button from '../Button';
import Footer from '../Footer';
import Modal from '../Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
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
			<Footer />
			<Modal title="xxx" showHandler={showModal} hideHandler={() => setShowModal(false)} />
		</>
	);
};

export default Home;
