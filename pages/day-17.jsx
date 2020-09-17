/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const Polygon = styled.svg`
	width: 160px;
	height: 140px;
	transform: scale(1.75);
`
const PolygonComponent = styled.polygon`
	fill: ${({fill}) => fill};
	transition: all 0.35s ease-in-out;
	${Polygon}:hover & {
		fill: ${({hoverFill}) => hoverFill};
	}
`

const StripesBackground = styled.div`
	position: relative;
	top: -23%;
	left: -23%;
	height: 144%;
	width: 144%;
	transform: rotate(45deg);
	background: yellowgreen;
`
const Stripe = styled.div`
	background: white;
	width: 145%;
	height: 3px;
	margin-bottom: 16px;
`

export default function Day() {
	function renderStripes() {
		const stripesToRender = []
		for (let index = 0; index < 30; index++) {
			stripesToRender.push(<Stripe key={index} />)
		}
		return stripesToRender
	}
	return (
		<Frame>
			<StripesBackground>{renderStripes()}</StripesBackground>
			<Center>
				<Polygon>
					<PolygonComponent
						fill="#ccc"
						hoverFill="#eee"
						points="68,0 91,0 160,117 46,117 59,93 121,93"
					/>
					<PolygonComponent
						fill="#aaa"
						hoverFill="#ccc"
						points="68,41 79,59 46,117 160,117 147,160 11,140"
					/>
					<PolygonComponent
						fill="#eee"
						hoverFill="#aaa"
						points="0,117 68,0 121,93 98,93 68,41 11,140"
					/>
				</Polygon>
			</Center>
		</Frame>
	)
}
