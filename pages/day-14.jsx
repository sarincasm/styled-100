/** @format */

import styled, {keyframes, css} from 'styled-components'

import Frame from '../components/Frame'

const Card = styled.div`
	position: absolute;
	width: 320px;
	height: 180px;
	top: 110px;
	left: 40px;
	/* perspective: 800px; */
`

const Flip = styled.div`
	width: 100%;
	height: 100%;
	/* transform-style: preserve-3d; */
	/* transition: all 1s ease-in-out; */
	/* perspective: 1000px; */
	box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.5);
`

const Front = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #ffce4e;
	/* backface-visibility: hidden; */
	border-radius: 3px;
	overflow: hidden;
	text-align: center;
`

const BicycleAnimation = keyframes`
  0%,100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.03);
  }
`
const Bicycle = styled.img`
	position: relative;
	top: 52px;
	animation: ${BicycleAnimation} 0.6s ease-in-out infinite;
	transform-origin: 50% 100%;
`

const Street = styled.div`
	position: absolute;
	top: 127px;
	left: 80px;
	width: 160px;
	height: 3px;
	overflow: hidden;
`

const StripAnimation = keyframes`
  0% {
    transform: translateX(180px) scaleX(1);
  }
  100% {
    transform: translateX(0) scaleX(.8);
  }
`
const Strip = styled.div`
	position: absolute;
	top: 0;
	height: 3px;
	width: ${({index}) => 2 + index * 2 + 'px'};
	background: #4b4841;
	border-radius: 3px;
	animation: ${() =>
		css`${StripAnimation} ${
			0.6 + Math.random() * 2
		}s linear ${Math.random()}s infinite`};
`

export default function Day() {
	function renderRunningStreet() {
		const Strips = []
		for (let index = 1; index < 10; index++) {
			Strips.push(<Strip index={index} key={index} />)
		}
		return Strips
	}

	return (
		<Frame>
			<Card>
				<Flip>
					<Front>
						<Bicycle src="https://100dayscss.com/codepen/bycicle.svg" />
						<Street>{renderRunningStreet()}</Street>
					</Front>
				</Flip>
			</Card>
		</Frame>
	)
}
