/** @format */

import styled from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

const CardColor = '#fff'
const BadgeColor = '#8391a1'
const TextColorMain = '#616e7d'
const TextColorSecondary = '#8391a1'
const ButtonColor = '#3ca7fb'
const ButtonColorSecondary = '#2196f3'

const Card = styled.div`
	position: absolute;
	width: 80%;
	height: 40%;
	top: 30%;
	left: 10%;
	background: ${CardColor};
	box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
	overflow: hidden;
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
	margin-bottom: 8px;
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

export default function Day() {
	return (
		<Layout titleFragment="Day 26 - Modal">
			<Frame>
				<Card>
					<NumberBadge>
						<Number>1</Number>
					</NumberBadge>
					<TextContainer>
						<Headline>The Couch</Headline>
						<Quote>
							If you want to grow, get outside your comfort zone
						</Quote>
					</TextContainer>
					<Button>OK</Button>
				</Card>
			</Frame>
		</Layout>
	)
}
