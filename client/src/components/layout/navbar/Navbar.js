import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { FaClipboardList, FaBookOpen } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import { MdSyncProblem } from 'react-icons/md';
import { RiFileList3Line } from 'react-icons/ri';
import { TbTrafficCone } from 'react-icons/tb';
import { VscTools } from 'react-icons/vsc';

const NavbarComp = ({ className, title }) => {
	return (
		<nav className={className}>
			<button class="nav-button">
				<FaHome size={50} />
			</button>
			<button class="nav-button" style={{ background: '#ffff93' }}>
				<TbTrafficCone size={50} />
			</button>
			<button class="nav-button" style={{ background: '#ffdb6e' }}>
				<FaClipboardList size={50} />
			</button>
			<button class="nav-button" style={{ background: '#93daff' }}>
				<VscTools size={50} />
			</button>
			<button class="nav-button" style={{ background: '#ff9393' }}>
				<MdSyncProblem size={50} />
			</button>
			<button class="nav-button" style={{ background: '#bb93ff' }}>
				<BsPencil size={50} />
			</button>
			<button class="nav-button" style={{ background: '#a6a6a6' }}>
				<FaBookOpen size={50} />
			</button>
		</nav>
	);
};

const Navbar = styled(NavbarComp)`
	z-index: 10;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	top: var(--header-height);
	left: 0;
	height: calc(100vh - var(--header-height) - var(--footer-height));
	width: var(--navbar-width);
	min-width: fit-content;
	background: var(--navbar-background);
	border-right: solid grey 0.5px;

	.nav-button {
		display: block;
		margin: 0 auto;
		width: 100%;
		height: 14%;
		border-top: lightgrey;
		border-bottom: lightgrey;
		border-left: none;
		border-right: none;
		/* border-radius: 0.5rem; */

		&:hover {
			/* transform: scale(1.01); */
			filter: brightness(0.95);
		}
	}

	@media screen and (max-width: 480px) {
		display: none;
	}
`;

export default Navbar;