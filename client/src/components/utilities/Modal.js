import styled from 'styled-components';
import BSModal from 'react-bootstrap/Modal';

const ModalComp = ({ className, title, description, showHandler, hideHandler }) => {
	return (
		// show and hide functions are passed to parent element as props
		<BSModal className={className} show={showHandler} onHide={hideHandler} centered>
			<BSModal.Header closeButton>
				<BSModal.Title>{title}</BSModal.Title>
			</BSModal.Header>
			<BSModal.Body>{description}</BSModal.Body>
		</BSModal>
	);
};

const Modal = styled(ModalComp)``;

export default Modal;

/* 
// modal state (place into parent component if state needed)
-----------------------------------------------
const [modal, setModal] = useState({
	title: '',
	description: '',
});

// modal handlers (place into parent component)
-----------------------------------------------
const [showModal, setShowModal] = useState(false);
const hideModal = () => setShowModal(false);
const handleShowModal = (title, description, image) => {
	setModal({ title: title, description: description, image: image }); // (if using state)
	setShowModal(true);
};

// example parent
-----------------------------------------------
<Modal 
	title="This is a modal!" 
	description="This is a description!"
	showHandler={showModal} 
	hideHandler={hideModal} 
/> 
*/
