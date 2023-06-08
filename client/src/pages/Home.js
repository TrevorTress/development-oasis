import { useState, useEffect, useRef } from 'react';
import { Main } from '../components/shell';
import { Carousel, Image, Modal, Tooltip, Table, HomeButton } from '../components/utilities';
import { FaSearch } from 'react-icons/fa';
import pic from '../assets/GM.png';
import styled from 'styled-components';

const HomePage = ({ className }) => {
	return (
		<>
			<Main></Main>
		</>
	);
};

const Home = styled(HomePage)`
	& h1 {
		text-align: center;
		margin-bottom: 30px;
	}
`;

export default Home;
