/** @format */

import styled, {keyframes} from 'styled-components'
import {CSSTransition} from 'react-transition-group'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import {useState} from 'react'

const MapBackdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #2196f3;

	svg {
		fill: #1f8de4;
	}
`

const HoverAnimation = keyframes`
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(-5px);
	}
`
const Marker = styled.div`
	position: absolute;
	z-index: 5;
	top: 40%;
	left: 45%;
	cursor: pointer;
	opacity: 1;
	transform: perspective(600px) rotateY(0deg);
	transition: all 0.5s ease 0.3s;

	&.flip-marker-enter-done {
		transform: perspective(600px) rotateY(-90deg);
		opacity: 0;
	}

	svg {
		fill: #000;
		animation: ${HoverAnimation} 1s ease-in-out infinite alternate;
	}
`
const ShadowAnimation = keyframes`
	from {
		transform: scale(1);
	}
	to {
		transform: scale(1.25);
	}
`
const Shadow = styled.div`
	width: 18px;
	height: 4px;
	background: #1a1a1a;
	border-radius: 50%;
	margin: 5px auto 0 auto;
	animation: ${ShadowAnimation} 1s ease-in-out infinite alternate;
`

const Card = styled.div`
	position: absolute;
	z-index: 10;
	width: 60%;
	height: 50%;
	top: 25%;
	left: 20%;
	border-radius: 15px;
	background: #000;
	box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.4);
	text-align: center;
	transform: perspective(600px) rotateY(90deg);
	opacity: 0;
	pointer-events: none;
	transition: all 0.5s ease;
	color: #fff;

	&.flip-card-enter-done {
		transform: perspective(600px) rotateY(0deg);
		opacity: 1;
		pointer-events: all;
		transition: all 0.5s ease 0.3s;
	}
`

const Text = styled.p`
	font-weight: 400;
	font-size: 0.7em;
	line-height: 1.3em;
	margin: 2.5px 0;
`
const Bold = styled(Text)`
	font-size: 0.85em;
	line-height: 1.2em;
	font-weight: 600;
`

const ActionsContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 20%;
	display: flex;
	justify-content: space-evenly;
`
const Action = styled.a`
	text-align: center;
	line-height: 2.5em;
	text-decoration: none;
	font-weight: 400;
	font-size: 0.75em;
	cursor: pointer;
`

const HR = styled.hr`
	border-top: 0.5px;
	opacity: 0.1;
`

export default function Day() {
	const [view, setView] = useState('marker')
	return (
		<Layout titleFragment="Day 25 - Map Marker">
			<Frame>
				<MapBackdrop>
					<svg width="400px" height="400px" viewBox="0 0 400 400">
						<path d="M161.061341,399.999994 C161.061341,399.999994 191.270445,391.453331 205.135883,365.931812 C219.001321,340.410293 200.432398,333.765052 214.613679,309.426833 C228.79496,285.088614 250.056003,267.776851 262.826394,266.922116 C275.596785,266.067381 268.157228,295.720245 275.715421,305.337232 C283.273615,314.954218 275.976179,326.217927 303.147406,318.226259 C330.318634,310.234591 337.441809,308.749917 354.803656,282.075606 C372.165503,255.401296 353.503439,227.118217 363.183533,215.005256 C372.863628,202.892294 400.000001,171.927011 400.000001,171.927011 L400.000001,399.999994 L161.061341,399.999994 Z M8.33144441e-07,274.813084 C8.33144441e-07,274.813084 39.2929748,253.427701 69.7020648,222.975932 C100.111155,192.524163 111.329013,178.897167 120.245786,154.398535 C129.162559,129.899902 108.904134,115.269131 115.056957,98.3643901 C121.20978,81.459649 135.217027,74.9407179 149.468681,74.1092913 C163.720334,73.2778646 154.420375,103.542195 180.702766,94.5346817 C206.985157,85.5271688 208.897554,56.1953712 227.012818,47.5333294 C245.128081,38.8712876 253.356729,68.8621277 278.808059,63.1798791 C304.259388,57.4976304 304.842006,36.4943955 317.091607,32.0191906 C329.341207,27.5439856 334.697225,18.5903589 367.296171,25.5675291 C399.895117,32.5446994 399.999998,49.0022571 399.999998,49.0022571 L400,-5.40012479e-13 L2.47316295e-05,-1.96109795e-12 L8.33144441e-07,274.813084 Z"></path>
					</svg>
				</MapBackdrop>
				<CSSTransition
					classNames="flip-marker"
					in={view === 'detail'}
					timeout={0}
				>
					<Marker
						onClick={() => {
							setView('detail')
						}}
					>
						<svg width="48px" height="72px" viewBox="0 0 48 72">
							<path d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z" />
						</svg>
						<Shadow />
					</Marker>
				</CSSTransition>
				<CSSTransition
					classNames="flip-card"
					in={view === 'detail'}
					timeout={0}
				>
					<Card
						onClick={() => {
							setView('marker')
						}}
					>
						<img src="/images/ZarteSide.jpg" alt="Profile" />
						<Bold>Zarte's Place</Bold>
						<Text>
							Our Street <br />
							India
						</Text>
						<HR />
						<ActionsContainer>
							<Action>Save</Action>
							<Action>Route</Action>
						</ActionsContainer>
					</Card>
				</CSSTransition>
			</Frame>
		</Layout>
	)
}
