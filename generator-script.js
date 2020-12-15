/** @format */

const path = require('path')
const fse = require('fs-extra')
const prompts = require('prompts')
const _ = require('lodash')
const {template} = _

_.templateSettings.interpolate = /<%=([\s\S]+?)%>/g

async function generateComponentFile({fullPath, dayNumber, componentTitle}) {
	const templateString = (
		await fse.readFile(__dirname + '/components/day.template')
	).toString()
	const fileString = template(templateString)({
		dayNumber,
		componentTitle,
	})
	await fse.writeFile(fullPath + '/day-' + dayNumber + '.jsx', fileString)
}

async function updateIndexFile({fullPath, dayNumber}) {
	const templateString = (
		await fse.readFile(__dirname + '/pages/index.jsx')
	).toString()
	const fileString = templateString.replace(
		`const daysDone = ${parseInt(dayNumber) - 1}`,
		`const daysDone = ${parseInt(dayNumber)}`
	)
	await fse.writeFile(fullPath + '/index.jsx', fileString)
}

async function generateBoilerPlate({baseDirectory, response}) {
	const {dayNumber, componentTitle} = response
	const fullPath = path.resolve(baseDirectory)
	await fse.ensureDir(fullPath)
	await Promise.all([
		generateComponentFile({fullPath, dayNumber, componentTitle}),
		updateIndexFile({fullPath, dayNumber}),
	])
}

async function generator() {
	const detailsNeeded = [
		{
			type: 'text',
			name: 'dayNumber',
			message: 'Enter Day Number',
		},
		{
			type: 'text',
			name: 'componentTitle',
			message: 'Enter Component Title',
		},
	]
	const response = await prompts(detailsNeeded)
	await generateBoilerPlate({
		baseDirectory: process.cwd() + `/pages/`,
		response,
	})
}

if (require.main === module) {
	generator()
}
