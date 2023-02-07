import { useState } from 'react';
import styled from 'styled-components';
import BSTooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// render function (placed in parent element):
// const renderTooltip = (content) => <BSTooltip id="button-tooltip">{content}</BSTooltip>;

const Tooltip = styled(OverlayTrigger)``;

export default Tooltip;
