// dependencies
import { useState, useRef } from 'react';
import $ from 'jquery';
import { Link, Route, Routes } from 'react-router-dom';
import 'tablesorter';
import 'tablesorter/dist/js/extras/jquery.tablesorter.pager.min.js';
import 'tablesorter/dist/css/theme.ice.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import { Container, Content, Header, Footer, Navbar, Breadcrumb } from './layout/index';
import { Carousel, Image, Modal, Tooltip, Table } from './utilities/index';
import GlobalStyles from './styles/GlobalStyles';

// routes
import Home from './routes/Home';
import Login from './routes/Login';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header title="ITS" />
			<Navbar />
			<Container>
				<Breadcrumb items={['one']} />
				<Content>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</Content>
			</Container>
			<Footer />
		</>
	);
}

export default App;
