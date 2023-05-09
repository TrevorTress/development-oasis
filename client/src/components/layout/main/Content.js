import styled from 'styled-components';

const ContentComp = ({ className, children }) => {
	return <section className={className}>{children}</section>;
};

// component that holds main page content (to the right of the navbar)
const Content = styled(ContentComp)`
	height: var(--content-height);
	margin: 0 1.5vw;
	background: var(--content-background);
	padding: 50px;
	border-radius: 2rem;
	opacity: 0.8;
	overflow: auto;

	@media screen and (max-width: 480px) {
		width: 95vw;
		margin: auto;
		height: 62vh;
	}
`;

export default Content;

// <Content></Content>
