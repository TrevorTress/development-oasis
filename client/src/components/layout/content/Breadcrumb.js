import styled from 'styled-components';
import BSBreadcrumb from 'react-bootstrap/Breadcrumb';
import { FaHome } from 'react-icons/fa';

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
	position: relative;
	height: var(--breadcrumb-height);
	background: var(--breadcrumb-background);
	color: antiquewhite;
	margin-left: 2.5vw;
	margin-top: 1.4vh;
`;

export default Breadcrumb;
