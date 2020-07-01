/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'

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
	/* display: none; */
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	/* pointer-events: none; */
	font-size: 0;
`

const Header = styled.img`
	position: absolute;
	transform: translate3d(0, 0, 0);
	transition: all 0.8s ease-out;
	margin: 0;
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
	/* transform: translate3d(0, -250px, 0); */
	transition: all 1s ease-in 0.2s;

	img {
		width: 100%;
		height: auto;
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
	transition: background 0.3s ease-in-out, transform 0.5s ease-in;
	/* transform: rotate(45deg) translate3d(-105%, -105%, 0); */
	transform: rotate(45deg);
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
			background: $red;
		}
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
	transition: all 1s ease-in 0.5s;
	/* transform: ${(props) =>
		props.active ? 'translateY(0)' : 'translateY(105%)'}; */
	/* transition: all 0.8s ease-out; */
`

const Name = styled.div`
	font-size: 16px;
	font-weight: 600;
	text-align: center;
`

const ButtonGroup = styled.div`
	margin-top: 35px;
	text-align: center;
`
const Button = styled.div`
	position: relative;
	box-sizing: border-box;
	display: inline-block;
	width: 45px;
	height: 45px;
	border: 1px solid #fff;
	margin: 0 20px;
	border-radius: 50%;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background: #fff;
		color: $red;
		box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.2);
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
	return (
		<Frame>
			{renderProfiles()}
			<Detail>
				<CloseButton />
				<Header src="https://100dayscss.com/codepen/13-1-header.jpg" />
				<DetailImage>
					<img
						src="https://100dayscss.com/codepen/13-1.jpg"
						alt="profile pic"
					/>
				</DetailImage>
				<Info active={true}>
					<Name>Eels Web</Name>
					<ButtonGroup>
						<Button></Button>
						<Button></Button>
						<Button></Button>
					</ButtonGroup>
				</Info>
			</Detail>
		</Frame>
	)
}
