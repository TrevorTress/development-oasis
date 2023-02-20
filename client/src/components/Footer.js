import styled from 'styled-components';
import logo from '../assets/its-logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';

// footer content and logic
const FooterComp = ({ className }) => {
	return (
		<footer className={className}>
			<div class="footer-left">
				<p class="powered-by">Powered By:</p>
				<img class="footer-logo" src={logo} />
			</div>
			<div class="footer-right">
				<button>Call Us</button>
				<button>
					<BsFillTelephoneFill size={20} />
				</button>
			</div>
		</footer>
	);
};

// footer styling
const Footer = styled(FooterComp)`
	z-index: 100; // layer footer above anything else
	display: flex; // organized left-right
	justify-content: space-between; // footer-left and footer-right placed on opposite sides
	position: fixed; // stick in place
	bottom: 0; // stick to bottom of page
	width: 100%; // width of entire page
	height: 7vh; // 7% of screen tall
	min-height: 48px;
	background: orange;

	// left section
	.footer-left {
		display: flex;
		margin: 0 1rem;

		// powered by text
		.powered-by {
			margin: auto 0;
			padding: 5px;
		}

		// lower-left logo
		.footer-logo {
			margin: 5px;
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
