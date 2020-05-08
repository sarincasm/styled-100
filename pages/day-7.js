/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const Panel = styled.div`
	position: absolute;
	height: 320px;
	width: 300px;
	background: #fff;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.2);
	transition: all 0.5s ease-in-out;
	color: black;
`

const Header = styled.div`
	position: absolute;
	height: 20%;
	width: 100%;
	background: blue;
`

const MenuIcon = styled.div`
	position: absolute;
	width: 32px;
	height: 20px;
	top: 35%;
	left: 7%;
	cursor: pointer;
`
const MenuIconTop = styled.div`
	position: absolute;
	width: 21px;
	height: 3px;
	top: 0;
	left: 0;
	background: white;
	border-radius: 3px;
	transition: all 0.2s ease-in-out;
`
const MenuIconMiddle = styled(MenuIconTop)`
	width: 30px;
	top: 9px;
`
const MenuIconBottom = styled(MenuIconMiddle)`
	top: 18px;
`
const MenuIconCircle = styled.div`
	position: absolute;
	height: 6.5px;
	width: 6.5px;
	top: -2px;
	right: 0;
	background: white;
	transition: all 0.2s ease-in-out;
`

const Title = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	line-height: 60px;
	color: #fff;
	font-weight: 600;
	font-size: 15px;
`

const Body = styled.div`
	position: absolute;
	top: 20%;
	height: 80%;
	overflow: hidden;
`
const TimelineLine = styled.div`
	position: absolute;
	top: 0;
	left: 27px;
	height: 100%;
	width: 1px;
	background: black;
`

const Notification = styled.div`
	position: relative;
	margin: 25px 20px 25px 43px;
`
const NotificationBullet = styled.div`
	z-index: 2;
	box-sizing: border-box;
	position: absolute;
	height: 11px;
	width: 11px;
	background: #fff;
	border: 1.25px solid blue;
	box-shadow: 0 0 0 1.5px #fff;
	border-radius: 6px;
	top: 0;
	left: -20px;
`
const NotificationTime = styled.div`
	font-size: 0.65em;
	line-height: 0.65em;
	margin-bottom: 8px;
`
const NotificationText = styled.div`
	font-size: 1em;
	line-height: 1.1em;
`

export default function Day() {
	const notificationsData = [
		{
			time: '5 hours ago',
			from: 'Your stalker',
			text: `said hi. Don't reply.`,
		},
		{
			time: 'Yesterday',
			from: 'Your son',
			text: `said hi. Don't reply.`,
		},
		{
			time: '3 days ago',
			from: 'Your crush',
			text: `said hi. Don't reply.`,
		},
	]

	function renderNotification(data) {
		return (
			<Notification key={data.time}>
				<NotificationBullet />
				<NotificationTime>{data.time}</NotificationTime>
				<NotificationText>
					<b>{data.from}</b> {data.text}
				</NotificationText>
			</Notification>
		)
	}
	return (
		<Frame>
			<Center>
				<Panel>
					<Header>
						<MenuIcon>
							<MenuIconTop />
							<MenuIconCircle />
							<MenuIconMiddle />
							<MenuIconBottom />
						</MenuIcon>
						<Title>Notifications</Title>
					</Header>
					<Body>
						<TimelineLine />
						{notificationsData.map(renderNotification)}
					</Body>
				</Panel>
			</Center>
		</Frame>
	)
}
