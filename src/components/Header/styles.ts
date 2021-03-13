import styled, { css } from 'styled-components'

const hideMedia = css`
	@media screen and (max-width: 960px) {
		display: none;
	}
`

const showMedia = css`
	@media screen and (max-width: 960px) {
		display: block;
	}
`

export const Container = styled.header`
	width: 100%;
	padding-top: 16px;
`

export const NavBar = styled.nav`
	max-width: 1440px;
	margin: 0 auto;

	padding: 0 16px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
`

export const Logo = styled.div`
	max-width: 88px;
`

export const NavList = styled.ul`
	display: flex;
	list-style: none;

	li {
		margin-left: 24px;
	}

	li:last-child a {
		color: var(--red-dark);

		&:hover {
			color: var(--white-light);
		}
	}

	${hideMedia}
`

export const NavLink = styled.a`
	display: inline-block;

	font-size: 14px;
	letter-spacing: 2px;
	text-transform: uppercase;
	font-weight: 200;

	color: var(--gray-3);

	padding: 8px 16px;
	transition: 0.7s ease;

	position: relative;

	&::after {
		content: '';
		display: block;
		position: absolute;
		transition: 0.5s ease;

		top: -40px;
		left: 50%;

		width: 2px;
		height: 0px;
		background: linear-gradient(180deg, rgba(233, 29, 34, 0) 0%, #E91D22 100%);
	}

	&:hover {
		color: var(--white-light);

		&::after {
			height: 40px;
		}
	}
`

export const NavSocial = styled.div`
	display: flex;

	svg {
		cursor: pointer;
		margin-left: 16px;
		color: var(--gray-3);
		height: 20px;
		width: 20px;

		transition: 0.5s ease;

		&:hover {

			color: var(--red-light);
			transform: translate3d(0,-3px,0);

		}
	}

	${hideMedia}
`

export const BoxMenu = styled.div`
	display: none;
	cursor: pointer;

	svg {
		color: var(--gray-3);
		width: 38px;
		height: 38px;
	}

	${showMedia}
`
