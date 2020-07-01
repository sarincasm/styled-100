/** @format */

/**
 * https://github.com/zeit/next.js/blob/canary/examples/with-grommet/pages/_app.js
 */

import React from 'react'
import App from 'next/app'
import {Grommet, grommet as grommetTheme} from 'grommet'

export default class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props
		return (
			<Grommet theme={grommetTheme}>
				<Component {...pageProps} />
			</Grommet>
		)
	}
}
