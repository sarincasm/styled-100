/** @format */

import styled, {keyframes} from 'styled-components'

import Frame from '../components/Frame'

const MoonRiseAnimation = keyframes`
from {
		transform: translate(-20px, 200px);
	}
	to {
		transform: translate(0, 0px);
	}
`

const ColorOfMoon = '#f6edbd'
const Moon = styled.div`
	position: absolute;
	width: 70px;
	height: 70px;
	top: 35px;
	left: 55px;
	border-radius: 50px;
	background: ${ColorOfMoon};
	box-shadow: 0 0 10px 0 ${ColorOfMoon};
	animation: ${MoonRiseAnimation} 1s ease-out;
`
const ColorOfMold = '#AB981F'
const Crater = styled.div`
	position: absolute;
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	border-radius: 10px;
	background: ${ColorOfMold};
	opacity: 0.3;
`

const Hill = styled.div`
	position: absolute;
	z-index: 2;
	width: 335px;
	height: 280px;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	background: ${(props) => props.background};
	border-radius: 50%;
`

const Info = styled.div`
	position: absolute;
	z-index: 5;
	width: 400px;
	height: 90px;
	left: 0px;
	bottom: 0px;
	background: #fff;
	color: #394568;
`
const Temperature = styled.div`
	float: left;
	margin-left: 20px;
	font-size: 45px;
	line-height: 90px;
`
const Data = styled.div`
	float: left;
	margin: 25px 0 0 15px;
	font-size: 15px;
	line-height: 20px;
`
const Forecast = styled.div`
	float: right;
	font-weight: 400;
	text-align: right;
	font-size: 15px;
	line-height: 20px;
	margin: 25px 20px 0 0;
	span {
		padding: 5px;
	}
`

export default function Day() {
	function renderHills() {
		const positions = [
			{top: '205px', left: '-57px', background: '#26314f'},
			{top: '185px', left: '175px', background: '#26314f'},
			{top: '250px', left: '-135px', background: '#303c5d'},
			{top: '220px', left: '55px', background: '#303c5d'},
			{top: '250px', left: '290px', background: '#303c5d'},
		]
		return positions.map((position) => (
			<Hill
				key={position.top + position.left}
				top={position.top}
				left={position.left}
				background={position.background}
			/>
		))
	}
	function renderCraters() {
		const positions = [
			{top: '9px', left: '28px'},
			{top: '12px', left: '5px'},
			{top: '54px', left: '10px'},
			{top: '37px', left: '49px'},
			{top: '24px', left: '61px'},
			{top: '55px', left: '33px'},
			{top: '17px', left: '46px'},
			{top: '28px', left: '27px'},
			{top: '25px', left: '15px'},
			{top: '37px', left: '37px'},
		]
		const sizes = ['6px', '4px', '11px']
		return positions.map((position, index) => (
			<Crater
				key={position.top + position.left}
				top={position.top}
				left={position.left}
				size={sizes[index % 3]}
			/>
		))
	}
	return (
		<Frame>
			<Moon>{renderCraters()}</Moon>
			{renderHills()}
			<Info>
				<Temperature>12°</Temperature>
				<Data>
					Wind: E 7 km/h
					<br />
					Humidity: 87 %
				</Data>
				<Forecast>
					<span>TUE</span>
					<span>21° / 9°</span>
					<br />
					<span>WED</span>
					<span>23° / 10°</span>
				</Forecast>
			</Info>
		</Frame>
	)
}
