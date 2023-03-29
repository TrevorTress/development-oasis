import styled from 'styled-components';
import Breadcrumb from './Breadcrumb';
import Search from './search/Search';

const ContentNavComp = ({ className, crumbs }) => {
	return (
		<div className={className}>
			<Breadcrumb crumbs={crumbs} />
			<Search />
		</div>
	);
};

const ContentNav = styled(ContentNavComp)`
	display: flex;
	justify-content: space-between;
`;

export default ContentNav;
