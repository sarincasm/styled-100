/** @format */

import Link from 'next/link'
import styled from 'styled-components'
import {Box} from 'grommet'

const StyledA = styled.a`
	display: block;
	margin: 12px 12px;
	text-decoration: none;
	color: black;
	flex: 1 1 0px;
	min-width: 100px;
	text-align: center;

	transition: background-color 0.3s ease-in-out;
	&:hover {
		color: white;
		background-color: black;
	}
`

export default function Index() {
	const daysDone = 4
	const days = [0].concat([...Array(daysDone).keys()])
	const links = days.map((_, index) => (
		<Link key={index} href={`/day-${index}`} passHref>
			<StyledA>Day {index}</StyledA>
		</Link>
	))

	return (
		<Box
			direction="row"
			wrap="true"
			pad={{vertical: 'small', horizontal: 'medium'}}
		>
			{links}
		</Box>
	)
}
