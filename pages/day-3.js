/** @format */

import styled, {keyframes} from 'styled-components'

import Frame, {FrameColor} from '../components/Frame'
import Center from '../components/Center'

const colorOfSky = '#7CEBFF'
const colorOfGround = '#805B28'
const colorOfSun = '#FFF32A'
const colorOfPyramidLight = '#FFFA9E'
const colorOfPyramidDark = '#807D47'

const Circle = styled.div`
	width: 180px;
	height: 180px;
	border-radius: 50%;
	clip-path: circle(90px at 90px 90px);
`

const SkyAnimation = keyframes`
0% {
  background: ${FrameColor};
}
10% {
  background: ${FrameColor};
}
30% {
  background: ${colorOfSky};
}
70% {
  background: ${colorOfSky};
}
90% {
  background: ${FrameColor};
}
100% {
  background: ${FrameColor};
}
`
const Sky = styled.div`
	top: 0;
	left: 0;
	right: 0;
	height: 124px;
	background: ${colorOfSky};
	animation: ${SkyAnimation} 8s linear infinite;
`
const GroundAnimation = keyframes`
0% {
  background: ${FrameColor};
}
10% {
  background: ${FrameColor};
}
30% {
  background: ${colorOfGround};
}
70% {
  background: ${colorOfGround};
}
90% {
  background: ${FrameColor};
}
100% {
  background: ${FrameColor};
}
`
const Ground = styled.div`
	bottom: 0;
	left: 0;
	right: 0;
	height: 56px;
	background: ${colorOfGround};
	animation: ${GroundAnimation} 8s linear infinite;
`

const SunAnimation = keyframes`
0% {
  transform: rotate(-180deg);
  background: #FFA213;
}
10% {
  transform: rotate(-60deg);
  background: #FFA213;
}
50% {
  transform: rotate(0deg);
  background: ${colorOfSun};
}
65% {
  background: ${colorOfSun};
}
88% {
  transform: rotate(60deg);
  background: #807C4F;
}
100% {
  transform: rotate(180deg);
  background: #807C4F;
}
`
const Sun = styled.div`
	position: absolute;
	top: 5px;
	left: 75px;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background: ${colorOfSun};
	transform-origin: 50% 400%;
	animation: ${SunAnimation} 8s linear infinite;
`

const PyramidAnimation = keyframes`
0% {
  background: ${FrameColor};
}
10% {
  background: ${FrameColor};
}
40% {
  background: ${colorOfPyramidLight};
}
75% {
  background: ${colorOfPyramidDark};
}
90% {
  background: ${FrameColor};
}
100% {
  background: ${FrameColor};
}
`
const PyramidLeft = styled.div`
	position: absolute;
	top: 67px;
	left: 35px;
	height: 58px;
	width: 115px;
	background: ${colorOfPyramidLight};
	clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
	animation: ${PyramidAnimation} 8s linear infinite;
`
const PyramidRight = styled.div`
	position: absolute;
	top: 67px;
	left: 93px;
	height: 58px;
	width: 58px;
	background: ${colorOfPyramidDark};
	clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
	animation: ${PyramidAnimation} 8s linear infinite reverse;
`

const ClipLeftVertex = '115px'
const ClipRightVertex = '230px'
const ShadowAnimation = keyframes`
0% {
  transform: scaleY(0);
  clip-path: polygon(${ClipLeftVertex} 0%, ${ClipRightVertex} 0%, 100% 100%);
  background: rgba(0, 0, 0, 0.1);
}
10% {
  transform: scaleY(0);
  clip-path: polygon(${ClipLeftVertex} 0%, ${ClipRightVertex} 0%, 100% 100%);
  background: rgba(0, 0, 0, 0.1);
}
30% {
  transform: scaleY(1);
  clip-path: polygon(${ClipLeftVertex} 0%, ${ClipRightVertex} 0%, 80% 100%);
  background: rgba(0, 0, 0, 0.2);
}
52.5% {
  transform: scaleY(.7);
  background: rgba(0, 0, 0, 0.3);
}
57.5% {
  transform: scaleY(.7);
  background: rgba(0, 0, 0, 0.3);
}
70% {
  transform: scaleY(1);
  background: rgba(0, 0, 0, 0.2);
}
90% {
  transform: scaleY(0);
  clip-path: polygon(${ClipLeftVertex} 0%, ${ClipRightVertex} 0%, 0% 100%);
  background: rgba(0, 0, 0, 0.1);
}
100% {
  transform: scaleY(0);
  clip-path: polygon(${ClipLeftVertex} 0%, ${ClipRightVertex} 0%, 0% 100%);
  background: rgba(0, 0, 0, 0.1);
}
`
const Shadow = styled.div`
	position: absolute;
	top: 124px;
	left: -80px;
	height: 25px;
	width: 360px;
	background: rgba(0, 0, 0, 0.3);
	clip-path: polygon(${ClipLeftVertex} 0%, ${ClipRightVertex} 0%, 53% 100%);
	transform-origin: 50% 0%;
	animation: ${ShadowAnimation} 8s linear infinite;
`

export default function Day3() {
	return (
		<Frame>
			<Center>
				<Circle>
					<Sky />
					<Sun />
					<PyramidLeft />
					<PyramidRight />
					<Shadow />
					<Ground />
				</Circle>
			</Center>
		</Frame>
	)
}
