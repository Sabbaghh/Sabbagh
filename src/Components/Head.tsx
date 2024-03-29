import React from 'react';
import Header from 'next/head';

const description = `
Abdallah Sabbagh is a freelance front-end and mobile developer based in Dubai, UAE, with expertise in HTML, CSS, JavaScript, React, and React Native.
`;

const site = 'https://sabbagh.info';
const img = `${site}/img/avatar/avatar.jpg`;
function Head() {
	return (
		<Header>
			<title>Sabbagh Abdallah</title>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
			></link>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
			></link>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
			></link>
			<link rel='manifest' href='/site.webmanifest'></link>
			<meta name='msapplication-TileColor' content='#da532c'></meta>
			<meta name='theme-color' content='#ffffff'></meta>
			<meta name='description' content={description} />
			<meta name='robots' content='index, follow, archive' />

			{/* Open Graph */}
			<meta property='og:title' content='Abdallah Sabbagh' />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={img} />
			<meta property='og:url' content={site} />
			<meta property='og:type' content='website' />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@Sabbaghh_' />
			<meta name='twitter:title' content='Abdallah Sabbagh' />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={img}></meta>
		</Header>
	);
}

export default Head;
