import styled from 'styled-components';

// component that holds main page content (to the right of the navbar)
const Content = styled.div`
	position: relative; // positioned after the navbar
	width: 93.5vw; // added to navbar, page width = 100vw
	height: 85vh; // added to header & footer, page height = 100vh
	margin-left: 6.5vw; // move content 6.5% left (past the navbar)
	background: purple;
	overflow: auto;
`;

export default Content;

// <Content></Content>
