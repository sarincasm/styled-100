/** @format */

import styled, {keyframes} from 'styled-components'
import moment from 'moment'
import {Aed} from 'grommet-icons'

import Frame from '../components/Frame'

const BaseBackground = '#401A1D'
const BaseBorder = '#CC545C'
const Base = styled.div`
	position: absolute;
	width: 220px;
	height: 220px;
	top: 85px;
	left: 85px;
	background: ${BaseBackground};
	border: 7px solid ${BaseBorder};
	border-radius: 50%;
	text-align: center;
`

const DateDiv = styled.div`
	position: absolute;
	top: 70px;
	width: 100%;
	text-transform: uppercase;
	font-size: 0.85em;
`
const TimeDiv = styled.div`
	position: absolute;
	top: 85px;
	width: 100%;
	font-weight: 700;
	font-size: 40px;
	line-height: 100%;
	margin: 8px 0;
`

const PointSet = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	transform-origin: center center;
	transform: scale(0.9);
`
const Point = styled.div`
	position: absolute;
	width: 4px;
	height: 4px;
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
	background: #fff;
	border-radius: 50%;
`

const CircleColor = '#803439'
const Spinner = styled.svg`
	position: absolute;
	width: 220px;
	height: 220px;
	border-radius: 50%;
	top: 0;
	left: 0;
`
const CircleAnimation = keyframes`
	from {
		stroke-dashoffset: 660;
		transform: rotate(-90deg);
	}
	50% {
		stroke-dashoffset: 0;
		transform: rotate(-90deg);
	}
	50.001% {
		stroke-dashoffset: 0;
		transform: rotate(-90deg) scaleY(-1);
	}
	to {
		stroke-dashoffset: 660;
		transform: rotate(-90deg) scaleY(-1);
	}
`
const Circle = styled.circle`
	stroke: ${CircleColor};
	stroke-width: 2;
	fill: none;
	stroke-dasharray: 660;
	animation: ${CircleAnimation} 5s linear infinite;
	transform-origin: center center;
	transform: rotate(-90deg);
`

const BeatAnimation = keyframes`
  from {
		transform: translateX(-50%) scale(.75);
	}
	to {
		transform: translateX(-53%) scale(.85);
	}
`
const Beat = styled.div`
	position: absolute;
	top: 135px;
	left: 50%;
	transform: translate(-50%, 0);
	animation: ${BeatAnimation} 2s ease-in-out infinite alternate both;

	span {
		position: relative;
		top: -5px;
		padding-left: 5px;
	}
`

export default function Day() {
	function renderPoints() {
		const points = [
			{top: 0, left: '108px'},
			{top: '108px', left: 'auto', right: 0},
			{top: 'auto', left: '108px', bottom: 0},
			{top: '108px', left: 0},
		]
		return points.map((positionProps, index) => {
			return <Point key={index} {...positionProps} />
		})
	}
	return (
		<Frame>
			<Base>
				<PointSet>{renderPoints()}</PointSet>
				<Spinner viewbox="0 0 220 220">
					<Circle cx="110" cy="110" r="105" />
				</Spinner>
				<DateDiv>{moment().format('ddd DD MMM YYYY')}</DateDiv>
				<TimeDiv>{moment().format('hh:mm')}</TimeDiv>
				<Beat>
					<Aed color={'red'} />
					<span>45</span>
				</Beat>
			</Base>
		</Frame>
	)
}
