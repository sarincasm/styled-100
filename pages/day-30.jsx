/** @format */

import styled, {keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import Center from '../components/Center'

const BG_COLOR = '#16A085'
const MyFrame = styled(Frame)`
	background: ${BG_COLOR};
`

const RippleAnimation = keyframes`
	0%,50% {
		opacity: 1;
		transform: translate(-50%,-50%) scale(0)
	}
	70%, 100% {
		opacity: 0;
		transform: translate(-50%,-50%) scale(0.8)
	}
`
const Ripple = styled.div`
	position: absolute;
	width: 30px;
	height: 30px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	border: 4px solid #fff;
	animation: ${RippleAnimation} 2.5s ease-out infinite both;
`

const RibbonAnimation = keyframes`
	from {
		stroke-dasharray: 50 660;
		stroke-dashoffset: 780;
	}
	to {
		stroke-dasharray: 50 660;
		stroke-dashoffset: 70;
	}
`
const Ribbon = styled.svg`
	fill: none;
	stroke: #fff;
	stroke-width: 3px;
	stroke-linecap: round;
	animation: ${RibbonAnimation} 2.5s linear infinite;
`

export default function Day() {
	return (
		<Layout titleFragment="Day 30 - Windy">
			<MyFrame>
				<Ripple />
				<Center>
					<Ribbon width="400px" height="65px" viewBox="0 0 400 65">
						<path d="M0,4.67941475 C0,4.67941475 42.5049504,21.0558251 95.0896109,21.0558243 C147.674271,21.0558235 149.896403,2 196.011077,2 C242.125751,2 242.386923,58.3217419 200.000004,58.3217392 C157.613085,58.3217365 163.18433,13.5133498 212.755329,13.5133498 C262.326328,13.5133498 284.162205,38.9236796 335.140774,38.9236794 C386.119343,38.9236791 399.999996,30.1608696 399.999996,30.1608696"></path>
					</Ribbon>
				</Center>
			</MyFrame>
		</Layout>
	)
}
