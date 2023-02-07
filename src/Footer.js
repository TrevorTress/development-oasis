// import styled library to style components
import { useState } from 'react';
import styled from 'styled-components';

// component structure/logic (must destructure 'className' and assign it as className to the parent element)
const FooterComp = ({ className }) => {
	return <footer className={className}>hello</footer>;
};

// 'Header' is our default export and is the 'HeaderComp' after styling is applied
const Footer = styled(FooterComp)`
	background: orange;
`;

export default Footer;
