/** @format */

import styled, {keyframes, css} from 'styled-components'
import {CSSTransition, SwitchTransition} from 'react-transition-group'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import {useState} from 'react'

const BG_COLOR = '#DD3C54'
const MyFrame = styled(Frame)`
	background: ${BG_COLOR};
`
const MinusColor = '#E26E6E'
const PlusColor = '#8ED273'
const TextColor = '#6A85A0'

const Counter = styled.div`
	position: absolute;
	height: 10%;
	width: 35%;
	top: 45%;
	left: 32.5%;
	background: #fff;
	border-radius: 20px;
	box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
`
const PlusMinusContainer = styled.div`
	position: absolute;
	z-index: 10;
	width: 25%;
	height: 80%;
	top: 10%;
`

const MinusContainer = styled(PlusMinusContainer)`
	left: 5%;
	cursor: pointer;
	border-radius: 50%;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${MinusColor};
	}
`
const Minus = styled.div`
	position: absolute;
	height: 2px;
	width: 50%;
	left: 25%;
	top: 48%;
	background: ${MinusColor};
	transition: all 0.3s ease-in-out;
	${MinusContainer}:hover & {
		background: #fff;
	}
`

const PlusContainer = styled(PlusMinusContainer)`
	right: 5%;
	cursor: pointer;
	border-radius: 50%;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${PlusColor};
	}
`
const PlusH = styled.div`
	position: absolute;
	height: 2px;
	width: 50%;
	left: 25%;
	top: 48%;
	background: ${PlusColor};
	transition: all 0.3s ease-in-out;
	${PlusContainer}:hover & {
		background: #fff;
	}
`
const PlusV = styled.div`
	position: absolute;
	height: 50%;
	width: 2px;
	left: 48%;
	top: 25%;
	background: ${PlusColor};
	transition: all 0.3s ease-in-out;
	${PlusContainer}:hover & {
		background: #fff;
	}
`

const CountContainer = styled.div`
	position: relative;
	width: 100%;
	height: 10%;
	font-weight: 600;
	font-size: 20px;

	line-height: 40px;
	text-align: center;
`

const DownAnimation = keyframes`
	from {
		transform: scale(0.6);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
`
const UpAnimation = keyframes`
	from {
		transform: scale(1.4);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
`
const Count = styled.span`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transform-origin: 50% 50%;
	color: ${TextColor};

	&.animate-counter-enter,
	&.animate-counter-exit {
		color: ${({direction}) => {
			switch (direction) {
				case 'up':
					return PlusColor
				case 'down':
					return MinusColor
				default:
					return TextColor
			}
		}};
	}

	&.animate-counter-enter-done {
		animation: ${({direction}) => {
			if (!direction) return ''
			let animation
			if (direction === 'up') animation = UpAnimation
			else if (direction === 'down') animation = DownAnimation
			return css`
				${animation} 0.3s ease-out 0s backwards
			`
		}};
	}
`

export default function Day() {
	const [count, setCount] = useState(0)
	const [direction, setDirection] = useState('')
	return (
		<Layout titleFragment="Day 32 - Counter">
			<MyFrame>
				<Counter>
					<MinusContainer
						onClick={() => {
							setDirection('down')
							setCount(count - 1)
						}}
					>
						<Minus />
					</MinusContainer>
					<CountContainer>
						<SwitchTransition>
							<CSSTransition
								key={count}
								classNames="animate-counter"
								timeout={0}
							>
								<Count direction={direction}>{count}</Count>
							</CSSTransition>
						</SwitchTransition>
					</CountContainer>
					<PlusContainer
						onClick={() => {
							setDirection('up')
							setCount(count + 1)
						}}
					>
						<PlusH />
						<PlusV />
					</PlusContainer>
				</Counter>
			</MyFrame>
		</Layout>
	)
}
