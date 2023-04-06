import React from 'react';
import styled from 'styled-components';

const HomeButtonComp = ({ className, title, img }) => {
	return (
		<>
			<a href="#">
				<button className={className}>
					<img src={img}></img>
					<h3>{title}</h3>
				</button>
			</a>
		</>
	);
};

const HomeButton = styled(HomeButtonComp)`
	display: flex;
	flex-direction: column;
	justify-content: end;
	width: 20vw;
	height: 32vh;
	padding: 0;
	border-radius: 1rem;
	transition: all 0.3s ease-in-out;

	& h3 {
		margin: 0 auto;
		background: pink;
		width: 100%;
		padding: 10px;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
	}

	& img {
		width: 100%;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		margin: auto;
	}

	&:hover {
		transform: scale(1.01);
	}
`;

export default HomeButton;
