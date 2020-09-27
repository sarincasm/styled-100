/** @format */

import styled from 'styled-components'

import Layout from '../components/Layout'
import Frame from '../components/Frame'
import Center from '../components/Center'

const MyDiv = styled.div``

export default function Day() {
	return (
		<Layout titleFragment="Day Number - Component Title">
			<Frame>
				<Center>
					<MyDiv />
				</Center>
			</Frame>
		</Layout>
	)
}
