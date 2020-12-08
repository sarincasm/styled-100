/** @format */

import styled, {keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

const radius = 50
const duration = '.7s'
const color = '#F4D146'

const MouthAnimation = keyframes`
  0%, 100% {
    stroke-dashoffset: 0;
    transform: rotate(0deg);
  }
  50% {
    stroke-dashoffset: ${(radius * 3.14) / 4};
    transform: rotate(45deg);
  }
`
const Pacman = styled.svg`
	position: absolute;
	width: ${radius * 2}px;
	height: ${radius * 2}px;
	top: ${(400 - radius * 2) / 2}px;
	left: ${(400 - radius * 2) / 2}px;
	fill: none;
	stroke: ${color};
	stroke-width: ${radius}px;
	stroke-linecap: butt;
	stroke-dasharray: ${radius * 3.14};
	animation: ${MouthAnimation} ${duration} ease-in-out infinite;
`

const EyeAnimation = keyframes`
  0%, 100% {
    transform: translate(0,0);
  }
  50% {
    transform: translate(-6px, -3px);
  }
`
const PacmanEye = styled.svg`
	position: absolute;
	width: 12px;
	height: 12px;
	top: 167px;
	left: 204px;
	fill: #2c2e2e;
	animation: ${EyeAnimation} ${duration} ease-in-out infinite;
`

const DotsAnimation = keyframes`
  0% {
    stroke-dashoffset: 14;
  }
  100% {
    stroke-dashoffset: 64;
  }
`
const Dots = styled.svg`
	position: absolute;
	height: 14px;
	width: 240px;
	top: 193px;
	left: 180px;
	stroke: #f4d146;
	stroke-width: 14px;
	stroke-dasharray: 0px 50px;
	stroke-linecap: round;
	animation: ${DotsAnimation} ${duration} linear infinite;
`

export default function Day() {
	return (
		<Layout titleFragment="Day 21 - Pac Man">
			<Frame>
				<Pacman>
					<circle cx="50" cy="50" r="25" />
				</Pacman>
				<PacmanEye>
					<circle cx="6" cy="6" r="6" />
				</PacmanEye>
				<Dots>
					<polyline points="0,7 240,7" />
				</Dots>
			</Frame>
		</Layout>
	)
}
