/** @format */

import styled, {css, keyframes} from 'styled-components'

import Frame from '../components/Frame'
import Center from '../components/Center'

import {CloudUpload, Checkmark} from 'grommet-icons'
import {useState} from 'react'

const MyCenter = styled(Center)`
	width: 300px;
	height: 260px;
	background: #fff;
	box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);
	border-radius: 3px;
`

const themeColor = '#8DFA50'
const themeColorDark = '#557046'

const BarAnimation = keyframes`
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
`
const ProgressBar = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 6px;
	top: 20%;
	left: 0;
	background: ${themeColor};
	transition: all 2s ease-out;
	transform: scaleX(0);
	transform-origin: 0 0;
	animation: ${BarAnimation} 3.5s;
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

const DropAnimation = keyframes`
	from {
		background: white;
	}
	to {
		background: ${themeColor};
	}
`
const Dropzone = styled.div`
	position: absolute;
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
	animation: ${({animationState}) =>
		animationState
			? css`
					${DropAnimation} .6s infinite alternate
			  `
			: 'none'};
`

const FileName = styled.span`
	display: block;
	color: black;
	font-size: 14px;
	line-height: 18px;
	padding-left: 5px;
`

const Input = styled.input`
	position: absolute;
	opacity: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
`

const UploadAnimation = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`
const UploadIcon = styled.span`
	animation: ${({uploading}) =>
		uploading === 'uploading'
			? css`
					${UploadAnimation} .5s infinite alternate
			  `
			: 'none'};
`

const UploadButton = styled.button`
	position: absolute;
	width: 70%;
	height: 16%;
	left: 15%;
	bottom: 8%;
	background: ${({background}) => background};
	border-radius: 3px;
	border-width: 0;
	text-align: center;
	line-height: 40px;
	font-size: 14px;
	box-shadow: ${({clickable}) => (clickable ? '0 2px 0 0 #498c25' : 'none')};
	transition: all 0.2s ease-in-out;
	cursor: ${({clickable}) => (clickable ? 'pointer' : 'initial')};

	&:hover {
		box-shadow: ${({clickable}) =>
			clickable ? '1px 3px 8px 0 black' : 'initial'};
	}
`

export default function Day() {
	const [fileName, setFileName] = useState('')
	const [dragOver, setDragOver] = useState(false)
	const [fileReady, setFileReady] = useState(false)
	const [uploading, setUploading] = useState('disabled')

	function dragHandler() {
		setDragOver(true)
	}

	function dragEndHandler(event) {
		setTimeout(() => {
			setDragOver(false)
		}, 250)
	}

	function inputHandler(event) {
		const file = event.target.files[0]
		if (file) setFileName(file.name)
		setFileReady(true)
	}

	function clickHandler() {
		if (!fileReady) return
		setUploading('uploading')
		setTimeout(() => {
			setUploading('done')
		}, 4000)
	}

	const texts = {
		title: {
			false: 'Drop File Below To Begin',
			true: 'Click Button To Upload',
		},
		button: {
			disabled: 'Upload File',
			uploading: 'Uploading',
			done: 'Upload Complete',
		},
	}

	const Icon = uploading === 'done' ? Checkmark : CloudUpload

	return (
		<Frame>
			<MyCenter>
				{uploading === 'uploading' ? <ProgressBar /> : ''}
				<Title>{texts.title[fileReady]}</Title>
				<Dropzone animationState={dragOver ? true : false}>
					<UploadIcon uploading={uploading}>
						<Icon
							size={dragOver ? 'large' : 'medium'}
							color={dragOver ? 'red' : themeColorDark}
						/>
					</UploadIcon>
					<FileName>{fileName}</FileName>
					<Input
						type="file"
						onChange={inputHandler}
						onDragEnter={dragHandler}
						onDragLeave={dragEndHandler}
						onDrop={dragEndHandler}
					/>
				</Dropzone>
				<UploadButton
					onClick={clickHandler}
					background={fileReady ? themeColor : 'grey'}
					clickable={fileReady}
					disabled={!fileReady}
				>
					{texts.button[uploading]}
				</UploadButton>
			</MyCenter>
		</Frame>
	)
}
