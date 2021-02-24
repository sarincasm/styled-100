/** @format */

import styled from 'styled-components'

export const FrameColor = '#333'
const Frame = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 25px;
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.3);
	overflow: hidden;
	background: ${({background}) => background || FrameColor};
	color: #fff;
`

export default Frame
