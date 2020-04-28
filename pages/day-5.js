/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const Card = styled.div`
	position: absolute;
	transform: translate(-50%, -50%);
	width: 280px;
	height: 220px;
	background: #fff;
	border-radius: 10px;
	box-shadow: 10px 10px 15px 15px rgba(0, 0, 0, 0.1);
	overflow: hidden;
`
const Header = styled.div`
	position: relative;
	height: 60px;
	width: 100%;
	background: orange;
	color: #fff;
	padding-top: 5px;
`
const Title = styled.div`
	position: absolute;
	top: 5px;
	left: 15px;
	color: #000;
	font-weight: 600;
`
const DateDiv = styled.div`
	position: absolute;
	left: 15px;
	bottom: 10px;
	font-size: 0.9em;
`
const Revenue = styled.div`
	position: absolute;
	top: 5px;
	right: 15px;
	font-size: 0.9em;
	color: #000;
`
const Amount = styled.div`
	position: absolute;
	bottom: 10px;
	right: 15px;
	font-weight: 600;
`

const Legend = styled.div`
	padding-top: 12px;
	text-align: right;
`
const LegendSpan = styled.span`
	position: relative;
	font-size: 0.7em;
	color: black;
	line-height: 13px;
	padding: 0 20px 0 25px;
	&::before {
		position: absolute;
		left: 2px;
		top: 9px;
		display: block;
		content: '';
		width: 15px;
		height: 3px;
		border-radius: 5px;
		background: ${(props) => props.legendColor};
	}
`

const Chart = styled.div`
	position: relative;
	height: 81px;
	width: 260px;
	margin: 0 auto;
`
const SVG = styled.svg`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`
const Polyline = styled.polyline`
	fill: none;
	stroke-width: 2;
	stroke-linecap: round;
	stroke: ${(props) => props.color};
`

const Points = styled.div``
const Point = styled.div`
	position: absolute;
	width: 6px;
	height: 6px;
	border-radius: 3px;
	cursor: pointer;
	left: ${(props) => props.x - 2}px;
	top: ${(props) => props.y - 3}px;
	background: ${(props) => props.color};
`

const Days = styled.div`
	display: flex;
	padding: 0 10px;
`
const Day = styled.div`
	display: block;
	flex: 1 1 0px;
	font-size: 9px;
	color: rgba(0, 0, 0, 0.7);
	line-height: 30px;
	text-transform: uppercase;
	text-align: center;
`

export default function Day5() {
	function getDate() {
		const now = new Date()
		return (
			now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
		)
	}
	function getCoordinates(Ymin) {
		const X1 = 10
		const Ymax = 70
		const coordinates = []
		for (let i = 0; i < 7; i++) {
			coordinates.push({
				x: X1 + i * 40,
				y: parseInt(Math.random() * (Ymax - Ymin)) + Ymin,
			})
		}
		const polylinePoints = coordinates.reduce((previousValue, coordinate) => {
			return `${previousValue} ${coordinate.x},${coordinate.y}`
		}, '')
		return {
			coordinates,
			polylinePoints,
		}
	}

	function renderChart({color, Ymin}) {
		const {coordinates, polylinePoints} = getCoordinates(Ymin)
		return (
			<>
				<SVG>
					<Polyline points={polylinePoints} color={color} />
				</SVG>
				<Points>
					{coordinates.map((coordinate) => {
						return (
							<Point
								key={coordinate.x}
								x={coordinate.x}
								y={coordinate.y}
								color={color}
							></Point>
						)
					})}
				</Points>
			</>
		)
	}

	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

	return (
		<Frame>
			<Center>
				<Card>
					<Header>
						<Title>Weekly Report</Title>
						<DateDiv>{getDate()}</DateDiv>
						<Revenue>Revenue</Revenue>
						<Amount>
							Rs. {parseFloat(Math.random() * 10000).toFixed(2)}
						</Amount>
					</Header>
					<Legend>
						<LegendSpan legendColor="red">Views</LegendSpan>
						<LegendSpan legendColor="blue">Purchases</LegendSpan>
					</Legend>
					<Chart>
						{renderChart({
							color: 'red',
							Ymin: 20,
						})}
						{renderChart({
							color: 'blue',
							Ymin: 35,
						})}
					</Chart>
					<Days>
						{days.map((day) => (
							<Day key={day}>{day}</Day>
						))}
					</Days>
				</Card>
			</Center>
		</Frame>
	)
}
