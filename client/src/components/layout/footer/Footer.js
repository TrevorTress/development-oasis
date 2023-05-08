//packages
import styled from 'styled-components';

// icons
import logo from './its-logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';

// footer content and logic
const FooterComp = ({ className }) => {
	const link = 'https://www.interactivetrainingsystems.com';
	return (
		<footer className={className}>
			<div className="footer-left">
				<p className="powered-by">Powered By:</p>
				<a href={link}>
					<img className="footer-logo" src={logo} alt="logo" />
				</a>
			</div>
			<div className="footer-right">
				<button>
					<BsFillTelephoneFill size={30} />
				</button>
			</div>
		</footer>
	);
};

// footer styling
const Footer = styled(FooterComp)`
	background: var(--footer-background);
	width: 100%; // width of entire page
	height: var(--footer-height);
	min-height: 48px;
	position: fixed; // stick in place
	bottom: 0; // stick to bottom of page
	display: flex; // organized left-right
	justify-content: space-between; // footer-left and footer-right placed on opposite sides
	border-top: solid black;
	z-index: 100; // layer footer above anything else

	// left section
	.footer-left {
		display: flex;
		margin: 0 1rem;

		// powered by text
		.powered-by {
			margin: auto 0;
			padding: 5px;
			font-weight: bold;
		}

		// lower-left logo
		.footer-logo {
			margin: 5px;
			height: 100%;
		}

		& a {
			height: 85%;
		}
	}

	// right section
	.footer-right {
		display: flex;
		margin: 0 0.5rem;

		// footer right buttons
		& button {
			margin: auto 0.4vw;
			height: 90%;
			width: 3.5vw;

			// footer right buttons hover
			&:hover {
				transform: scale(1.05);
				filter: opacity(0.8);
			}
		}
	}
`;

export default Footer;

// <Footer />
