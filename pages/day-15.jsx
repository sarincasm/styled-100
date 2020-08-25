/** @format */

import styled from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

import {CloudUpload} from 'grommet-icons'
import {useState} from 'react'

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
	z-index: 1;
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50%;
	border: 1px dashed #a4a4a4;
	border-radius: 3px;
	text-align: center;
	overflow: hidden;
`

const FileName = styled.span`
	display: block;
	color: #676767;
	font-size: 14px;
	line-height: 18px;
`

const Input = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0;
	width: 100%;
	cursor: pointer;
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
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: 0 2px 0 0 #498c25, 0 2px 10px 0 #6ece3b;
	}
`

export default function Day() {
	const [fileName, setFileName] = useState('')

	function dragHandler(event) {
		// console.log(event)
		// console.log(event.dataTransfer)
	}

	function inputHandler(event) {
		console.log(event)
		console.log(event.target.files)
		const file = event.target.files[0]
		if (file) setFileName(file.name)
	}

	return (
		<Frame>
			<MyCenter>
				<Title>Drop File Below To Upload</Title>
				<Dropzone onDrop={dragHandler}>
					<CloudUpload size="large" color="black" />
					<FileName>{fileName}</FileName>
					<Input type="file" onChange={inputHandler} />
				</Dropzone>
				<UploadButton>Upload File</UploadButton>
			</MyCenter>
		</Frame>
	)
}
