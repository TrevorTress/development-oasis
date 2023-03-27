import { Container, Content, Header, Footer, Navbar, Breadcrumb } from '../layout/index';
import { Carousel, Image, Modal, Tooltip, Table } from '../utilities/index';

const Home = () => {
	return (
		<>
			<Tooltip text="hello">
				<button>Tooltip Button</button>
			</Tooltip>
		</>
	);
};

export default Home;

// <Image src="https://i.imgur.com/gYeS2WZ.jpeg" alt="test" />;
// <Carousel />
// <Button onClick={handleShowModal}>Modal Button</Button>

// <Button onClick={() => setConditional(!conditional)}>{conditional ? <span style={{ background: 'green' }}>Conditional Button True</span> : <span style={{ background: 'red' }}>Conditional Button False</span>}</Button>
// <Button onClick={increment}>Reference Counter: {myRef.current}</Button>
// <Table tablesorter={true} />
// <Modal title={modal.title} description={modal.description} showHandler={showModal} hideHandler={hideModal} />
