// import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Main from '../components/layout/X-Main.js';

// import { Carousel, Image, Modal, Tooltip, Table, HomeButton } from '../components/utilities';

const HomePage = ({ className }) => {
	return (
		<>
			<Main className={className}></Main>
		</>
	);
};

const Home = styled(HomePage)``;

export default Home;
