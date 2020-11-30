/** @format */

import styled, {css, keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

import {useState} from 'react'

const CircleColor = '#4052DE'
const CircleAnimation = keyframes`
	0% {
		transform: translate(-50%, -65%) scale(1);
	}
	20% {
		transform: translate(-50%, -65%) scale(1.1);
	}
	100% {
		transform: translate(-50%, -65%) scale(0);
	}
`
const Circle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -65%);
	width: 50%;
	height: 200px;
	background: ${CircleColor};
	border-radius: 50%;
	animation: ${({animationState}) =>
		animationState
			? css`
					${CircleAnimation} 1.5s ease-in-out
			  `
			: 'initial'};
	animation-fill-mode: both;
`

const OuterCircle = styled(Circle)`
	box-sizing: border-box;
	background: none;
	border: 4px solid ${CircleColor};
	animation: ${({animationState}) =>
		animationState
			? css`
					${CircleAnimation} 1.2s ease-in-out .3s
			  `
			: 'initial'};
	animation-fill-mode: both;
`

const IconContainer = styled.svg`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-60px, -68px);
	z-index: 2;

	fill: none;
	stroke-width: 2px;
	stroke: white;
	stroke-linecap: square;
	stroke-dasharray: 325;
`
const MailAnimation = keyframes`
	from {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: 325;
	}
`
const MailIconContainer = styled(IconContainer)`
	animation: ${({animationState}) =>
		animationState
			? css`
					${MailAnimation} 1.2s ease-in-out .3s
			  `
			: 'initial'};
	animation-fill-mode: forwards;
`
const SentAnimation = keyframes`
	0% {
		stroke-dashoffset: 325;
	}
	40% {
		stroke-dashoffset: 0;
	}
	55% {
		transform: translate(-60px, -68px) scale(1);
		stroke-dashoffset: 0;
	}
	65% {
		transform: translate(-70px, -60px) scale(1.05);
		stroke-dashoffset: 0;
	}
	70% {
		opacity: 1;
		stroke-dashoffset: 0;
	}
	85% {
		opacity: 0;
		stroke-dashoffset: 0;
	}
	100% {
		transform: translate(240px, -400px) scale(0.4);
		opacity: 0;
	}
`
const SentIconContainer = styled(IconContainer)`
	stroke-dashoffset: 325;
	animation: ${({animationState}) =>
		animationState
			? css`
					${SentAnimation} 3s ease-in-out 1.4s
			  `
			: 'initial'};
	animation-fill-mode: both;
`

const ButtonColor = '#DEC262'
const ButtonComplimentaryColor = 'black'
const ButtonAnimation = keyframes`
	10% {
		background: ${ButtonComplimentaryColor};
		color: transparent;
	}
	30%, 45% {
		width: 10%;
		color: transparent;
	}
	55% {
		width: 10%;
		color: transparent;
		transform: scale(1) translate(-50%);
	}
	58% {
		width: 10%;
		color: transparent;
		transform: scale(.5) translate(-50%);
	}
	59% {
		width: 10%;
		opacity: 0;
		color: transparent;
		transform: scale(0) translate(-50%);
	}
	100% {
		color: transparent;
		opacity: 1;
	}
`
const Button = styled.div`
	position: absolute;
	bottom: 15%;
	left: 50%;
	transform: translate(-50%);
	width: 60%;
	background: ${ButtonColor};
	color: ${ButtonComplimentaryColor};
	line-height: 40px;
	border-radius: 20px;
	border-width: 0;
	text-transform: uppercase;
	text-align: center;
	font-size: 15px;
	cursor: pointer;

	&:hover {
		background: ${ButtonComplimentaryColor};
		color: ${ButtonColor};
	}
	animation: ${({animationState}) =>
		animationState
			? css`
					${ButtonAnimation} 3.5s ease-in-out 2s
			  `
			: 'initial'};
`

export default function Day() {
	const [status, setStatus] = useState('ready')

	const text = {
		ready: 'Send Email',
		transition: 'Sent',
		done: 'Reset',
	}

	return (
		<Layout titleFragment="Day Number - Component Title">
			<Frame>
				<Circle animationState={status !== 'ready'} />
				<OuterCircle animationState={status !== 'ready'} />
				<MailIconContainer animationState={status !== 'ready'}>
					<polyline points="121,1 121,69 1,69 1,1"></polyline>
					<polyline points="121,1 61,43 1,1 121,1"></polyline>
				</MailIconContainer>
				<SentIconContainer animationState={status !== 'ready'}>
					<polyline points="119,1 1,59 106,80 119,1"></polyline>
					<polyline points="119,1 40,67 43,105 69,73"></polyline>
				</SentIconContainer>
				<Button
					animationState={status === 'transition'}
					onClick={() => {
						if (status === 'ready') setStatus('transition')
						else if (status === 'done') setStatus('ready')
					}}
					onAnimationEnd={() => {
						setStatus('done')
					}}
				>
					{text[status]}
				</Button>
			</Frame>
		</Layout>
	)
}
