import { useEffect } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import BSModal from 'react-bootstrap/Modal';
import BSTooltip from 'react-bootstrap/Tooltip';
import BSBreadcrumb from 'react-bootstrap/Breadcrumb';
import BSCarousel from 'react-bootstrap/Carousel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import photo from './assets/landscape.webp';
import { FaHome, FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

///////////////////////////////////////////////
const Button = styled.button`
	width: fit-content;
	height: 10vh;
	margin: 10px;
	background-color: lightgrey;
	border-radius: 1em;
	&:hover {
		transform: scale(1.05);
		filter: brightness(0.95);
	}
`;
///////////////////////////////////////////////
const BreadcrumbComp = ({ className, items }) => {
	switch (items.length) {
		case 1:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{items[0]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		case 2:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../">{items[0]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{items[1]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		case 3:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../../">{items[0]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item href="../">{items[1]}</BSBreadcrumb.Item>
					<BSBreadcrumb.Item active>{items[2]}</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
		default:
			return (
				<BSBreadcrumb className={className}>
					<BSBreadcrumb.Item href="/">
						<FaHome size={20} />
					</BSBreadcrumb.Item>
				</BSBreadcrumb>
			);
	}
};

const Breadcrumb = styled(BreadcrumbComp)`
	background: yellow;
	color: antiquewhite;
`;
///////////////////////////////////////////////
const CarouselComp = ({ className }) => {
	return (
		<BSCarousel className={className}>
			<BSCarousel.Item>
				<img className="d-block w-100" src={photo} alt="First slide" />
				<BSCarousel.Caption>
					<h3>STEP 1</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</BSCarousel.Caption>
			</BSCarousel.Item>
			<BSCarousel.Item>
				<img className="d-block w-100" src={photo} alt="Second slide" />

				<BSCarousel.Caption>
					<h3>STEP 2</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</BSCarousel.Caption>
			</BSCarousel.Item>
			<BSCarousel.Item>
				<img className="d-block w-100" src={photo} alt="Third slide" />

				<BSCarousel.Caption>
					<h3>STEP 3</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</BSCarousel.Caption>
			</BSCarousel.Item>
		</BSCarousel>
	);
};

const Carousel = styled(CarouselComp)`
	width: 50vw;

	.carousel-inner {
		border-radius: 2em;
	}

	.carousel-caption {
		background: white;
		color: #000;
		width: 100%;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

/*
activeIndex (number)
controlled by: onSelect, initial prop: defaultActiveIndex
Controls the current visible slide

as (elementType)
You can use a custom element type for this component.

controls (boolean)
true	
Show the Carousel previous and next arrows for changing the current slide

fade (boolean)
false	
Animates slides with a crossfade animation instead of the default slide animation

indicatorLabels (array<>)
[]	
An array of labels for the indicators. Defaults to "Slide #" if not provided.

indicators (boolean)
true	
Show a set of slide position indicators

interval (number | null)
5000	
The amount of time to delay between automatically cycling an item. If null, carousel will not automatically cycle.

keyboard (boolean)
true	
Whether the carousel should react to keyboard events.

nextIcon (node)
<span aria-hidden="true" className="carousel-control-next-icon" />	
Override the default button icon for the "next" control

nextLabel (string)
'Next'	
Label shown to screen readers only, can be used to show the next element in the carousel. Set to null to deactivate.

onSelect (function)
controls activeIndex
Callback fired when the active item changes.
(eventKey: number, event: Object | null) => void

onSlid (function)
Callback fired when a slide transition ends.
(eventKey: number, direction: 'left' | 'right') => void 

onSlide (function)
Callback fired when a slide transition starts.
(eventKey: number, direction: 'left' | 'right') => void (
    
pause	
'hover' | false
'hover'	
If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it.

On touch-enabled devices, when set to "hover", cycling will pause on touchend (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.

prevIcon (node)
<span aria-hidden="true" className="carousel-control-prev-icon" />	
Override the default button icon for the "previous" control

prevLabel (string)
'Previous'	
Label shown to screen readers only, can be used to show the previous element in the carousel. Set to null to deactivate.

slide (boolean)
true	
Enables animation on the Carousel as it transitions between slides.

touch (boolean)
true	
Whether the carousel should support left/right swipe interactions on touchscreen devices.

variant	
'dark'
Color variant that controls the colors of the controls, indicators and captions.

wrap (boolean)
true	
Whether the carousel should cycle continuously or have hard stops.

bsPrefix (string)
'carousel'	
Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.
*/
//////////////////////////////////////////////
const Image = ({ src }) => <img src={src} />;

// const Image = styled(ImageComp);
//////////////////////////////////////////////

const Tooltip = styled(OverlayTrigger)``;

// render function (placed in parent element):
// const renderTooltip = (content) => <BSTooltip id="button-tooltip">{content}</BSTooltip>;
///////////////////////////////////////////////
const ModalComp = ({ className, title, description, showHandler, hideHandler }) => {
	return (
		// show and hide functions are passed to parent element as props
		<BSModal className={className} show={showHandler} onHide={hideHandler} centered>
			<BSModal.Header closeButton>
				<BSModal.Title>{title}</BSModal.Title>
			</BSModal.Header>
			<BSModal.Body>{description}</BSModal.Body>
		</BSModal>
	);
};

const Modal = styled(ModalComp)``;

/* 
// modal state (place into parent component if state needed)
-----------------------------------------------
const [modal, setModal] = useState({
	title: '',
	description: '',
});

// modal handlers (place into parent component)
-----------------------------------------------
const [showModal, setShowModal] = useState(false);
const hideModal = () => setShowModal(false);
const handleShowModal = (title, description, image) => {
	setModal({ title: title, description: description, image: image }); // (if using state)
	setShowModal(true);
};

// example parent
-----------------------------------------------
<Modal 
	title="This is a modal!" 
	description="This is a description!"
	showHandler={showModal} 
	hideHandler={hideModal} 
/> 
*/ ///////////////////////////////////////////////

//////////////////////////////////////////////////
const TableComp = ({ className, tablesorter }) => {
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
	let classes = { className };
	if (tablesorter) {
		classes += 'tablesorter';
	}

	return (
		<table id="myTable" class={classes} style={{ width: '50%' }}>
			<thead>
				<tr>
					<th>1</th>
					<th className="filter-select">2</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
				<tr>
					<td>xxx</td>
					<td>xxx</td>
				</tr>
			</tbody>
			<tfooter id="pager" className="pager">
				<form>
					<FaAngleDoubleLeft size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="first" alt="button" />
					<FaAngleLeft size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="prev" alt="button" />
					<input type="text" className="pagedisplay" alt="button" />
					<FaAngleRight size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="next" alt="button" />
					<FaAngleDoubleRight size={30} style={{ color: '#000', margin: '.25rem .5rem' }} className="last" alt="button" />
					<select className="pagesize">
						<option selected="selected" value="10">
							10
						</option>
						<option value="20">20</option>
						<option value="30">30</option>
					</select>
				</form>
			</tfooter>
		</table>
	);
};

const Table = styled(TableComp)``;

/* function for initializing tablesorter at set-up
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
*/

export { Button, Breadcrumb, Carousel, Image, Tooltip, Modal, Table };
