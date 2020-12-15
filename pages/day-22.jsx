/** @format */

import styled, {keyframes} from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import Center from '../components/Center'

const FullCenter = styled(Center)`
	width: 100%;
`

const Headline = styled.div`
	font-weight: 600;
	font-size: 1.6em;
	text-transform: uppercase;
	text-align: center;
	line-height: 1.1em;

	.small {
		font-weight: 300;
		font-size: 0.9em;
	}
`
const Info = styled.div`
	position: absolute;
	width: 100%;
	top: 25%;
	font-size: 1.5em;
	text-align: center;
	font-weight: 400;
	line-height: 1.1em;

	.small {
		font-size: 0.6em;
		opacity: 0.5;
	}
`

const CircleLightAccent = '#E7ED37'
const CircleDarkAccent = '#182406'
const CircleBackground = styled.circle`
	fill: none;
	stroke-width: ${({strokeWidth}) => strokeWidth};
	stroke: ${CircleDarkAccent};
`
const ProgressAnimation = ({circumfrence, strokeDashoffset}) => keyframes`
  from {
    stroke-dashoffset: ${circumfrence};
  }
  to {
    stroke-dashoffset: ${strokeDashoffset};
  }
`
const ProgressCircle = styled.circle`
	fill: none;
	stroke-width: ${({strokeWidth}) => strokeWidth};
	stroke: ${CircleLightAccent};
	stroke-linecap: round;
	stroke-dasharray: ${({circumfrence}) => circumfrence};
	stroke-dashoffset: ${({strokeDashoffset}) => strokeDashoffset};
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
	animation: ${ProgressAnimation} 1.5s ease-out;
`

const BigCircle = styled.div`
	position: relative;
	width: 114px;
	height: 114px;
	margin: 30px auto 25px auto;

	svg {
		width: 114px;
		height: 114px;
	}
`

const SmallCirclesContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 20%;
	text-align: center;
`
const SmallCircle = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
	margin: 0 20px;

	font-size: 0.7em;

	svg {
		width: 80px;
		height: 80px;
	}
`

export default function Day() {
	return (
		<Layout titleFragment="Day 22 - Fitness Tracker">
			<Frame>
				<FullCenter>
					<Headline>
						<div className="small">Daily</div>
						Progress
					</Headline>
					<BigCircle>
						<Info>
							2377
							<div className="small">KCal</div>
						</Info>
						<svg>
							<CircleBackground
								strokeWidth="10px"
								cx="57"
								cy="57"
								r="52"
							/>
							<ProgressCircle
								cx="57"
								cy="57"
								r="52"
								strokeWidth="10px"
								strokeDashoffset="60"
								circumfrence={2 * 3.14 * 52}
							/>
						</svg>
					</BigCircle>
					<SmallCirclesContainer>
						<SmallCircle>
							<Info>
								9773
								<div className="small">Steps</div>
							</Info>
							<svg>
								<CircleBackground
									strokeWidth="6px"
									cx="40"
									cy="40"
									r="37"
								/>
								<ProgressCircle
									cx="40"
									cy="40"
									r="37"
									strokeWidth="6px"
									strokeDashoffset="80"
									circumfrence={2 * 3.14 * 37}
								/>
							</svg>
						</SmallCircle>
						<SmallCircle>
							<Info>
								6.6
								<div className="small">Km</div>
							</Info>
							<svg>
								<CircleBackground
									strokeWidth="6px"
									cx="40"
									cy="40"
									r="37"
								/>
								<ProgressCircle
									cx="40"
									cy="40"
									r="37"
									strokeWidth="6px"
									strokeDashoffset="140"
									circumfrence={2 * 3.14 * 37}
								/>
							</svg>
						</SmallCircle>
					</SmallCirclesContainer>
				</FullCenter>
			</Frame>
		</Layout>
	)
}
