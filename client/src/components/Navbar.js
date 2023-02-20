import styled from 'styled-components';

const NavbarComp = ({ className, title }) => {
	return (
		<div className={className}>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
			<button class="nav-button">x</button>
		</div>
	);
};

const Navbar = styled(NavbarComp)`
	z-index: 10;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	top: 8vh;
	left: 0;
	width: 6.5vw;
	min-width: fit-content;
	background: blue;
	height: 85vh;

	.nav-button {
		display: block;
		margin: 0 auto;
		width: 90%;
		height: 13%;
		border-radius: 0.5rem;

		&:hover {
			transform: scale(1.05);
			filter: opacity(0.8);
		}
	}
`;

export default Navbar;
