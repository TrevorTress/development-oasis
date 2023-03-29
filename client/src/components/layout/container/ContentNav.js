import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import Search from './search/Search';

const ContentNavComp = ({ className }) => {
	return (
		<div className={className}>
			<Breadcrumb items={['one']} />
			<Search />
		</div>
	);
};

const ContentNav = styled(ContentNavComp)`
	display: flex;
	justify-content: space-between;
`;

export default ContentNav;
