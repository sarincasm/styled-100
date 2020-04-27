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

export default function Day() {
	function getDate() {
		const now = new Date()
		return (
			now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
		)
	}
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
				</Card>
			</Center>
		</Frame>
	)
}
