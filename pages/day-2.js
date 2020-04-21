/** @format */

import {useState, useEffect} from 'react'
import styled, {css, keyframes} from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const menuIconLineHeight = 8
const menuIconLineSpace = 14

const menuIconLineOffsetY = menuIconLineHeight + menuIconLineSpace
const menuIconHeight = 3 * menuIconLineHeight + 2 * menuIconLineSpace

const animationDuration = 0.7

const MenuIcon = styled.div`
	width: 80px;
	height: ${menuIconHeight}px;
	cursor: pointer;
`

const Line = styled.div`
	height: ${menuIconLineHeight}px;
	width: 100%;
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);

	animation: ${(props) =>
		animationSelect({
			position: props.position,
		})};
	animation-fill-mode: forwards;
	animation-play-state: ${(props) => props.animationState || 'paused'};
`

const LineTopAnimation = keyframes`
0% {
	transform: translateY(0) rotate(0);
	background-color: #fff;
}
 50% {
	transform: translateY(${menuIconLineOffsetY}px) rotate(0);
}
100% {
	transform: translateY(${menuIconLineOffsetY}px) rotate(45deg);
	background-color: red;
}
`
const LineMiddleAnimation = keyframes`
0% {
	transform: scale(1);
	opacity: 1;
}
100% {
	transform: scale(0);
	opacity: 0;
}

`
const LineBottomAnimation = keyframes`
0% {
	transform: translateY(0) rotate(0);
}
 50% {
	transform: translateY(-${menuIconLineOffsetY}px) rotate(0);
}
100% {
	transform: translateY(-${menuIconLineOffsetY}px) rotate(135deg);
	background-color: red;
}
`

function animationSelect({position}) {
	switch (position) {
		case 'top':
			return css`
				${LineTopAnimation} ${animationDuration}s ease-in-out 0s infinite alternate;
			`
		case 'middle':
			return css`
				${LineMiddleAnimation} ${animationDuration}s ease-in-out 0s infinite alternate;
			`
		case 'bottom':
			return css`
				${LineBottomAnimation} ${animationDuration}s ease-in-out 0s infinite alternate;
			`
	}
}

const LineMiddle = styled(Line)`
	margin: ${menuIconLineSpace}px 0;
`

export default function Day1() {
	const [animationState, setAnimationState] = useState('paused')
	const [childrenDone, setChildrenDone] = useState(0)

	useEffect(() => {
		if (childrenDone === 3 && animationState === 'running') {
			setAnimationState('paused')
			setChildrenDone(0)
		}
	})

	return (
		<Frame>
			<Center>
				<MenuIcon
					onClick={() => {
						setAnimationState('running')
					}}
					onAnimationStart={() => {
						if (animationState === 'running') {
							setChildrenDone(childrenDone + 1)
						}
					}}
					onAnimationIteration={() => {
						if (animationState === 'running') {
							setChildrenDone(childrenDone + 1)
						}
					}}
				>
					<Line animationState={animationState} position={'top'} />
					<LineMiddle
						animationState={animationState}
						position={'middle'}
					/>
					<Line animationState={animationState} position={'bottom'} />
				</MenuIcon>
			</Center>
		</Frame>
	)
}
