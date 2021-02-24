/** @format */

import styled, {keyframes} from 'styled-components'

import {CSSTransition} from 'react-transition-group'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import {useEffect, useState} from 'react'

const CardColor = '#fff'
const BadgeColor = '#5B56FC'
const TextColorMain = '#5B56FC'
const TextColorSecondary = '#7443E6'
const ButtonColor = '#5B56FC'
const ButtonColorSecondary = '#7443E6'

const CardInAnimation = keyframes`
	from {
		opacity: 0;
		transform: scale(0.8);		
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const CardOutAnimation = keyframes`
	from {
		opacity: 1;
		transform: scale(1);	
	}
	to {
		opacity: 0;
		transform: scale(1.15);
	}
`
const Card = styled.div`
	position: absolute;
	width: 80%;
	height: 46%;
	top: 27%;
	left: 10%;
	background: ${CardColor};
	box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
	overflow: hidden;
	animation: ${CardInAnimation} 0.6s ease-out both paused;

	&.card-enter-done {
		animation: ${CardInAnimation} 0.7s ease-out both;
	}
	&.card-exit-done {
		animation: ${CardOutAnimation} 0.4s ease-in-out both;
	}
`

const NumberBadge = styled.div`
	position: absolute;
	width: 60px;
	height: 60px;
	top: -30px;
	right: -30px;
	background: ${BadgeColor};
	transform: rotate(45deg);
`
const Number = styled.div`
	position: absolute;
	bottom: 3px;
	text-align: center;
	width: 100%;
	font-size: 13px;
	line-height: 13px;
	font-weight: 600;
	transform: rotate(-45deg);
`

const TextContainer = styled.div`
	text-align: center;
	padding: 20px 10px;
`
const Headline = styled.span`
	display: block;
	font-size: 1.2em;
	line-height: 1.4em;
	font-weight: 600;
	color: ${TextColorMain};
	margin-bottom: 20px;
`
const Quote = styled.p`
	font-size: 0.85em;
	line-height: 1.2em;
	color: ${TextColorSecondary};
	margin: 0;
`

const Button = styled.button`
	position: absolute;
	width: 100%;
	height: 25%;
	bottom: 0;
	background: ${ButtonColor};
	color: ${CardColor};
	cursor: pointer;
	text-align: center;
	text-transform: uppercase;
	border: none;
	font-size: 0.9em;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${ButtonColorSecondary};
	}
`

function CardGroup({index, headline, quote, transition, handleClick}) {
	return (
		<Card onAnimationEnd={transition}>
			<NumberBadge>
				<Number>{index}</Number>
			</NumberBadge>
			<TextContainer>
				<Headline>{headline}</Headline>
				<Quote>{quote}</Quote>
			</TextContainer>
			<Button onClick={handleClick}>OK</Button>
		</Card>
	)
}

export default function Day() {
	const data = [
		{
			headline: 'Wisdom',
			quote:
				'We can know only that we know nothing. And that is the highest degree of human wisdom.',
		},
		{
			headline: 'Reason',
			quote:
				'If we admit that human life can be ruled by reason, then all possibility of life is destroyed.',
		},
		{
			headline: 'War',
			quote:
				'If everyone fought for their own convictions there would be no war',
		},
	]
	const wrap = data.length

	const [number, setNumber] = useState(0)
	const [fadeActive, setFadeActive] = useState(true)
	useEffect(() => {
		setFadeActive(true)
	}, [number])

	const selected = data[number]

	function handleClick() {
		setFadeActive(false)
	}

	function transition() {
		if (!fadeActive) {
			setNumber((number + 1) % wrap)
		}
	}

	return (
		<Layout titleFragment="Day 26 - Modal">
			<Frame background="#4AA3FE">
				<CSSTransition classNames="card" in={fadeActive} timeout={0} appear>
					{CardGroup({
						index: number + 1,
						...selected,
						transition,
						handleClick,
					})}
				</CSSTransition>
			</Frame>
		</Layout>
	)
}
