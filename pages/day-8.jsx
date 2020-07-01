/** @format */

import styled, {keyframes, css} from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const MyFrame = styled(Frame)`
	filter: contrast(15);
`

const Ball = styled.div`
	position: relative;
	width: 90px;
	height: 90px;
	background: #fff;
	border-radius: 50%;
	filter: blur(15px);
`
const Animation = keyframes`
from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`
const Blubb = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	width: 50px;
	height: 50px;
	transform: ${(props) => `rotate(${props.degrees}deg)`};

	&:after {
		position: absolute;
		display: block;
		content: '';
		width: 50px;
		height: 50px;
		background: #fff;
		border-radius: 50%;
		transform-origin: ${(props) =>
			`${40 - props.index * 3}px ${40 - props.index * 3}px`};
		filter: blur(5px);
		animation: ${(props) =>
			css`${Animation} ${4 + props.index / 5}s ease-in-out ${
				props.index / 5
			}s infinite`};
	}
`

const Little = styled.div`
	position: absolute;
	top: 38px;
	left: 38px;
	width: ${(props) => `7+${props.index}px`};
	height: ${(props) => `7+${props.index}px`};
	transform: ${(props) => `rotate(${props.degrees}deg)`};

	&:after {
		position: absolute;
		display: block;
		content: '';
		width: ${(props) => `${7 + props.index}px`};
		height: ${(props) => `${7 + props.index}px`};
		background: #fff;
		border-radius: 50%;
		transform-origin: ${(props) =>
			`${40 - props.index * 2}px ${80 - props.index * 2}px`};
		animation: ${(props) =>
			css`${Animation} ${8 + props.index / 2}s ease-in-out ${
				props.index / 4
			}s infinite`};
		filter: blur(4px);
	}
`

export default function Day() {
	function renderBlubbs() {
		const blubbs = []
		for (let index = 1; index <= 8; index++) {
			blubbs.push(
				<Blubb
					key={index}
					index={index}
					degrees={parseInt(Math.random() * 300)}
				/>
			)
		}
		return blubbs
	}
	function renderLittles() {
		const littles = []
		for (let index = 1; index <= 16; index++) {
			littles.push(
				<Little
					key={index}
					index={index}
					degrees={parseInt(Math.random() * 300)}
				/>
			)
		}
		return littles
	}
	return (
		<MyFrame>
			<Center>
				<Ball />
				{renderBlubbs()}
				{renderLittles()}
			</Center>
		</MyFrame>
	)
}
