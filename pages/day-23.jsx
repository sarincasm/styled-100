/** @format */

import styled, {keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

const FrameColor = '#E16D6C'
const FillColor = '#FFFFFF'
const ColoredFrame = styled(Frame)`
	background: ${FrameColor};
	color: ${FillColor};
`

const CircleAnimation = keyframes`
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	85%, 100% {
		transform: scale(0);
	}
`
const Circle = styled.div`
	position: absolute;
	height: 50px;
	width: 50px;
	top: 175px;
	left: 175px;
	z-index: 10;
	background: ${FillColor};
	border-radius: 50%;
	animation: ${CircleAnimation} 1s ease-in-out;
	animation-fill-mode: forwards;
`

const LineAnimation = keyframes`
	0% {
		transform: scaleX(0);
	}
	50% {
		transform: scaleX(1);
	}
	100% {
		transform: scaleX(0);
	}
`
const Line = styled.div`
	position: absolute;
	width: 151px;
	height: 4px;
	top: 198px;
	z-index: 10;
	background: ${FillColor};
	transform: scaleX(0);
`
const LeftLineAnimation = keyframes`
	0% {
		transform-origin: 100% 50%;
	}
	50%, 100% {
		transform-origin: 0% 50%;
	}
`
const LeftLine = styled(Line)`
	left: 50px;
	transform-origin: 100% 50%;
	animation: ${LineAnimation} 1.2s ease-in-out 0.8s,
		${LeftLineAnimation} 1.2s steps(1) 0.8s;
`
const RightLineAnimation = keyframes`
	0% {
		transform-origin: 0% 50%;
	}
	50%, 100% {
		transform-origin: 100% 50%;
	}
`
const RightLine = styled(Line)`
	right: 50px;
	transform-origin: 0% 50%;
	animation: ${LineAnimation} 1.2s ease-in-out 0.8s,
		${RightLineAnimation} 1.2s steps(1) 0.8s;
`

const BracketAnimation = keyframes`
	from {
		transform: scaleY(0);
	}
	to {
		transform: scaleY(1);
	}
`
const BracketLineAnimation = keyframes`
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
`
const Bracket = styled.div`
	position: absolute;
	z-index: 10;
	height: 70px;
	width: 4px;
	top: 165px;
	z-index: 10;
	background: ${FillColor};
	animation: ${BracketAnimation} 0.6s ease-out 1.5s;
	animation-fill-mode: both;

	&:before,
	&:after {
		position: absolute;
		display: block;
		content: '';
		width: 25px;
		height: 4px;
		background: #fff;
	}
`
const LeftBracket = styled(Bracket)`
	left: 50px;
	&:before {
		top: 0;
		left: 0;
		transform-origin: 0% 50%;
		animation: ${BracketLineAnimation} 0.2s ease-out 2.1s;
		animation-fill-mode: both;
	}
	&:after {
		bottom: 0;
		left: 0;
		transform-origin: 0% 50%;
		animation: ${BracketLineAnimation} 0.2s ease-out 2.1s;
		animation-fill-mode: both;
	}
`
const RightBracket = styled(Bracket)`
	right: 50px;
	&:before {
		top: 0;
		right: 0;
		transform-origin: 100% 50%;
		animation: ${BracketLineAnimation} 0.2s ease-out 2.1s;
		animation-fill-mode: both;
	}

	&:after {
		bottom: 0;
		right: 0;
		transform-origin: 100% 50%;
		animation: ${BracketLineAnimation} 0.2s ease-out 2.1s;
		animation-fill-mode: both;
	}
`

const SmallText = styled.div`
	position: absolute;
	z-index: 10;
	width: 400px;
	text-align: center;
	left: 0;
	font-weight: 300;
	font-size: 30px;
	line-height: 30px;
	text-transform: uppercase;
`
const SmallTopAnimation = keyframes`
	from {
		transform: translateX(-20px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
`
const SmallTop = styled(SmallText)`
	top: 140px;
	animation: ${SmallTopAnimation} 0.5s ease-out 2.2s;
	animation-fill-mode: both;
`
const SmallBottomAnimation = keyframes`
	from {
		transform: translateX(20px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
`
const SmallBottom = styled(SmallText)`
	bottom: 140px;
	animation: ${SmallBottomAnimation} 0.5s ease-out 2.2s;
	animation-fill-mode: both;
`

const BigText = styled.div`
	position: absolute;
	z-index: 5;
	top: 173px;
	width: 400px;
	text-align: center;
	font-weight: 800;
	font-size: 50px;
	line-height: 50px;
	text-transform: uppercase;
`

const RevealAnimation = keyframes`
	from {
		transform: scaleY(1);
	}
	to {
		transform: scaleY(0);
	}
`
const Reveal = styled.div`
	position: absolute;
	z-index: 7;
	width: 400px;
	height: 50px;
	background: ${FrameColor};
	left: 0;
	animation: ${RevealAnimation} 0.4s ease-out 1.9s;
	animation-fill-mode: both;
`
const RevealTop = styled(Reveal)`
	bottom: 49%;
	transform-origin: 50% 0%;
`
const RevealBottom = styled(Reveal)`
	top: 49%;
	transform-origin: 50% 100%;
`

export default function Day() {
	return (
		<Layout titleFragment="Day 23 - Animated Typography">
			<ColoredFrame>
				<Circle />
				<LeftLine />
				<RightLine />
				<LeftBracket />
				<RightBracket />
				<SmallTop>Collect</SmallTop>
				<BigText>Moments</BigText>
				<SmallBottom>Not Things</SmallBottom>
				<RevealTop />
				<RevealBottom />
			</ColoredFrame>
		</Layout>
	)
}
