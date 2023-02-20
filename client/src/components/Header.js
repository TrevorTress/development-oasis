import styled from 'styled-components';

// header content and logic
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

// header styling
const Header = styled(HeaderComp)`
	z-index: 100; // layer header above anything else
	display: flex; // organized left-right
	justify-content: space-between; // header-left and header-right placed on opposite sides
	width: 100%; // width of entire page
	height: 8vh; // 8% of screen tall
	min-height: 48px;
	margin: 0;
	background: green;
	font-family: 'Libre Baskerville', serif;

	// logo link
	.header-left a {
		color: antiquewhite;
		text-decoration: none;
	}

	// logo spacing
	.header-left {
		margin: 0 1rem;
	}

	// title spacing
	.header-right {
		margin: 0 1rem;
	}
`;

export default Header;

// <Header />
