/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'

const transition = 'all .3s ease-in-out;'
const colors = ['#D9FF7D', '#E8E672']
const textColors = ['#9E8AFF', '#513DB3']

const Button = styled.div`
	position: absolute;
	top: 160px;
	left: 100px;
	width: 200px;
	height: 80px;
	text-align: center;
	z-index: 2;

	color: ${textColors[0]};
	font-size: 25px;
	font-weight: 400;
	line-height: 68px;
	letter-spacing: 1px;
	text-transform: uppercase;

	cursor: pointer;

	transition: ${transition};

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		content: '';
		display: block;
		width: 200px;
		height: 80px;
		background: ${colors[0]};
		transform: translate(0, 0);
		box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);

		transition: ${transition};
	}

	&::after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
		content: '';
		display: block;
		width: 200px;
		height: 80px;
		background: ${colors[1]};
		transform: translate(13px, 12px);

		transition: ${transition};
	}

	&:hover {
		transform: translate(13px, 12px);
		color: ${textColors[1]};

		&::before {
			background: ${colors[1]};
		}
		&::after {
			background: ${colors[0]};
			transform: translate(-15px, -10px);
		}
	}
`

export default function Day1() {
	return (
		<Frame>
			<Button>Click Me</Button>
		</Frame>
	)
}
