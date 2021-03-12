import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

	:root {
		--blue: #14181F;
		--blue-dark: #0A0C10;
		--blue-light: #272A31;

		--red: #EA1D22;
		--red-dark: #B31317;
		--red-light: #F02A2F;

		--white: #EDF1F7;
		--white-dark: #E5E9EF;
		--white-light: #F4F7FB;

		--gray-1: #B5B6B8;
		--gray-2: #A1A3A5;
		--gray-3: #959698;

		--gap-1: 8px;
		--gap-2: 16px;
		--gap-3: 48px;
		--gap-4: 72px;
		--gap-5: 128px;
	}

	*, *::after, *::before {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Mukta', sans-serif;
	}

	body {
		width: 100%;
		height: 100vh;

		background-color: var(--blue-dark);
	}

	img, svg {
		display: block;
		width: 100%;
	}

	a {
		text-decoration: none;
		color: var(--white);
	}

	p {
		font-size: 16px;
		color: var(--gray-3);
		letter-spacing: 1px;
		line-height: 140%;
	}
`
