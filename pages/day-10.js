/** @format */

import styled, {keyframes} from 'styled-components'
import moment from 'moment'
import {Aed} from 'grommet-icons'

import Frame from '../components/Frame'

const Base = styled.div`
	position: absolute;
	width: 212px;
	height: 212px;
	top: 87px;
	left: 87px;
	background: #242424;
	border: 7px solid #3a3a3a;
	border-radius: 50%;
	text-align: center;
`

const DateDiv = styled.div`
	position: absolute;
	top: 68px;
	width: 100%;
	text-transform: uppercase;
	font-size: 0.85em;
`
const TimeDiv = styled.div`
	position: absolute;
	top: 80px;
	width: 100%;
	font-weight: 700;
	font-size: 40px;
	line-height: 100%;
	margin: 8px 0;
`

const BeatAnimation = keyframes`
  from {
		transform: translateX(-50%) scale(.75);
	}
	to {
		transform: translateX(-53%) scale(.85);
	}
`
const Beat = styled.div`
	position: absolute;
	top: 129px;
	left: 50%;
	transform: translate(-50%, 0);
	animation: ${BeatAnimation} 2s ease-in-out infinite alternate both;

	span {
		position: relative;
		top: -5px;
		padding-left: 5px;
	}
`

export default function Day() {
	return (
		<Frame>
			<Base>
				<DateDiv>{moment().format('ddd DD MMM YYYY')}</DateDiv>
				<TimeDiv>{moment().format('hh:mm')}</TimeDiv>
				<Beat>
					<Aed color={'red'} />
					<span>45</span>
				</Beat>
			</Base>
		</Frame>
	)
}
