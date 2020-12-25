/** @format */

import styled, {keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

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
	background: #fff;
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
	background: #fff;
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

export default function Day() {
	return (
		<Layout titleFragment="Day 23 - Animated Typography">
			<Frame>
				<Circle />
				<LeftLine />
				<RightLine />
			</Frame>
		</Layout>
	)
}
