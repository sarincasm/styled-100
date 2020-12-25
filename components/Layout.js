/** @format */

/**
 * https://github.com/vercel/next.js/tree/canary/examples/layout-component
 */

import Head from 'next/head'

export default function Layout({children, fullTitle, titleFragment}) {
	let title = 'Styled 100'
	if (fullTitle) title = fullTitle
	else if (titleFragment) title = `${titleFragment} - ${title}`
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<style>{`
				body {
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					line-height: 24px;
					font-size: 18px;
				}
				`}</style>
			</Head>
			{children}
		</>
	)
}
