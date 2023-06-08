import styled from 'styled-components';
import BSBreadcrumb from 'react-bootstrap/Breadcrumb';
import { FaHome } from 'react-icons/fa';

const BreadcrumbComp = ({ className, crumbs }) => {
	switch (crumbs.length) {
		case 1:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{crumbs[0]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		case 2:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../">{crumbs[0]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{crumbs[1]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		case 3:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../../">{crumbs[0]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../">{crumbs[1]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{crumbs[2]}</BSBreadcrumb.Item>
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

	margin: auto 2.5vw;
	font-size: 20px;

	.breadcrumb a {
		margin: 0;
		color: antiquewhite !important;
		text-decoration: none;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
		width: 36vw;
	}
`;

export default Breadcrumb;
