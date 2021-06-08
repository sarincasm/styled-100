/** @format */

import styled from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'

const BG_COLOR = '#5CA4EA'
const MyFrame = styled(Frame)`
	background: ${BG_COLOR};
	display: flex;
	align-items: center;
	justify-content: center;
`

const Colors = {
	Text: '#4D8DCB',
	Suggestions: '#6E6E6E',
}

const Search = styled.div`
	position: absolute;
	width: 70%;

	box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
`

const SearchInput = styled.input`
	width: 80%;
	height: 40px;
	border: none;
	border-radius: 0;
	background: #fff;
	-webkit-appearance: none;
	font-size: 1em;
	font-weight: 600;
	padding: 0 0 0 10px;
	color: ${Colors.Text};
`

const Suggestions = styled.ul`
	font-size: 1em;
	font-weight: 400;
	line-height: 1.2em;
	background: transparent;
	padding: 1px 0;
	margin: 0;
	list-style: none;
	color: ${Colors.Suggestions};
`
const Item = styled.li`
	background: #fff;
	margin: 0;
	padding: 8px 10px;
	cursor: pointer;

	b {
		font-weight: 600;
	}
`

export default function Day() {
	return (
		<Layout titleFragment="Day 29 - Search">
			<MyFrame>
				<Search>
					<SearchInput type="text" placeholder="Type to Search" />
					<Suggestions>
						<Item>
							Well <b>Hello </b>Hi
						</Item>
					</Suggestions>
				</Search>
			</MyFrame>
		</Layout>
	)
}
