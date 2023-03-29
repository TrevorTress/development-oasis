// dependencies
import { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import 'tablesorter';
import 'tablesorter/dist/js/extras/jquery.tablesorter.pager.min.js';
import 'tablesorter/dist/css/theme.ice.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import { Container, Content, Header, Footer, Navbar, Breadcrumb, Search } from './layout/index';
import { Carousel, Image, Modal, Tooltip, Table } from './utilities/index';
import GlobalStyles from './styles/GlobalStyles';
import Router from './Router';

function App() {
	useEffect(() => {
		$('#myTable')
			.tablesorter({
				theme: 'ice',
				widgets: ['filter', 'zebra', 'cssStickyHeaders', 'pager'],
				widgetOptions: { cssStickyHeaders_attachTo: '.table-container', uitheme: 'jui' },
			})
			.tablesorterPager({
				// target the pager markup - see the HTML block below
				container: $('.pager'),

				// output string - default is '{page}/{totalPages}';
				// possible variables:
				// {page}, {totalPages}, {startRow}, {endRow} and {totalRows}
				output: '{page}/{totalPages} ({startRow}-{endRow})',

				// apply disabled classname to the pager arrows when the rows at
				// either extreme is visible - default is true
				updateArrows: true,

				// starting page of the pager (zero based index)
				page: 0,

				// Number of visible rows - default is 10
				size: 10,

				// if true, the table will remain the same height no matter how many
				// records are displayed. The space is made up by an empty
				// table row set to a height to compensate; default is false
				fixedHeight: true,

				// remove rows from the table to speed up the sort of large tables.
				// setting this to false, only hides the non-visible rows; needed
				// if you plan to add/remove rows with the pager enabled.
				removeRows: false,

				// css class names of pager arrows
				// next page arrow
				cssNext: '.next',
				// previous page arrow
				cssPrev: '.prev',
				// go to first page arrow
				cssFirst: '.first',
				// go to last page arrow
				cssLast: '.last',
				// select dropdown to allow choosing a page
				cssGoto: '.gotoPage',
				// location of where the "output" is displayed
				cssPageDisplay: '.pagedisplay',
				// dropdown that sets the "size" option
				cssPageSize: '.pagesize',
				// class added to arrows when at the extremes
				// (i.e. prev/first arrows are "disabled" when on the first page)
				// Note there is no period "." in front of this class name
				cssDisabled: 'disabled',
			});
	});
	return (
		<>
			<GlobalStyles />
			<Router />
		</>
	);
}

export default App;
