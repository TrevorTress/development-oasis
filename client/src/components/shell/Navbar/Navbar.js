// packages
import { useState } from 'react';
import styled from 'styled-components';

// icons
import { FaHome, FaClipboardList, FaBookOpen, FaGithub, FaCpanel, FaRobot, FaChartBar } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import { MdSyncProblem, MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { RiFileList3Line } from 'react-icons/ri';
import { TbTrafficCone } from 'react-icons/tb';
import { VscSymbolMisc } from 'react-icons/vsc';

const NavbarComp = ({ className, title }) => {
	const [navDisplay, setNavDisplay] = useState('flex');
	return (
		<nav className={className} style={{ display: navDisplay }}>
			<a href="https://github.com/" target="blank">
				<button className="nav-button">
					<FaGithub size={50} />
				</button>
			</a>
			<a href="https://www.interactivetrainingsystems.com:2083/" target="blank">
				<button className="nav-button" style={{ background: '#ffff93' }}>
					<FaCpanel size={75} />
				</button>
			</a>
			<a href="https://chat.openai.com/" target="blank">
				<button className="nav-button" style={{ background: '#ffdb6e' }}>
					<FaRobot size={50} />
				</button>
			</a>
			<a href="https://react-icons.github.io/react-icons" target="blank">
				<button className="nav-button" style={{ background: '#93daff' }}>
					<VscSymbolMisc size={50} />
				</button>
			</a>
			<a>
				<button className="nav-button" style={{ background: '#ff9393' }}>
					<MdSyncProblem size={50} />
				</button>
			</a>
			<a href="http://localhost:3000/" target="blank">
				<button className="nav-button" style={{ background: '#bb93ff' }}>
					<MdOutlineScreenSearchDesktop size={50} />
				</button>
			</a>
			<a href="https://docs.google.com/spreadsheets/d/1W0lz794XSLcNY1dk-kgqXS12Y0I6glVTFWWhnov8MP0/edit#gid=1510448127" target="blank">
				<button className="nav-button" style={{ background: '#a6a6a6' }}>
					<FaChartBar size={50} />
				</button>
			</a>
		</nav>
	);
};

const Navbar = styled(NavbarComp)`
	z-index: 10;
	position: relative;
	flex-direction: column;
	justify-content: space-evenly;
	top: var(--header-height);
	height: calc(100vh - var(--header-height) - var(--footer-height));
	width: var(--navbar-width);
	min-width: fit-content;
	background: var(--navbar-background);
	border-right: solid grey 0.5px;
	transition: all 0.5s ease-in-out;

	& a {
		height: 12vh;
		& button {
			display: block;
			margin: 0 auto;
			width: 100%;
			height: 100%;
			border-top: lightgrey;
			border-bottom: lightgrey;
			border-left: none;
			border-right: none;
			&:hover {
				/* transform: scale(1.01); */
				filter: brightness(0.95);
			}
		}
	}

	.nav-button {
		/* border-radius: 0.5rem; */
	}

	// hide navbar on mobile
	@media screen and (max-width: 480px) {
		display: none !important;
	}
`;

export default Navbar;
