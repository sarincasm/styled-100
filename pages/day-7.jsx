/** @format */

import styled, {keyframes, css} from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

import {
	Search,
	Dashboard,
	User,
	Chat,
	Configure,
	Notification,
	Close,
} from 'grommet-icons'
import {useState} from 'react'

const colors = ['#A39CFF', '#8E9EE8', '#9CFDFF', '#4D3DEB', '#992BFF']

const Panel = styled.div`
	z-index: 2;
	position: absolute;
	height: 320px;
	width: 300px;
	background: #fff;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.2);
	transition: all 0.5s ease-in-out;
	transform: ${(props) =>
		props.isMenuActive ? 'translate(5%, -50%)' : 'translate(-50%, -50%)'};
`

const Header = styled.div`
	position: absolute;
	height: 20%;
	width: 100%;
	background: ${colors[0]};
`

const MenuIcon = styled.div`
	position: absolute;
	width: 32px;
	height: 20px;
	top: 35%;
	left: 7%;
	cursor: pointer;
	opacity: ${(props) => (props.active ? 1 : 0.7)};
	&:hover {
		opacity: 1;
	}
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

const SearchIcon = styled.div`
	position: absolute;
	top: 18px;
	right: 20px;
	transition: all 0.3s ease;
	cursor: pointer;
	opacity: ${(props) => (props.active ? 1 : 0.7)};
	&:hover {
		opacity: 1;
	}
`
const SearchInput = styled.input`
	box-sizing: border-box;
	position: absolute;
	top: 20%;
	right: 55px;
	width: 230px;
	height: 60%;
	border-radius: 20px;
	border: none;
	background: #fff;
	padding: 0 20px;
	font-size: 1.1em;
	color: ${colors[4]};
	transition: all 0.3s ease-in-out;
	transform: ${(props) =>
		props.active ? 'translateX()' : 'translateX(15px)'};
	opacity: ${(props) => (props.active ? 1 : 0)};
	pointer-events: ${(props) => (props.active ? 'default' : 'none')};
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
	width: 2px;
	background: ${colors[0]};
`

const NotificationAnimation = keyframes`
from {
		transform: translateY(50px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`
const NotificationDiv = styled.div`
	position: relative;
	margin: 25px 20px 25px 43px;
	animation: ${(props) =>
		css`
			${NotificationAnimation} 0.5s ease-out ${props.index * 0.5}s
		`};
	animation-fill-mode: both;
`
const NotificationBullet = styled.div`
	z-index: 2;
	box-sizing: border-box;
	position: absolute;
	height: 11px;
	width: 11px;
	background: #fff;
	border: 1.5px solid ${colors[0]};
	box-shadow: 0 0 0 1.5px #fff;
	border-radius: 6px;
	top: 0;
	left: -20px;
`
const NotificationTime = styled.div`
	font-size: 0.65em;
	line-height: 0.65em;
	margin-bottom: 8px;
	color: ${colors[3]};
`
const NotificationText = styled.div`
	font-size: 1em;
	line-height: 1.1em;
	color: ${colors[4]};
`

const Menu = styled.div`
	position: absolute;
	width: 180px;
	height: 300px;
	top: -150px;
	left: -150px;
	background: ${colors[3]};
	border-radius: 8px;
	transition: all 0.6s ease-in-out;
	transform: ${(props) =>
		props.active ? 'translateX(0)' : 'translateX(50px)'};
`
const List = styled.ul`
	padding: 2px 0;
`
const MenuItem = styled.li`
	color: ${colors[2]};
	margin: 5px 0;
	padding: 23px 17px;
	list-style: none;
	font-size: 16px;
	line-height: 16px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: #fff;
		background: ${colors[1]};
	}

	span {
		float: left;
		margin-right: 8px;
		transform: translateY(-50%);
	}
`
const MenuItemIcon = styled.div`
	opacity: 0.6;
	transition: all 0.3s ease-in-out;
	${MenuItem}:hover & {
		opacity: 1;
	}
`

export default function Day() {
	const [isSearchActive, setSearchState] = useState(false)
	const [isMenuActive, setMenuState] = useState(false)
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
	const menuItems = [
		{
			label: 'Dashboard',
			icon: Dashboard,
		},
		{
			label: 'Profile',
			icon: User,
		},
		{
			label: 'Notifications',
			icon: Notification,
		},
		{
			label: 'Messages',
			icon: Chat,
		},
		{
			label: 'Settings',
			icon: Configure,
		},
	]

	function renderNotification(data, index) {
		return (
			<NotificationDiv index={index} key={data.time}>
				<NotificationBullet />
				<NotificationTime>{data.time}</NotificationTime>
				<NotificationText>
					<b>{data.from}</b> {data.text}
				</NotificationText>
			</NotificationDiv>
		)
	}

	function renderMenuItem(item) {
		return (
			<MenuItem key={item.label}>
				<span>
					<MenuItemIcon as={item.icon} color="white" />
				</span>
				<span>{item.label}</span>
			</MenuItem>
		)
	}
	return (
		<Frame>
			<Center>
				<Panel isMenuActive={isMenuActive}>
					<Header>
						<MenuIcon
							active={isMenuActive}
							onClick={() => {
								setMenuState(!isMenuActive)
							}}
						>
							<MenuIconTop />
							<MenuIconCircle />
							<MenuIconMiddle />
							<MenuIconBottom />
						</MenuIcon>
						<Title>Notifications</Title>
						<SearchIcon
							color="white"
							active={isSearchActive}
							onClick={() => {
								setSearchState(!isSearchActive)
							}}
							as={isSearchActive ? Close : Search}
						/>
						<SearchInput
							active={isSearchActive}
							type="text"
							placeholder="Search"
						/>
					</Header>
					<Body>
						<TimelineLine />
						{notificationsData.map(renderNotification)}
					</Body>
				</Panel>
				<Menu active={isMenuActive}>
					<List>{menuItems.map(renderMenuItem)}</List>
				</Menu>
			</Center>
		</Frame>
	)
}
