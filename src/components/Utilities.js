import styled from 'styled-components';
import BSModal from 'react-bootstrap/Modal';
import BSTooltip from 'react-bootstrap/Tooltip';
import BSBreadcrumb from 'react-bootstrap/Breadcrumb';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaHome } from 'react-icons/fa';

///////////////////////////////////////////////
const Button = styled.button`
	width: fit-content;
	height: 10vh;
	margin: 10px;
	background-color: lightgrey;
	border-radius: 1em;
	&:hover {
		transform: scale(1.05);
		filter: brightness(0.95);
	}
`;
///////////////////////////////////////////////
const BreadcrumbComp = ({ className, items }) => {
	switch (items.length) {
		case 1:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{items[0]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		case 2:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../">{items[0]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{items[1]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		case 3:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../../">{items[0]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../">{items[1]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{items[2]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		default:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
	}
};

const Breadcrumb = styled(BreadcrumbComp)`
	background: yellow;
	color: antiquewhite;
`;
///////////////////////////////////////////////
const Tooltip = styled(OverlayTrigger)``;

// render function (placed in parent element):
// const renderTooltip = (content) => <BSTooltip id="button-tooltip">{content}</BSTooltip>;
///////////////////////////////////////////////
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

/* modal state (place into parent component if state needed)
-----------------------------------------------
const [modal, setModal] = useState({
	title: '',
	description: '',
});
-----------------------------------------------
*/

/* modal handlers (place into parent component)
-----------------------------------------------
const [showModal, setShowModal] = useState(false);
const hideModal = () => setShowModal(false);
const handleShowModal = (title, description, image) => {
	setModal({ title: title, description: description, image: image }); // (if using state)
	setShowModal(true);
};
-----------------------------------------------
*/

/* 
<Modal 
	title="This is a modal!" 
	description="This is a description!"
	showHandler={showModal} 
	hideHandler={hideModal} 
/> 
*/
///////////////////////////////////////////////

export { Button, Breadcrumb, Tooltip, Modal };
