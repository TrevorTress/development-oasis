import styled from 'styled-components';

// for changing page titles in react
import Helmet from './Helmet';

// header content and logic
const HeaderComp = ({ className, title }) => {
	return (
		<>
			<Helmet title="hahahahah" />
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
		</>
	);
};

// header styling
const Header = styled(HeaderComp)`
	z-index: 100; // layer header above anything else
	position: fixed; // lock header at top
	display: flex; // organized left-right
	justify-content: space-between; // header-left and header-right placed on opposite sides
	width: 100%; // width of entire page
	height: var(--header-height); // 8% of screen tall
	min-height: 48px;
	margin: 0;
	background: var(--header-background);
	border-bottom: solid black;

	// logo link
	.header-left a {
		color: antiquewhite;
		text-decoration: none;
	}

	// logo spacing
	.header-left {
		height: 100%;
		padding: 0.4vw;

		& img,
		h1 {
			display: block;
			height: 100%;
			margin: 0;
			color: #000;
		}
	}

	// title spacing
	.header-right {
		display: flex;
		margin: auto 1rem;
		& h2 {
			font-weight: bold;
			margin: auto;
		}

		& svg {
			display: block;
			height: 100%;
			margin: 10px 10px;

			width: 2.4vw;
			padding: 5px;
			border-radius: 0.5rem;
			&:hover {
				transform: scale(1.1);
			}
		}
	}

	@media screen and (max-width: 480px) {
		h2 {
			font-size: medium;
		}

		.header-right {
			margin: 0;
		}
	}
`;

export default Header;

// <Header />
