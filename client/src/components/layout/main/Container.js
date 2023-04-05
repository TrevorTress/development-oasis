import styled from 'styled-components';

// component that holds main page content (to the right of the navbar)
const Container = styled.main`
	position: relative;
	height: calc(100vh - var(--header-height) - var(--footer-height)); // (page - header - footer)
	width: 100%; // (page - navbar)
	top: var(--header-height); // shift past header

	overflow: auto; // content scrolls inside of other static elements

	// mobile adjustments
	@media screen and (max-width: 480px) {
		left: 0; // nav disappears, container shifts back
		width: 100%;
	}
`;

export default Container;

// <Container></Container>
