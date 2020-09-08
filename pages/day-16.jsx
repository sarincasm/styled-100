/** @format */

import styled, {keyframes} from 'styled-components'

import Frame from '../components/Frame'

const FillColor = '#000'
const AnimationDuration = '6s'
const BackgroundColor = '#6ed6f5'

const MyFrame = styled(Frame)`
	background: ${BackgroundColor};
`

const CircleAnimation = keyframes`
  0% {
		transform: translate3d(0,-300px,0) scaleY(1.2);
	}
	10% {
		transform: translate3d(0,50px,0) scaleY(0.8);
	}
	14% {
		transform: translate3d(0,-30px,0) scaleY(1.1);
	}
	18% {
		transform: translate3d(0,10px,0) scaleY(0.9);
	}
	20%, 22% {
		transform: translate3d(0,0,0) scaleY(1);
	}
	26% {
		transform: translate3d(0,0,0) scale(1.2);
	}
	32%,74% {
		transform: translate3d(0,0,0) scale(0);
	}
	80% {
		transform: translate3d(0,0,0) scale(1.2);
	}
	84% {
		transform: translate3d(0,0,0) scale(0.9);
	}
	86%, 88% {
		transform: translate3d(0,0,0) scale(1);
	}
	92% {
		transform: translate3d(0,-30px,0) scaleY(0.9);
	}
	100% {
		transform: translate3d(0,300px,0) scaleY(1.2);
	}
`
const Circle = styled.div`
	position: absolute;
	width: 90px;
	height: 90px;
	top: 155px;
	left: 155px;
	background: ${FillColor};
	border-radius: 50%;
	animation: ${CircleAnimation} ${AnimationDuration} ease-in-out infinite;
`

const CircleSparkAnimation = keyframes`
  0%, 74% {
		transform: scale(0);
		opacity: 1;
	}
	80% {
		opacity: 1;
	}
	84%, 100% {
		transform: scale(1.4);
		opacity: 0;
	}
`
const CircleSpark = styled.div`
	box-sizing: border-box;
	position: absolute;
	width: 110px;
	height: 110px;
	top: 145px;
	left: 145px;
	border: 3px solid ${FillColor};
	border-radius: 50%;
	animation: ${CircleSparkAnimation} ${AnimationDuration} ease-in-out infinite;
`

const PseudoSparkElement = `
{
    display: block;
		content: '';
		position: absolute;
		width: 4px;
		height: 25px;
		top: 0;
		left: 0;
		border-radius: 2px;
    background: ${FillColor};
}
`

const OctagonAnimation = keyframes`
  0%, 30% {
		transform: scale(0) rotate(22.5deg);
	}
	36% {
		transform: scale(1.2) rotate(22.5deg);
	}
	40% {
		transform: scale(0.9) rotate(22.5deg);
	}
	42%, 44% {
		transform: scale(1) rotate(22.5deg);
	}
	48% {
		transform: scale(1.2) rotate(22.5deg);
	}
	54%, 100% {
		transform: scale(0) rotate(22.5deg);
	}
`
const Octagon = styled.svg`
	position: absolute;
	width: 100px;
	height: 100px;
	top: 150px;
	left: 150px;
	fill: ${FillColor};
	animation: ${OctagonAnimation} ${AnimationDuration} ease-in-out infinite;
`

const OctagonSparkAnimation = keyframes`
  0%, 30% {
		transform: scale(0);
		opacity: 1;
	}
	36% {
		opacity: 1;
	}
	40%, 100% {
		transform: scale(1.4);
		opacity: 0;
	}
`
const OctagonSparkContainer = styled.div`
	position: absolute;
	width: 200px;
	height: 200px;
	top: 100px;
	left: 100px;
	animation: ${OctagonSparkAnimation} ${AnimationDuration} ease-in-out infinite;
`
const OctagonSpark = styled.div`
	position: absolute;
	top: 0;
	left: 98px;
	width: 4px;
	height: 200px;

	&:before,
	&:after ${PseudoSparkElement} &:after {
		top: auto;
		bottom: 0;
	}

	transform: ${({rotation}) => `rotate(${rotation})`};
`

const TriangleAnimation = keyframes`
  0%, 52% {
		transform: translate3d(0,0,0) scale(0);
	}
	58% {
		transform: translate3d(0,0,0) scale(1.2);
	}
	62% {
		transform: translate3d(0,0,0) scale(0.9);
	}
	64%, 66% {
		transform: translate3d(0,0,0) scale(1);
	}
	70% {
		transform: translate3d(0,0,0) scale(1.2);
	}
	76%, 100% {
		transform: translate3d(0,0,0) scale(0);
	}
`
const Triangle = styled.svg`
	position: absolute;
	width: 106px;
	height: 90px;
	top: 145px;
	left: 147px;
	fill: ${FillColor};
	animation: ${TriangleAnimation} ${AnimationDuration} ease-in-out infinite;
`

const TriangleSparkAnimation = keyframes`
  0%, 52% {
		transform: scale(0);
		opacity: 1;
	}
	58% {
		opacity: 1;
	}
	62%, 100% {
		transform: scale(1.4);
		opacity: 0;
	}
`
const TriangleSparkContainer = styled.div`
	position: absolute;
	width: 200px;
	height: 200px;
	top: 100px;
	left: 100px;
	animation: ${TriangleSparkAnimation} ${AnimationDuration} ease-in-out
		infinite;
`
const TriangleSpark = styled.div`
	position: absolute;
	top: 0;
	left: 98px;
	width: 4px;
	height: 200px;

	&:before,	&:after ${PseudoSparkElement}

	transform: ${({rotation}) => `rotate(${rotation})`};
`

export default function Day() {
	return (
		<MyFrame>
			<Circle />
			<CircleSpark />
			<Octagon>
				<polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
			</Octagon>
			<OctagonSparkContainer>
				{['0deg', '45deg', '90deg', '135deg'].map((rotation) => (
					<OctagonSpark key={rotation} rotation={rotation} />
				))}
			</OctagonSparkContainer>
			<Triangle>
				<polygon points="53,0 106,90 0,90" />
			</Triangle>
			<TriangleSparkContainer>
				{['0deg', '124deg', '238deg'].map((rotation) => (
					<TriangleSpark key={rotation} rotation={rotation} />
				))}
			</TriangleSparkContainer>
		</MyFrame>
	)
}
