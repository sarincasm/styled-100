/** @format */

import styled, {css, keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

import {Mail, Send} from 'grommet-icons'
import {useState} from 'react'

const Circle = styled.div`
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -65%);
	width: 50%;
	height: 200px;
	background: #354a5f;
	border-radius: 50%;
`

const IconDiv = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -75%);
	z-index: 2;
`

const ButtonAnimation = keyframes`
	10% {
		background: #1abc9c;
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
const Button = styled.button`
	position: absolute;
	bottom: 15%;
	left: 50%;
	transform: translate(-50%);
	width: 60%;
	background: #ecf0f1;
	color: #2c3e50;
	line-height: 40px;
	border-radius: 20px;
	border-width: 0;
	text-transform: uppercase;
	font-size: 15px;
	cursor: pointer;

	&:hover {
		background: #1abc9c;
		color: #fff;
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

	const Icon = status === 'ready' ? Mail : Send
	const text = {
		ready: 'Send Email',
		transition: 'Sent',
		done: 'Reset',
	}

	return (
		<Layout titleFragment="Day Number - Component Title">
			<Frame>
				<Circle />
				<IconDiv>
					<Icon size="xlarge" color="white" />
				</IconDiv>
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
