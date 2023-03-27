import BSCarousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import photo from './assets/landscape.webp';

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

export default Carousel;

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
