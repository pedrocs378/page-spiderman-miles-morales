
import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaGithub
} from 'react-icons/fa'

import { FiMenu } from 'react-icons/fi'

import logoSpiderman from '../../assets/svg/logo-spiderman.svg'

import {
	Container,
	NavBar,
	NavMenu,
	Logo,
	NavList,
	NavLink,
	NavSocial,
	BoxMenu,
} from './styles'

function Header() {

	return (
		<Container>
			<NavBar>
				<NavMenu>
					<Logo className="logo">
						<img src={logoSpiderman} alt="Logo" />
					</Logo>
					<NavList className="nav-list">
						<li>
							<NavLink
								href="/"
								rel="noopener noreferrer"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								href="/"
								rel="noopener noreferrer"
							>
								Store
							</NavLink>
						</li>
						<li>
							<NavLink
								href="/"
								rel="noopener noreferrer"
							>
								Wallpapers
							</NavLink>
						</li>
						<li>
							<NavLink
								href="/"
								rel="noopener noreferrer"
							>
								#BeYourself
							</NavLink>
						</li>
					</NavList>
				</NavMenu>
				<NavSocial className="nav-social">
					<a
						href="https://www.github.com/pedrocs378/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.facebook.com/pedrocs378/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF />
					</a>
					<a
						href="https://www.instagram.com/pedrocs378/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
					</a>
					<a href="/" rel="noopener noreferrer">
						<FaYoutube />
					</a>
					<a href="/" rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</NavSocial>
				<BoxMenu>
					<FiMenu />
				</BoxMenu>
			</NavBar>
		</Container>
	)
}

export { Header }
