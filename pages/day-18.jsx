/** @format */

import styled, {keyframes} from 'styled-components'

import Frame from '../components/Frame'

const Top = styled.div`
	position: absolute;
	width: 100%;
	height: 50%;
	top: 0;
	background: grey;
`

const Bottom = styled.div`
	position: absolute;
	width: 100%;
	height: 50%;
	top: 50%;
	background: green;
`

const ElasticAnimation = keyframes`
  0% {
		transform: rotateX(90deg);
	}
	15% {
		transform: rotateX(150deg);
	}
	20% {
		transform: rotateX(50deg);
	}
	25% {
		transform: rotateX(120deg);
	}
	30% {
		transform: rotateX(70deg);
	}
	35% {
		transform: rotateX(100deg);
	}
	40% {
		transform: rotateX(83deg);
	} 
	45% {
		transform: rotateX(93deg);
	}
	50% {
		transform: rotateX(90deg);
	}
	65% {
		transform: rotateX(30deg);
	}
	70% {
		transform: rotateX(130deg);
	}
	75% {
		transform: rotateX(60deg);
	}
	80% {
		transform: rotateX(110deg);
	}
	85% {
		transform: rotateX(80deg);
	}
	90% {
		transform: rotateX(97deg);
	} 
	95% {
		transform: rotateX(87deg);
	}
	100% {
		transform: rotateX(90deg);
	}
`
const Ellipse = styled.div`
	position: absolute;
	width: 105%;
	height: 100%;
	top: 0;
	left: -2.5%;
	transform-style: preserve-3d;
	animation: ${ElasticAnimation} 15s ease-in-out infinite;
`

const Grey = styled.div`
	position: absolute;
	width: 105%;
	height: 100%;
	left: -2.5%;
	background: grey;
	border-radius: 50%;
	transform: rotateX(0);
`
const Green = styled.div`
	position: absolute;
	width: 105%;
	height: 100%;
	left: -2.5%;
	background: green;
	border-radius: 50%;
	transform: rotateX(180);
`

export default function Day() {
	return (
		<Frame>
			<Top />
			<Bottom />
			<Ellipse>
				<Grey />
				<Green />
			</Ellipse>
		</Frame>
	)
}
