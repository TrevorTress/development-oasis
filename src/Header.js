// import styled library to style components
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../';

/* 
component structure/logic
    - must destructure 'className' and assign it as className to the parent element)
    - props dont need prefix (see 'title'). specify in parent element.
*/
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

// 'Header' is our default export and is the 'HeaderComp' after styling is applied
// passing prop values to style: ${(props) => props.style}
const Header = styled(HeaderComp)`
	background: green;
	width: 100%;
	height: 10vh;
	margin: 0;
	display: flex;
	justify-content: space-between;
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

export default Header;
