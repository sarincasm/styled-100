/** @format */

import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import {useState} from 'react'

const Radio = styled.input.attrs({
	type: 'radio',
	name: 'group',
})`
	display: none;
`

const Container = styled.div`
	height: 100%;
	margin: 0 15%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`

const Label = styled.label`
	box-sizing: border-box;
	z-index: 5;
	width: 50px;
	height: 50px;
	border: 2px solid #fff;
	border-radius: 50%;
	cursor: pointer;
`

const Background = styled.div`
	position: absolute;
	width: 400px;
	height: 400px;
	top: 0;
	left: 0;
	background: #3498db;
	border-left: 400px solid #9b59b6;
	border-right: 400px solid #1abc9c;
	transition: all 1s ease;

	&.anim-enter-done {
		transform: ${({offset}) => `translateX(${offset})`};
	}
`

export default function Day() {
	const [selected, setSelected] = useState('check-1')
	const [mount, setMount] = useState(true)
	function handleRadio(event) {
		setMount(false)
		setSelected(event.target.id)
	}
	const offset = {
		'check-1': '0px',
		'check-2': '-400px',
		'check-3': '-800px',
	}
	return (
		<Layout titleFragment="Day 19 - Radio Slider">
			<Frame>
				<Container>
					<Radio id="check-1" onChange={handleRadio} />
					<Label htmlFor="check-1" id="c1" />
					<Radio id="check-2" onChange={handleRadio} />
					<Label htmlFor="check-2" id="c2" />
					<Radio id="check-3" onChange={handleRadio} />
					<Label htmlFor="check-3" id="c3" />
				</Container>
				<CSSTransition
					classNames="anim"
					in={mount}
					timeout={0}
					onExited={() => {
						setMount(true)
					}}
				>
					<Background offset={offset[selected]} />
				</CSSTransition>
			</Frame>
		</Layout>
	)
}
