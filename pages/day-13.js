/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

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

export default function Day() {
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
		return profiles.map((profile) => (
			<Profile key={profile.img}>
				<img src={profile.img} alt={profile.alt} width="192px" />
				<Overlay />
				<Plus />
			</Profile>
		))
	}
	return <Frame>{renderProfiles()}</Frame>
}
