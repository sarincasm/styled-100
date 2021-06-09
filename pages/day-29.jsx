/** @format */

import styled from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import {useState} from 'react'

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
	width: 100%;
	height: 40px;
	border: none;
	border-radius: 5px;
	font-size: 0.95em;
	padding: 0 10px;
	color: ${Colors.Text};
`

const Suggestions = styled.ul`
	width: 120%;
	position: relative;
	left: -10%;
	font-weight: 400;
	line-height: 1.2em;
	padding: 3px 0;
	margin: 0;
	list-style: none;
	color: ${Colors.Suggestions};
`
const Item = styled.li`
	background: #fff;
	font-size: 0.85em;
	padding: 8px 10px;
	cursor: pointer;
`

export default function Day() {
	const [q, setQ] = useState('')
	function renderSearchResults() {
		if (!q) return
		const items = [
			[<b>{q}</b>],
			['Very match ', <b>{q}</b>],
			['Match in the ', <b>{q}</b>, ' middle'],
		]

		return (
			<Suggestions>
				{items.map((elements, index) => (
					<Item key={index}>
						{elements.map((elem, index) => (
							<span key={index}>{elem}</span>
						))}
					</Item>
				))}
			</Suggestions>
		)
	}
	return (
		<Layout titleFragment="Day 29 - Search">
			<MyFrame>
				<Search>
					<SearchInput
						type="text"
						placeholder="Type to Search"
						value={q}
						onChange={(e) => {
							setQ(e.target.value)
						}}
					/>
					{renderSearchResults()}
				</Search>
			</MyFrame>
		</Layout>
	)
}
