import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: 60px;
	height: 60px;
	margin: 10px;
	background-color: lightgrey;
	border-radius: 1em;
	&:hover {
		transform: scale(1.05);
		filter: brightness(0.95);
	}
`;

export default Button;
