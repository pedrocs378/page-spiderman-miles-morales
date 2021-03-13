import Tilt from 'react-parallax-tilt'

import imgSpiderman from '../../assets/img/spider-man.svg'
import imgSpidermanText from '../../assets/img/spiderman-text.svg'
import iconPlaystation from '../../assets/svg/ps.svg'
import iconMarvel from '../../assets/svg/marvel.svg'

import {
	Container,
	InfoContainer,
	InfoTitle,
	ButtonPrimary,
	ButtonSecondary,
	SponsorContainer,
	SpiderContainer,
} from './styles'

function Home() {

	return (
		<Container>
			<InfoContainer>
				<InfoTitle className="title">
					<img src={imgSpidermanText} alt="Spider Man" />
				</InfoTitle>
				<p className="description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Iaculis velit magna vitae mauris orci fames posuere nibh.
					Sit tellus amet facilisi sit odio pulvinar scelerisque quam et.
					Ultrices facilisis nunc massa diam, quis mi imperdiet.
				</p>

				<div className="buttons">
					<ButtonPrimary href="/">Pre-orden now</ButtonPrimary>
					<ButtonSecondary href="/">Watch the teaser</ButtonSecondary>
				</div>

				<SponsorContainer className="sponsors">
					<img src={iconPlaystation} alt="Playstation" />
					<img src={iconMarvel} alt="Marvel" />
				</SponsorContainer>
			</InfoContainer>
			<SpiderContainer className="spiderman-image">
				<Tilt perspective={2000} scale={1.01}>
					<img src={imgSpiderman} alt="Spider-Man" />
				</Tilt>
			</SpiderContainer>
		</Container>
	)
}

export { Home }
