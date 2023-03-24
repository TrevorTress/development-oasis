import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	// global vars
	:root {
		--header-height: 8vh;
		--footer-height: 7vh;
		--breadcrumb-height: 4vh;
		--navbar-width: 6vw;
		

		--header-background: white;
		--content-background: lightblue;
		--navbar-background: lightgrey;
		--breadcrumb-background: lavender;
	}
	
    // tablesorter pager button effect
    .pager svg:hover {
		filter: drop-shadow(0px 1px 1px black);
		transform: scale(1.1);
		background: #d5d5d5;
		border-radius: 10px;
		cursor: pointer;
	}

	/* width */
	::-webkit-scrollbar {
		width: 10px;
		border-radius: 10px;
		transform: translateX(20px);
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
		/* margin-top: 100px;
		margin-bottom: 60px; */
		border-radius: 5px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

export default GlobalStyles;
