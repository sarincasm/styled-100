/** @format */

import styled from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

const FONTCOLOR = '#59452C'
const BGCOLOR1 = '#FDA231'
const BGCOLOR2 = '#FDCA31'

const MyFrame = styled(Frame)`
	color: ${FONTCOLOR};
	background: linear-gradient(to top left, ${BGCOLOR1}, ${BGCOLOR2});
`

const Card = styled.div`
	position: absolute;
	width: 60%;
	height: 70%;
	top: 15%;
	left: 20%;
	background: #ffffff;
	box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
`

const Head = styled.div`
	padding: 8% 0 6% 0;
	margin: 0 14%;
`
const Title = styled.div`
	font-weight: 600;
	font-size: 1.4em;
	line-height: 1.2em;
	text-align: center;
`
const Subtitle = styled.div`
	font-size: 0.8em;
	line-height: 1.2em;
	text-align: center;
`

const List = styled.ul`
	list-style: none;
	font-size: 0.8em;
	padding: 2% 0;
	margin: 0 14%;
	display: flex;
	flex-direction: column;
`
const ListItem = styled.li`
	position: relative;
	display: flex;
	margin: 1% 0;
	padding: 1% 0;
	flex-basis: auto;
	justify-content: space-between;
`
const Checkbox = styled.input`
	display: none;
`
const ItemText = styled.label`
	cursor: pointer;
	text-align: left;
	flex: 1 1 auto;
	padding-left: 5%;
`
const ItemButton = styled.label`
	position: relative;
	top: 5px;
	flex: 0 0 auto;
	cursor: pointer;
	box-sizing: border-box;
	width: 14px;
	height: 14px;
	border: 1px solid ${FONTCOLOR};
	border-radius: 50%;
	transition: all 0.4s ease-out 0.5s;
`

export default function Day() {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const date = new Date()
	const dayOfWeek = days[date.getDay()]
	const schedule = [
		{
			text: 'Wallow in self pity',
		},
		{
			text: 'Stare into the abyss',
		},
		{
			text: 'Solve world hunger; Tell no one',
		},
		{
			text: 'Jazz-ercise',
		},
		{
			text: 'Dinner with me',
		},
	]
	function renderScheduleItems() {
		return schedule.map(({text}, index) => (
			<ListItem key={index}>
				<Checkbox
					type="checkbox"
					id={`item-${index}`}
					name={`item-${index}`}
				/>
				<ItemButton for={`item-${index}`} />
				<ItemText for={`item-${index}`}>{text}</ItemText>
			</ListItem>
		))
	}
	return (
		<Layout titleFragment="Day 27 - Checklist">
			<MyFrame>
				<Card>
					<Head>
						<Title>{dayOfWeek}</Title>
						<Subtitle>{date.toDateString().substr(4)}</Subtitle>
					</Head>
					<List>{renderScheduleItems()}</List>
				</Card>
			</MyFrame>
		</Layout>
	)
}
