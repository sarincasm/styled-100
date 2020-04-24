/** @format */

import styled, {keyframes} from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const colors = ['#A6E9FF', '#FFF78B', '#FF7398']
function getUniqueColor() {
	const index = Math.floor(Math.random() * colors.length)
	const color = colors.splice(index, 1)[0]
	return color
}

const totalDuration = '5s'

const initialCSS = `
  {
		box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.2);
		transform: translate(-50%, -50%) scale(0);
  }
`
const finalCSS = `
  {
		box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
		transform: translate(-50%, -50%) scale(1);
	}
`
const AnimationLittle = keyframes`
  0%, 60% ${initialCSS}
	90%, 100%  ${finalCSS}
`
const DotLittle = styled.div`
	z-index: 3;
	position: absolute;
	width: 50px;
	height: 50px;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	background: ${getUniqueColor()};
	animation: ${AnimationLittle} ${totalDuration} ease-in-out infinite alternate;
`

const AnimationMiddle = keyframes`
  0%, 40% ${initialCSS}
	90%, 100% ${finalCSS}
`
const DotMiddle = styled.div`
	z-index: 2;
	position: absolute;
	width: 90px;
	height: 90px;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	background: ${getUniqueColor()};
	animation: ${AnimationMiddle} ${totalDuration} ease-in-out infinite alternate;
`

const AnimationLarge = keyframes`
  0%, 10% ${initialCSS}
	90%, 100% ${finalCSS}
`
const DotLarge = styled.div`
	z-index: 1;
	position: absolute;
	width: 130px;
	height: 130px;
	transform: translate(-50%, -50%);
	border-radius: 50%;
	background: ${getUniqueColor()};
	animation: ${AnimationLarge} ${totalDuration} ease-in-out infinite alternate;
`

export default function Day() {
	return (
		<Frame>
			<Center>
				<DotLittle />
				<DotMiddle />
				<DotLarge />
			</Center>
		</Frame>
	)
}
