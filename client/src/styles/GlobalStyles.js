import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	// global vars
	:root {

		--primary: #f0e2bd;
		
		/* --container-background: white; */

		--header-height: 8vh;
		--header-background: var(--primary);

		--footer-height: 7vh;
		--footer-background: var(--primary);

		--navbar-width: 6vw;
		--navbar-background: grey;
		
		--breadcrumb-height: 4vh;
		--breadcrumb-background: none;
		
		--tooltip-text-color: white;
		--tooltip-background-color: black;
		--tooltip-margin: 30px;
		--tooltip-arrow-size: 6px;
	}

	body {
		font-family: 'Roboto Mono', monospace!important;
	}

	switchbox {
		display: flex;
	}
	
	@media screen and (max-width: 480px) {
		switchbox {
			display: block;
		}
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
