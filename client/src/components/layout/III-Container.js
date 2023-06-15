import styled from 'styled-components';

const ContainerComp = ({ className, children }) => {
	return <container className={className}>{children}</container>;
};

// main page container
const Container = styled(ContainerComp)`
	position: relative;
	top: var(--header-height); // shift past header
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - var(--header-height) - var(--footer-height)); // (page - header - footer)
	width: 100%;
	padding: 2rem;

	// mobile adjustments
	@media screen and (max-width: 480px) {
		height: calc(82vh - var(--header-height));
		padding: 1rem;
		padding-bottom: 2rem;
	}
`;

export default Container;
