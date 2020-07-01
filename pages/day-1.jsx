/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const color1 = '#00CC03'
const color2 = 'black'
const GradientFrame = styled(Frame)`
	background: ${color1};
	background: linear-gradient(
		to top right,
		${color1} 25%,
		${color2} 85%,
		${color1} 98%
	);
`

const Number = styled.div`
	height: 100px;
	width: 200px;
`
const One = styled.div`
	position: absolute;
	left: 12px;
	top: 2px;
	height: 98px;
	width: 24px;
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2);
`
const Zero = styled.div`
	position: absolute;
	left: 30px;
	height: 100px;
	width: 100px;
	border-radius: 50%;
	box-sizing: border-box;
	border: 25px solid ${color2};
	box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2);
`
const SecondZero = styled(Zero)`
	left: 100px;
	border: 25px solid #fff;
`

const BigText = styled.div`
	font-size: 82px;
	line-height: 60px;
	text-transform: uppercase;
	font-weight: 700;
	margin: 6px 0 9px 0;
	text-align: center;
`
const SmallText = styled.div`
	font-size: 23px;
	line-height: 22px;
	text-transform: uppercase;
	font-weight: 700;
	text-align: center;
`

export default function Day1() {
	return (
		<GradientFrame>
			<Center>
				<Number>
					<One />
					<Zero />
					<SecondZero />
				</Number>
				<BigText>Days</BigText>
				<SmallText>CSS Challenge</SmallText>
			</Center>
		</GradientFrame>
	)
}
