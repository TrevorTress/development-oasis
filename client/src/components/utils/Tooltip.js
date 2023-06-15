import { useState } from 'react';
import styled from 'styled-components';

const TooltipComp = ({ className, text, children, direction }) => {
	const [show, setShow] = useState(0);
	const showState = { opacity: show };

	return (
		<div className={className} onMouseEnter={() => setShow(1)} onMouseLeave={() => setShow(0)}>
			{children}
			<div className={`tool-tip ${direction || 'top'}`} style={showState}>
				{text}
			</div>
		</div>
	);
};

const Tooltip = styled(TooltipComp)`
	width: fit-content;
	position: relative;

	.tool-tip {
		opacity: ${(props) => (props.show ? 1 : 0)};
		position: absolute;
		border-radius: 4px;
		left: 50%;
		transform: translateX(-50%);
		padding: 6px;
		color: var(--tooltip-text-color);
		background: var(--tooltip-background-color);
		font-size: 14px;
		font-family: sans-serif;
		line-height: 1;
		z-index: 100;
		white-space: nowrap;
		transition: opacity 0.3s ease-in-out;
	}

	/* CSS border triangles */
	.tool-tip::before {
		content: ' ';
		left: 50%;
		border: solid transparent;
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
		border-width: var(--tooltip-arrow-size);
		margin-left: calc(var(--tooltip-arrow-size) * -1);
	}

	/* Absolute positioning */
	.tool-tip.top {
		top: calc(var(--tooltip-margin) * -1);
	}
	/* CSS border triangles */
	.tool-tip.top::before {
		top: 100%;
		border-top-color: var(--tooltip-background-color);
	}

	/* Absolute positioning */
	.tool-tip.right {
		left: calc(100% + var(--tooltip-margin));
		top: 50%;
		transform: translateX(0) translateY(-50%);
	}
	/* CSS border triangles */
	.tool-tip.right::before {
		left: calc(var(--tooltip-arrow-size) * -1);
		top: 50%;
		transform: translateX(0) translateY(-50%);
		border-right-color: var(--tooltip-background-color);
	}

	/* Absolute positioning */
	.tool-tip.bottom {
		bottom: calc(var(--tooltip-margin) * -1);
	}
	/* CSS border triangles */
	.tool-tip.bottom::before {
		bottom: 100%;
		border-bottom-color: var(--tooltip-background-color);
	}

	/* Absolute positioning */
	.tool-tip.left {
		left: auto;
		right: calc(100% + var(--tooltip-margin));
		top: 50%;
		transform: translateX(0) translateY(-50%);
	}
	/* CSS border triangles */
	.tooltip.left::before {
		left: auto;
		right: calc(var(--tooltip-arrow-size) * -2);
		top: 50%;
		transform: translateX(0) translateY(-50%);
		border-left-color: var(--tooltip-background-color);
	}
`;

export default Tooltip;
