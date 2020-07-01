/** @format */

import styled, {keyframes} from 'styled-components'

import Frame from '../components/Frame'

const MyFrame = styled(Frame)`
	background: white;
`

const SVGWidth = '151px'
const SVGHeight = '128px'

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const Legs = styled.div`
	animation: ${FadeInAnimation} 1s ease-out 1s;
	animation-fill-mode: both;
`

const LegSwingAnimation = keyframes`
  0%, 100% {
		transform: rotate(-22deg);
	}
	50% {
		transform: rotate(40deg);
	}
`
const Leg = styled.div`
	position: absolute;
	top: 0px;
	left: 40%;
	width: ${SVGWidth};
	height: 62.3%;
	transform-origin: 50% 0;
`
const LeftLeg = styled(Leg)`
	animation: ${LegSwingAnimation} 2s ease-in-out infinite;
`
const RightLeg = styled(Leg)`
	animation: ${LegSwingAnimation} 2s ease-in-out 1s infinite;
`

const ShoeTurnAnimation = keyframes`
  0%, 100% {
		transform: rotate(-10deg) translateY(-5px) translateX(10px);
	}
	25% {
		transform: rotate(0deg) translateY(0px) translateX(0);
	}
	50% {
		transform: rotate(10deg) translateY(-10px) translateX(10px);
	}
	75% {
		transform: rotate(0deg) translateY(-30px) translateX(0);
	}
`

const Shoe = styled.div`
	position: absolute;
	width: ${SVGWidth};
	height: ${SVGHeight};
	bottom: 0;
	background: url('https://100dayscss.com/codepen/doc-martens.svg') center
		center no-repeat;
	transform-origin: 0 95%;
`
const LeftShoe = styled(Shoe)`
	animation: ${ShoeTurnAnimation} 2s ease-in-out infinite;
`
const RightShoe = styled(Shoe)`
	animation: ${ShoeTurnAnimation} 2s ease-in-out 1s infinite;
`

const FloorColor = 'brown'
const Floor = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 38%;
	background: ${FloorColor};
`

export default function Day() {
	return (
		<MyFrame>
			<Legs>
				<LeftLeg>
					<LeftShoe />
				</LeftLeg>
				<RightLeg>
					<RightShoe />
				</RightLeg>
			</Legs>
			<Floor />
		</MyFrame>
	)
}
