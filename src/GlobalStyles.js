import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    // tablesorter pager button effect
    .pager svg:hover {
		filter: drop-shadow(0px 1px 1px black);
		transform: scale(1.1);
		background: #d5d5d5;
		border-radius: 10px;
		cursor: pointer;
	}
`;

export default GlobalStyles;
