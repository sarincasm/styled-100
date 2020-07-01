/** @format */

import styled, {keyframes} from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const colors = {
	background: '#C1A1FF',
	profile: '#A1E5FF',
	stats: '#9892E8',
	statsBackground: '#F5E8DF',
}

const Container = styled.div`
	width: 318px;
	height: 318px;
	background: ${colors.background};
	border-radius: 50px;
`

const Profile = styled.div`
	float: left;
	width: 200px;
	text-align: center;
	color: ${colors.profile};
`
const ImageContainer = styled.div`
	position: relative;
	width: 70px;
	height: 70px;
	margin: 38px auto 0 auto;
`
const CircleAnimation = keyframes`
0%, 5% {
  transform: rotate(-360deg);
}
40%, 100% {
  transform: rotate(360deg);
}
`
const Circle1 = styled.div`
	position: absolute;
	top: -3px;
	left: -3px;
	box-sizing: border-box;
	width: 76px;
	height: 76px;
	border-width: 2px;
	border-style: solid;
	border-radius: 50%;
	border-color: ${colors.profile} ${colors.profile} ${colors.profile}
		transparent;

	animation: ${CircleAnimation} ease-in-out 10s infinite;
`
const Circle2 = styled(Circle1)`
	width: 82px;
	height: 82px;
	top: -6px;
	left: -6px;
	border-color: ${colors.profile} transparent ${colors.profile}
		${colors.profile};

	animation: ${CircleAnimation} ease-in-out 12s infinite;
`
const Image = styled.img`
	border-radius: 50%;
`

const Name = styled.div`
	margin-top: 20px;
	font-size: 1.5em;
	font-weight: 600;
`
const Title = styled.div`
	font-size: 0.75em;
`

const Actions = styled.div`
	margin-top: 33px;
`
const Button = styled.button`
	width: 120px;
	height: 30px;
	margin: 0 auto 10px auto;
	background: none;
	border: 1px solid ${colors.profile};
	color: ${colors.profile};
	border-radius: 14px;
	box-sizing: border-box;
	font-size: 0.8em;
	font-weight: 600;
	cursor: pointer;

	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${colors.profile};
		color: ${colors.background};
		font-weight: 400;
	}
`

const Stats = styled.div`
	float: left;
	color: ${colors.stats};
`
const Box = styled.div`
	box-sizing: border-box;
	width: 118px;
	height: 106px;
	background: ${colors.statsBackground};
	text-align: center;
	padding-top: 28px;
	transition: all 0.3s ease-in-out;

	&:hover {
		background: ${colors.profile};
		cursor: pointer;
	}
`

const Value = styled.span`
	display: block;
	font-size: 1.3em;
	font-weight: 600;
`
const Label = styled.span`
	display: block;
	font-size: 0.9em;
`

export default function Day() {
	function renderStats({label, value}) {
		return (
			<Box key={label}>
				<Value>{value}</Value>
				<Label>{label}</Label>
			</Box>
		)
	}
	const stats = [
		{
			label: 'Posts',
			value: parseInt(Math.random() * 1000),
		},
		{
			label: 'Likes',
			value: parseInt(Math.random() * 10000),
		},
		{
			label: 'Followers',
			value: parseInt(Math.random() * 1000),
		},
	]
	return (
		<Frame>
			<Center>
				<Container>
					<Profile>
						<ImageContainer>
							<Circle1 />
							<Circle2 />
							<Image
								src="/images/ZarteSide.jpg"
								width="70"
								height="70"
								alt="Jessica Potter"
							></Image>
						</ImageContainer>
						<Name>Zarte</Name>
						<Title>Traveller</Title>
						<Actions>
							<Button>Follow</Button>
							<Button>Message</Button>
						</Actions>
					</Profile>
					<Stats>{stats.map(renderStats)}</Stats>
				</Container>
			</Center>
		</Frame>
	)
}
