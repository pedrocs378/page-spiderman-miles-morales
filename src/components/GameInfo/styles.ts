import styled from 'styled-components'

export const Container = styled.section`
	max-width: 1440px;
	margin: 0 auto;

	padding: 36px 16px;

	overflow: none;

	height: 85vh;

	display: flex;
	flex-direction: row;
	align-items: center;
`

export const InfoContainer = styled.div`
	max-width: 576px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	p {
		margin-top: var(--gap-2);
		margin-bottom: var(--gap-2);
	}
`

export const InfoTitle = styled.div`
	padding-right: var(--gap-1);
	padding-left: var(--gap-1);
`

export const ButtonPrimary = styled.a`
	display: inline-block;

	padding: 12px 32px;
	border-radius: 3px;

	transform: skewX(-10deg);
	transition: 0.7s ease;

	text-transform: uppercase;
	background: linear-gradient(225deg, #EA1D22 0%, #B31317 100%);

	position: relative;

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: -2px;
		left: -2px;
		border-radius: 3px;
		opacity: 0;
		transition: 0.7s ease;

		width: 30%;
		height: 70%;

		border-top: 3px solid #fff;
		border-left: 3px solid #fff;
	}
	&::before {
		content: '';
		display: block;
		position: absolute;
		bottom: -2px;
		right: -2px;
		border-radius: 3px;
		opacity: 0;
		transition: 0.7s ease;

		width: 30%;
		height: 70%;

		border-bottom: 3px solid #fff;
		border-right: 3px solid #fff;
	}

	&:hover {
		transform: skewX(-10deg) scale(1.05);
		&::after {
			opacity: 1;
		}
		&::before {
			opacity: 1;
		}
	}
`

export const ButtonSecondary = styled.a`
	display: inline-block;
	margin-left: var(--gap-2);

	padding: 10px 32px;
	border-radius: 3px;

	transform: skewX(-10deg);
	transition: 0.7s ease;

	text-transform: uppercase;
	background: transparent;

	border: 2px solid var(--red);

	position: relative;

	&::after {
		content: '';
		display: block;
		position: absolute;
		top: -1px;
		left: -1px;

		z-index: -1;

		width: 0;
		height: 103%;
		transition: 0.7s ease;

		background: linear-gradient(225deg, #EA1D22 0%, #B31317 100%);
	}

	&:hover {
		&::after {
			width: 102%;
		}
	}
`

export const SponsorContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: var(--gap-2);

	img {
		width: auto;
	}

	img + img {
		margin-left: var(--gap-2);
	}
`

export const SpiderContainer = styled.div`
`

