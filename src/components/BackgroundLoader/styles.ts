import styled, { keyframes } from 'styled-components'

const logoSpiderman = keyframes`
	0% {
		stroke-width: 0;
		stroke-dasharray: 1 100;
		fill: transparent;
	}
	25% {
		stroke-width: 1;
		fill: transparent;
		stroke-dasharray: 100 0;
	}
	60%, 100% {
		stroke-width: 0.3;
		fill: var(--white-dark);
	}
`

export const Container = styled.section`
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;

	overflow: hidden;
	z-index: 999;

	display: flex;
	align-items: center;
	justify-content: center;

	background: linear-gradient(225deg, var(--red) 0%, var(--red-dark) 100%);

	.logo-spiderman {
		fill: transparent;

		animation: ${logoSpiderman} 12s ease infinite alternate;
	}
`
