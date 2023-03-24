import styled from 'styled-components';

// component that holds main page content (to the right of the navbar)
const Content = styled.section`
	height: 76vh;
	width: 90vw;
	margin: 0 1.5vw;
	background: white;
	padding: 50px;
	border-radius: 2rem;

	@media screen and (max-width: 480px) {
		width: 97vw;
	}
`;

export default Content;

// <Content></Content>
