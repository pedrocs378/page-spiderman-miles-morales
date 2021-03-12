
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

import logoSpiderman from '../../assets/svg/logo-spiderman.svg'

import {
	Container,
	NavBar,
	NavMenu,
	Logo,
	NavList,
	NavLink,
	NavSocial,
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
							<NavLink href="/">Home</NavLink>
						</li>
						<li>
							<NavLink href="/">Store</NavLink>
						</li>
						<li>
							<NavLink href="/">Wallpapers</NavLink>
						</li>
						<li>
							<NavLink href="/">#BeYourself</NavLink>
						</li>
					</NavList>
				</NavMenu>
				<NavSocial className="nav-social">
					<FaFacebookF />
					<FaInstagram />
					<FaYoutube />
					<FaTwitter />
				</NavSocial>
			</NavBar>
		</Container>
	)
}

export { Header }
