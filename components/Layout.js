/** @format */

/**
 * https://github.com/vercel/next.js/tree/canary/examples/layout-component
 */

import Head from 'next/head'
import Script from 'next/script'

const meta = {
	title: 'Styled 100',
	short: 'The CSS 100 Challenge implemented with styled-components.',
	url: 'https://styled-100.netlify.app/',
	twitterSite: process.env.NEXT_PUBLIC_TWITTER_SITE,
}
const auData = {
	src: process.env.NEXT_PUBLIC_AU_SRC,
	server: process.env.NEXT_PUBLIC_AU_SERVER,
	domainId: process.env.NEXT_PUBLIC_AU_DOMAIN_ID,
}

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
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.short} />
				<meta name="description" content={meta.short} />
				<meta property="og:url" content={meta.url} />
				<meta name="twitter:site" content={meta.twitterSite} />
				<style>{`
				body {
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
					line-height: 24px;
					font-size: 18px;
				}
				`}</style>
			</Head>
			<Script
				async
				src={auData.src}
				data-ackee-server={auData.server}
				data-ackee-domain-id={auData.domainId}
			></Script>
			{children}
		</>
	)
}
