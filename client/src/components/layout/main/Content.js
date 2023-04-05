import styled from 'styled-components';

// component that holds main page content (to the right of the navbar)
const Content = styled.section`
	height: var(--content-height);
	margin: 0 1.5vw;
	background: var(--content-background);
	padding: 50px;
	border-radius: 2rem;
	opacity: 0.8;

	@media screen and (max-width: 480px) {
		width: 97vw;
	}
`;

export default Content;

// <Content></Content>
