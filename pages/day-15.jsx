/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

import {CloudUpload} from 'grommet-icons'

const MyCenter = styled(Center)`
	width: 300px;
	height: 260px;
	background: #fff;
	box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);
	border-radius: 3px;
`

const Title = styled.div`
	font-size: 16px;
	line-height: 50px;
	font-weight: bold;
	color: black;
	height: 20%;
	border-bottom: 1px solid #d8d8d8;
	text-align: center;
`

const Dropzone = styled.div`
	position: absolute;
	/* z-index: 1; */
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding-bottom: 14%;
	width: 100%;
	height: 80%;
	border: 1px dashed #a4a4a4;
	border-radius: 3px;
	text-align: center;
	overflow: hidden;
`

const UploadButton = styled.div`
	position: absolute;
	width: 70%;
	height: 16%;
	left: 15%;
	bottom: 8%;
	background: #6ece3b;
	border-radius: 3px;
	text-align: center;
	line-height: 40px;
	font-size: 14px;
	box-shadow: 0 2px 0 0 #498c25;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0 2px 0 0 #498c25, 0 2px 10px 0 #6ece3b;
	}
`

export default function Day() {
	return (
		<Frame>
			<MyCenter>
				<Title>Drop File Below To Upload</Title>
				<Dropzone>
					<CloudUpload size="large" color="black" />
				</Dropzone>
				<UploadButton>Upload File</UploadButton>
			</MyCenter>
		</Frame>
	)
}
