import { Helmet } from 'react-helmet';

const HelmetComp = (props) => {
	return (
		<Helmet>
			<title>{props.title}</title>
			<meta property="og:title" content="My Page Title" />
		</Helmet>
	);
};

export default HelmetComp;
