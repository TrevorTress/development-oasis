import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
	width: fit-content;
	height: 10vh;
	margin: 10px;
	background-color: lightgrey;
	border-radius: 1em;
	&:hover {
		transform: scale(1.05);
		filter: brightness(0.95);
	}
`;

export default Button;
