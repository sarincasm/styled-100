/** @format */

import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Featured, {chosenKey} from '../components/Featured'

const Main = styled.div`
	display: flex;
`

const Title = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	text-align: center;
	background: #333;
	color: white;
	z-index: 99;
	height: 9vh;
	text-transform: uppercase;
`

const FeaturedContainer = styled.div`
	position: relative;
	flex: 2 0 500px;
	height: 100vh;
`
const FeaturedTitle = styled.h1`
	text-align: center;
	position: absolute;
	width: 100%;
	bottom: 13%;
`

const LinksContainer = styled.div`
	position: relative;
	top: 9vh;
	display: flex;
	flex-flow: row wrap;
	flex-grow: 3;
	max-height: 91vh;
	overflow-y: auto;
	background: #ff7398;
	margin: 0;
	align-items: center;
	box-shadow: -2px 0 5px -2px;
`
const StyledA = styled.a`
	display: block;
	margin: 12px 12px;
	text-decoration: none;
	color: white;
	flex: 1 1 120px;
	text-align: center;

	::first-letter {
		font-size: 2em;
	}

	transition: color 0.2s ease-in-out;
	&:hover {
		color: black;
	}
`

export default function Index() {
	const daysDone = 25
	const days = [0].concat([...Array(daysDone).keys()])
	const links = days.map((_, index) => (
		<Link key={index} href={`/day-${index}`} passHref>
			<StyledA>Day {index}</StyledA>
		</Link>
	))

	return (
		<Layout>
			<Main>
				<Title>
					<h1>Styled 100</h1>
				</Title>
				<FeaturedContainer>
					<FeaturedTitle>{'DAY ' + chosenKey}</FeaturedTitle>
					<Featured />
				</FeaturedContainer>
				<LinksContainer>{links}</LinksContainer>
			</Main>
		</Layout>
	)
}
