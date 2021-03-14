import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaGithub
} from 'react-icons/fa'


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
	OpenBoxButton,
	Box,
	BoxNavSocial,
} from './styles'

function Header() {
	const [showMenu, setShowMenu] = useState(false)

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
								to="/"
								rel="noopener noreferrer"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/"
								rel="noopener noreferrer"
							>
								Store
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/wallpapers"
								rel="noopener noreferrer"
							>
								Wallpapers
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/"
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
					<OpenBoxButton onClick={() => setShowMenu(!showMenu)}>
						{showMenu ? <FiX /> : <FiMenu />}
					</OpenBoxButton>
					{showMenu && (
						<Box>
							<ul>
								<li>
									<Link to="/" rel="noopener noreferrer">Home</Link>
								</li>
								<li>
									<Link to="/" rel="noopener noreferrer">Store</Link>
								</li>
								<li>
									<Link to="/wallpapers" rel="noopener noreferrer">Wallpapers</Link>
								</li>
								<li>
									<Link to="/" rel="noopener noreferrer">#BeYourself</Link>
								</li>

							</ul>
							<BoxNavSocial>
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
							</BoxNavSocial>
						</Box>
					)}
				</BoxMenu>
			</NavBar>
		</Container>
	)
}

export { Header }
