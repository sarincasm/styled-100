/** @format */

import styled, {keyframes, css} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import {useState} from 'react'
import {Checkmark} from 'grommet-icons'

const ButtonAnimation = keyframes`
	0% {
		width: 60%;
		left: 20%;
		color: #fff;
		border-color: #fff;
	}
	100% {
		width: 15%;
		left: 42.5%;
		color: transparent;
		border-color: #000;
	}
`
const ButtonFillAnimation = keyframes`
	from {
		background: transparent;
	}
	to {
		background: #fff;
	}
`
const Button = styled.div`
	box-sizing: border-box;
	position: absolute;
	display: block;
	width: 60%;
	height: 15%;
	left: 20%;
	top: 42.5%;
	border: 2px solid #fff;
	border-radius: 30px;
	text-align: center;
	line-height: 200%;
	font-size: 1.25em;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 2px;
	transition: all 0.3s ease-in-out;
	cursor: pointer;

	animation: ${({activeState}) =>
		activeState
			? css`
					${ButtonAnimation} .5s ease both, ${ButtonFillAnimation} .5s ease-out 1.5s forwards
			  `
			: 'none'};

	&:hover {
		background: #000;
	}
`

const CircleAnimation = keyframes`
	0% {
		stroke-dashoffset: 183;
	}
	50% {
		stroke-dashoffset: 0;
		stroke-dasharray: 183;
		transform: rotate(-90deg) scale(1);
		opacity: 1;
	}
	90%, 100% {
		stroke-dasharray: 500 500;
		transform: rotate(-90deg) scale(2);
		opacity: 0;
	}
`
const Circle = styled.svg`
	position: absolute;
	width: 15%;
	height: 15%;
	left: 42.5%;
	top: 42.5%;
	z-index: 10;
	fill: none;
	stroke: #fff;
	stroke-width: 2px;
	stroke-linecap: round;
	stroke-dasharray: 183 183;
	stroke-dashoffset: 183;
	pointer-events: none;
	transform: rotate(-90deg);
	animation: ${({activeState}) =>
		activeState
			? css`
					${CircleAnimation} 2s ease-out .5s both
			  `
			: 'none'};
`

const IconAnimation = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`
const Icon = styled(Checkmark)`
	position: absolute;
	display: block;
	width: 60%;
	height: 10%;
	left: 20%;
	top: 45%;
	opacity: 0;
	pointer-events: none;
	animation: ${({activeState}) =>
		activeState
			? css`
					${IconAnimation} .5s 1.5s ease both
			  `
			: 'none'};
`

export default function Day() {
	const [active, setActive] = useState(false)
	return (
		<Layout titleFragment="Day 24 - Finish Button">
			<Frame>
				<Button
					onClick={() => {
						setActive(!active)
					}}
					activeState={active}
				>
					Finish
				</Button>
				<Icon color="black" activeState={active} />
				<Circle activeState={active}>
					<circle cx="30" cy="30" r="29" />
				</Circle>
			</Frame>
		</Layout>
	)
}
