/** @format */

import styled from 'styled-components'

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
`

export default function Day() {
	const [status, setStatus] = useState('ready')

	const Icon = status === 'ready' ? Mail : Send
	const text = status === 'ready' ? 'Send Email' : 'Sent'

	return (
		<Layout titleFragment="Day Number - Component Title">
			<Frame>
				<Circle />
				<IconDiv>
					<Icon size="xlarge" color="white" />
				</IconDiv>
				<Button>{text}</Button>
			</Frame>
		</Layout>
	)
}
