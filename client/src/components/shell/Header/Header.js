// packages
import styled from 'styled-components';

// nested components
import Helmet from './Helmet'; // for adjusting page title in react
import { Tooltip } from '../../utilities';
import { Dropdown } from 'react-bootstrap';
// icons
import { FaSearch, FaHome, FaQuestionCircle } from 'react-icons/fa';
import { IoMdSettings, IoMdMail, IoMdMenu } from 'react-icons/io';
import { MdOutlineLogout } from 'react-icons/md';

// header content and logic
const HeaderComp = ({ className, login, title }) => {
	return (
		<>
			<Helmet title={title ? title : 'Development Oasis'} />
			<header className={className}>
				<div className="header-left">
					<a
						className="header-logo mb-md-0 me-md-auto"
						href="/"
					></a>
				</div>

				<div className="header-right">
					{
						// do not render buttons on login page
						!login && (
							<div className="header-buttons">
								<Tooltip
									text="Search"
									direction="down"
									className="d-flex"
								>
									<button>
										<FaSearch size={40} />
									</button>
								</Tooltip>
								<Tooltip
									text="Settings"
									direction="down"
									className="d-flex"
								>
									<button>
										<IoMdSettings size={45} />
									</button>
								</Tooltip>
								<Tooltip
									text="Log-Off"
									direction="down"
									className="d-flex"
								>
									<button>
										<MdOutlineLogout size={50} />
									</button>
								</Tooltip>
								<Tooltip
									text="Contact"
									direction="down"
									className="d-flex"
								>
									<button>
										<IoMdMail size={40} />
									</button>
								</Tooltip>
								<Tooltip
									text="Help"
									direction="down"
									className="d-flex"
								>
									<button>
										<FaQuestionCircle size={40} />
									</button>
								</Tooltip>
								<Tooltip
									text="Home"
									direction="down"
									className="d-flex"
								>
									<button>
										<FaHome size={40} />
									</button>
								</Tooltip>
							</div>
						)
					}
					<Dropdown className="mobile-menu">
						<Dropdown.Toggle>
							<IoMdMenu size={45} />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item>
								<FaSearch size={45} />
								<span>Search</span>
							</Dropdown.Item>
							<Dropdown.Item>
								<IoMdSettings size={45} />
								<span>Settings</span>
							</Dropdown.Item>
							<Dropdown.Item>
								<MdOutlineLogout size={45} />
								<span>Logout</span>
							</Dropdown.Item>
							<Dropdown.Item>
								<IoMdMail size={45} />
								<span>Contact</span>
							</Dropdown.Item>
							<Dropdown.Item>
								<FaQuestionCircle size={45} />
								<span>Help</span>
							</Dropdown.Item>
							<Dropdown.Item>
								<FaHome size={45} />
								<span>Home</span>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</header>
		</>
	);
};

// header styling
const Header = styled(HeaderComp)`
	background: var(--header-background);
	position: fixed;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: var(--header-height);
	padding: 0.8vh 0.4vw;
	border-bottom: solid black;
	z-index: 100;

	.header-left {
		height: 100%;

		& a {
			color: antiquewhite;
			text-decoration: none;
			margin: auto 0;
		}

		& img,
		h1 {
			display: block;
			height: 100%;
			width: 15vw;
			margin: auto;
			color: #000;
		}
	}

	// title spacing
	.header-right {
		display: flex;

		& h2 {
			font-weight: bold;
			margin: auto 1rem;
			color: #fff;
		}

		.header-buttons {
			display: flex;
			& button {
				width: 4vw;
				height: 90%;
				border: none;
				border-radius: 1rem;
				margin: auto 5px;
				background: #d0f6ffdb;

				& svg {
					color: var(--secondary);
					margin: auto;
				}

				&:hover {
					transform: scale(1.03);
					filter: brightness(0.9);
				}
			}
		}

		.mobile-menu {
			display: none;
		}
	}

	@media screen and (max-width: 480px) {
		position: absolute;
		.header-left {
		}

		.header-right {
			margin: 0;

			& .header-buttons {
				display: none !important;
			}
		}

		.mobile-menu {
			display: block !important;
			margin: auto;

			& button {
				width: 16vw;
				border: none;
				border-radius: 1rem;
				margin: auto 5px;
				padding: 0;
				background: #ffffff1f;
			}

			& svg {
				color: var(--secondary);
			}
		}

		.dropdown-menu.show {
			background: lightgrey;
			width: 40vw;

			& svg {
				color: var(--primary);
				margin-right: 10px;
			}
		}

		.dropdown-item {
			display: flex;
			font-weight: bold;
			justify-content: space-between;

			& span {
				margin: auto;
			}
		}
	}
`;

export default Header;
