import styled from 'styled-components';
import logo from '../assets/its-logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';

// JSX template
/*
<Container>
	<Header title="testing" />
	<Navbar />
	<Content>
	
	</Content>
	<Footer />
</Container>
*/

///////////////////////////////////////////////
const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;
///////////////////////////////////////////////
const Content = styled.div`
	position: relative;
	width: 93.5vw;
	height: 85vh;
	margin-left: 6.5vw;
	background: purple;
	overflow: auto;
`;
///////////////////////////////////////////////
const HeaderComp = ({ className, title }) => {
	return (
		<header className={className} onClick={() => console.log('hello trevor')}>
			<div className="header-left">
				<a className="header-logo mb-md-0 me-md-auto" href="/">
					<h1>{title}</h1>
				</a>
			</div>

			<div className="header-right">
				<h2>{title} QuickResponse&trade; Library</h2>
			</div>
		</header>
	);
};

const Header = styled(HeaderComp)`
	z-index: 100;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 8vh;
	min-height: 48px;
	margin: 0;
	background: green;
	font-family: 'Libre Baskerville', serif;

	.header-left a {
		color: antiquewhite;
		text-decoration: none;
	}

	.header-left {
		margin: 0 1rem;
	}

	.header-right {
		margin: 0 1rem;
	}
`;
///////////////////////////////////////////////
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

const Footer = styled(FooterComp)`
	z-index: 100;
	display: flex;
	justify-content: space-between;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 7vh;
	min-height: 48px;
	background: orange;

	.footer-left {
		display: flex;
		margin: 0 1rem;
	}

	.footer-right {
		display: flex;
		margin: 0 0.5rem;

		& button {
			margin: auto 0.4vw;
			height: 90%;
			width: 3.5vw;
			&:hover {
				transform: scale(1.05);
				filter: opacity(0.8);
			}
		}
	}

	.footer-logo {
		margin: 5px;
	}

	.powered-by {
		margin: auto 0;
		padding: 5px;
	}
`;
///////////////////////////////////////////////
const NavbarComp = ({ className, title }) => {
	return (
		<div className={className}>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
		</div>
	);
};

const Navbar = styled(NavbarComp)`
	z-index: 10;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	top: 8vh;
	left: 0;
	width: 6.5vw;
	min-width: fit-content;
	background: blue;
	height: 85vh;

	.nav-button {
		display: block;
		margin: 0 auto;
		width: 90%;
		height: 13%;
		border-radius: 0.5rem;

		&:hover {
			transform: scale(1.05);
			filter: opacity(0.8);
		}
	}
`;
///////////////////////////////////////////////

export { Container, Content, Header, Footer, Navbar };
