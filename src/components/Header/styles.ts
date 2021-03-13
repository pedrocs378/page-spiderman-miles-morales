import styled, { css, keyframes } from 'styled-components'

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

const boxMenuAnimation = keyframes`
	from {
		opacity: 0;
		transform: translateY(8%);
	}

	to {
		opacity: 1;
		transform: translateY(0);
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
	font-weight: 300;

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
	position: relative;

	${showMedia}
`

export const OpenBoxButton = styled.button`
	cursor: pointer;
	background: transparent;
	border: 0;
	outline: none;

	svg {
		color: var(--gray-3);
		width: 38px;
		height: 38px;

		transition: color 0.1s;

		&:hover {
			color: var(--white);
		}
	}
`

export const Box = styled.div`
	position: absolute;
	right: 0;

	height: 200px;
	width: 200px;
	border-radius: 8px;
	background: var(--blue-light);
	z-index: 1;

	animation: ${boxMenuAnimation} 400ms;

	ul {
		height: 100%;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		li {
			padding: 8px 16px;

			a {
				font-size: 14px;
				letter-spacing: 2px;
				text-transform: uppercase;
				font-weight: 300;
				transition: 0.7s ease;

				color: var(--gray-3);
			}

			&:last-child {
				a {
					color: var(--red-dark);
				}
			}

			&, &:last-child {
				&:hover {
					a {
						color: var(--white);
					}
				}
			}
		}
	}
`

