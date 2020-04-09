/** @format */
/**
 * https://codepen.io/roydigerhund/pen/ZQmbNm
 */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

const menuIconLineHeight = 8
const menuIconLineSpace = 14
const menuIconHeight = 3 * menuIconLineHeight + 2 * menuIconLineSpace

const MenuIcon = styled.div`
	width: 80px;
	height: ${menuIconHeight}px;
	cursor: pointer;
	/* background: red; */
`

const Line = styled.div`
	height: ${menuIconLineHeight}px;
	width: 100%;
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
`

const LineMiddle = styled(Line)`
	margin: ${menuIconLineSpace}px 0;
`

export default function Day1() {
	return (
		<Frame>
			<Center>
				<MenuIcon>
					<Line />
					<LineMiddle />
					<Line />
				</MenuIcon>
			</Center>
		</Frame>
	)
}
