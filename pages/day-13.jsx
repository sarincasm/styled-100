/** @format */
import {useState} from 'react'

import styled, {keyframes, css, ThemeProvider} from 'styled-components'

import {Phone, Favorite, Chat} from 'grommet-icons'

import Frame from '../components/Frame'
const WhiteFrame = styled(Frame)`
	background: white;
`
const Profile = styled.div`
	position: relative;
	float: left;
	width: 48%;
	height: 48%;
	margin: 1%;
	cursor: pointer;
`

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #000;
	opacity: 0;
	transition: all 0.5s ease-in-out;

	${Profile}:hover & {
		opacity: 0.4;
	}
`

const Plus = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	top: 50%;
	left: 50%;
	margin: -25px 0 0 -25px;
	background: red;
	border-radius: 50%;
	box-shadow: 2px 4px 10px 0 rgba(0, 0, 0, 0.5);
	transition: all 0.4s ease-in-out;
	opacity: 0;
	transform: scale(2);
	pointer-events: none;

	&:before {
		position: absolute;
		content: '';
		width: 14px;
		height: 2px;
		top: 24px;
		left: 18px;
		background: #fff;
	}

	&:after {
		position: absolute;
		content: '';
		width: 2px;
		height: 14px;
		top: 18px;
		left: 24px;
		background: #fff;
	}

	${Profile}:hover & {
		opacity: 1;
		transform: scale(1);
	}
`

const Detail = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	font-size: 0;
`

const HeaderAnimation = keyframes`
	from {
		transform: translateY(-105%);
	}
	to {
		transform: translateY(0);
	}
`
const Header = styled.img`
	position: absolute;
	animation: ${(props) =>
		props.theme.animationState
			? css`${HeaderAnimation} 1s ${props.theme.direction} both`
			: 'initial'};
	margin: 0;
`

const DetailImageAnimation = keyframes`
	from {
		transform: translateY(-250%);
	}
	to {
		transform: translateY(0);
	}
`
const DetailImage = styled.div`
	box-sizing: border-box;
	position: absolute;
	z-index: 1;
	top: 130px;
	left: 150px;
	width: 100px;
	height: 100px;
	border: 2px solid #fff;
	border-radius: 50%;
	overflow: hidden;
	box-shadow: 4px 6px 15px 0 rgba(0, 0, 0, 0.2);
	animation: ${(props) =>
		props.theme.animationState
			? css`${DetailImageAnimation} 1s 0.2s ${props.theme.direction} both`
			: 'initial'};

	img {
		width: 100%;
		height: auto;
	}
`

const CloseButtonAnimation = keyframes`
	from {
		transform: rotate(-45deg) translateY(-250%);
	}
	to {
		transform: rotate(45deg) translateY(0);
	}
`
const CloseButton = styled.div`
	position: absolute;
	z-index: 2;
	width: 50px;
	height: 50px;
	top: 10px;
	right: 10px;
	background: red;
	border-radius: 50%;
	transition: background 0.3s ease-in-out;
	transform: rotate(45deg);
	animation: ${(props) =>
		props.theme.animationState
			? css`${CloseButtonAnimation} .8s 0.1s ${props.theme.direction} both`
			: 'initial'};
	cursor: pointer;

	&:before {
		position: absolute;
		content: '';
		width: 14px;
		height: 2px;
		top: 24px;
		left: 18px;
		background: #fff;
		transition: all 0.3s ease-in-out;
	}

	&:after {
		position: absolute;
		content: '';
		width: 2px;
		height: 14px;
		top: 18px;
		left: 24px;
		background: #fff;
		transition: all 0.3s ease-in-out;
	}

	&:hover {
		background: #fff;

		&:after,
		&:before {
			background: red;
		}
	}
`

const InfoAnimation = keyframes`
	from {
	transform: translateY(105%);
	}
	to {
		transform: translateY(0);
	}
`
const Info = styled.div`
	position: absolute;
	box-sizing: border-box;
	background: red;
	height: 220px;
	padding-top: 67px;
	margin: 0;
	bottom: 0;
	width: 100%;
	animation: ${(props) =>
		props.theme.animationState
			? css`${InfoAnimation} 1s ${props.theme.direction} both`
			: 'initial'};
`

const Name = styled.div`
	font-size: 16px;
	font-weight: 600;
	text-align: center;
`

const ButtonGroup = styled.div`
	margin-top: 25px;
	text-align: center;
`
const Button = styled.div`
	position: relative;
	box-sizing: border-box;
	display: inline-block;
	border: 1px solid #fff;
	margin: 0 20px;
	border-radius: 50%;
	cursor: pointer;
	padding: 8px;

	&:hover {
		border: 2px solid #fff;
		box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.2);
	}
`

export default function Day() {
	const [active, setActive] = useState(false)
	const [activeProfile, setActiveProfile] = useState(0)
	const [animationState, setAnimationState] = useState(true)
	const [direction, setDirection] = useState('normal')
	const profiles = [
		{
			img: 'https://100dayscss.com/codepen/13-1.jpg',
			alt: 'Temp',
		},
		{
			img: 'https://100dayscss.com/codepen/13-2.jpg',
			alt: 'Temp',
		},
		{
			img: 'https://100dayscss.com/codepen/13-3.jpg',
			alt: 'Temp',
		},
		{
			img: 'https://100dayscss.com/codepen/13-4.jpg',
			alt: 'Temp',
		},
	]
	function renderProfiles() {
		return profiles.map((profile, index) => (
			<Profile
				key={index}
				onClick={() => {
					setActive(true)
					setActiveProfile(index)
				}}
			>
				<img src={profile.img} alt={profile.alt} width="192px" />
				<Overlay />
				<Plus />
			</Profile>
		))
	}

	function renderDetail() {
		if (!active) return
		return (
			<Detail>
				{/* use themeprovider to control animation of multiple components */}
				<ThemeProvider theme={{direction, animationState}}>
					<CloseButton
						onClick={() => {
							setAnimationState(true)
							setDirection('reverse')
						}}
					/>
					<Header src="https://100dayscss.com/codepen/13-1-header.jpg" />
					<DetailImage
						onAnimationEnd={() => {
							if (direction === 'reverse') {
								setActive(false)
								setDirection('normal')
							} else setAnimationState(false)
						}}
					>
						<img src={profiles[activeProfile].img} alt="profile pic" />
					</DetailImage>
					<Info active={true}>
						<Name>Eels Web</Name>
						<ButtonGroup>
							<Button as={Phone} size="42px" color="white" />
							<Button as={Favorite} size="42px" color="white" />
							<Button as={Chat} size="42px" color="white" />
						</ButtonGroup>
					</Info>
				</ThemeProvider>
			</Detail>
		)
	}

	return (
		<WhiteFrame>
			{renderProfiles()}
			{renderDetail()}
		</WhiteFrame>
	)
}
