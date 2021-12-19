/** @format */

import styled, {css, keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

const BG_COLOR = '#995117'
const MyFrame = styled(Frame)`
	left: ${({left}) => left};
	background: ${BG_COLOR};
`

const NumberOfDots = 20
const Duration = 60
const Oscillations = 40

const DotsContainer = styled.div`
	padding-top: 8%;
	padding-left: 48%;
`

const DotAnimation = keyframes`
	0%, 100% {
		transform: translate(50px, 0);
	}
	50% {
		transform: translate(-50px, 0);
	}
`
const DotAnimation2 = (index) => keyframes`
	0%, 100% {
		transform: translate(${index * 8}px, 0);
	}
	50% {
		transform: translate(-${index * 8}px, 0);
	}
`

const Dot = styled.div`
	width: 12px;
	height: 12px;
	background: #fff;
	border-radius: 50%;
	margin: 5px 0;
	animation: ${({time}) =>
		css`
			${DotAnimation} ${time}s ease-in-out infinite
		`};
`

const Dot2 = styled(Dot)`
	animation: ${({time, index}) =>
		css`
			${DotAnimation2(index)} ${time}s ease-in-out infinite
		`};
`

export default function Day() {
	function renderDots(animationPatternIndex) {
		const Components = {
			1: Dot,
			2: Dot2,
		}
		const Component = Components[animationPatternIndex]
		const dots = []
		for (let index = 0; index < NumberOfDots; index++) {
			const time = Duration / (Oscillations + NumberOfDots - index)
			dots.push(<Component key={index} time={time} index={index} />)
		}
		return dots
	}

	return (
		<Layout titleFragment="Day 31 - Pendulum Wave">
			<MyFrame left={'30%'}>
				<DotsContainer>{renderDots(1)}</DotsContainer>
			</MyFrame>
			<MyFrame left={'70%'}>
				<DotsContainer>{renderDots(2)}</DotsContainer>
			</MyFrame>
		</Layout>
	)
}
