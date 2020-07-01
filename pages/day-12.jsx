/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'

const MainColor = '#FF7398'
const Quote = styled.div`
	position: relative;
	margin-top: 90px;
	padding: 0 30px;

	&:before {
		display: block;
		position: absolute;
		z-index: 0;
		content: '„';
		font-family: serif;
		font-size: 250px;
		color: ${MainColor};
		line-height: 35px;
		top: -100px;
		left: 10px;
		opacity: 0.1;
	}
`

const Plain = styled.p`
	position: relative;
	z-index: 1;
	font-size: 25px;
	line-height: 34px;
	margin: 20px 0;
`

const InterestingWord = styled.span`
	position: relative;
	display: inline-block;
	background: ${MainColor};
	padding: 0px 8px 5px 8px;
	margin: -10px 0;
	cursor: pointer;
`

const ToolTip = styled.span`
	box-sizing: border-box;
	position: absolute;
	bottom: 55px;
	left: -85px;
	display: block;
	background: ${MainColor};
	width: 300px;
	font-size: 16px;
	line-height: 24px;
	cursor: text;
	visibility: hidden;
	opacity: 0;
	transform: translateY(-20px);
	transition: all 0.5s ease-out;

	${InterestingWord}:hover & {
		visibility: visible;
		opacity: 1;
		transform: translateY(0);
	}

	&:after {
		position: absolute;
		content: '';
		width: 10px;
		height: 10px;
		transform: rotate(45deg);
		bottom: -5px;
		left: 50%;
		margin-left: -5px;
		background: ${MainColor};
	}
`
const ToolTipText = styled.span`
	display: block;
	padding: 15px 17px;
`

const Author = styled.p`
	font-weight: 300;
	font-style: italic;
	font-size: 20px;
	line-height: 30px;
`

export default function Day() {
	const textStart = 'I think everybody should get rich and '
	const interestingWord = 'famous'
	const toolTipText = `Famous, Known about by many many people`
	const textEnd = ` and do everything they ever dreamed of, so they can see that it's not the answer.`
	const author = 'Jim Carrey'

	const formattedToolTipText = toolTipText.split(',')
	return (
		<Frame>
			<Quote>
				<Plain>
					{textStart}
					<InterestingWord>
						{interestingWord}
						<ToolTip>
							<ToolTipText>
								<b>{formattedToolTipText[0]}</b>,{' '}
								{formattedToolTipText[1]}
							</ToolTipText>
						</ToolTip>
					</InterestingWord>
					{textEnd}
				</Plain>
				<Author>{author}</Author>
			</Quote>
		</Frame>
	)
}
