import { useEffect, useMemo } from 'react'
import { TimelineMax, Expo } from 'gsap'
import Tilt from 'react-parallax-tilt'

import { BackgroundLoader } from '../../components/BackgroundLoader'

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

	const isLoaded = useMemo(() => {
		const data = localStorage.getItem('@SpiderMan:isLoaded')
		const dataParsed = JSON.parse(data || 'false')

		return dataParsed as Boolean
	}, [])

	useEffect(() => {
		const timeline = new TimelineMax()

		if (isLoaded) {
			timeline
				.fromTo(
					'.logo',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.nav-list',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.nav-social',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.title',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.description',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.buttons',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.sponsors',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.spiderman-image',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
		} else {
			timeline
				.fromTo(
					'.bg-loader',
					{ width: '100%' },
					{ width: '0%', delay: 5, duration: 2, ease: Expo.easeInOut }
				)
				.fromTo(
					'.bg-video',
					{ width: '0%', opacity: 0 },
					{ width: '100%', opacity: 1, duration: 2, ease: Expo.easeInOut },
					'-=1'
				)
				.fromTo(
					'.logo',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.nav-list',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.nav-social',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.title',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.description',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.buttons',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.sponsors',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.fromTo(
					'.spiderman-image',
					{ y: -50, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
					'-=0.5'
				)
				.then(() => {
					localStorage.setItem('@SpiderMan:isLoaded', 'true')
				})
		}

	}, [isLoaded])

	return (
		<Container>
			{!isLoaded && <BackgroundLoader />}

			<SpiderContainer className="spiderman-image">
				<Tilt perspective={2000} scale={1.01}>
					<img src={imgSpiderman} alt="Spider-Man" />
				</Tilt>
			</SpiderContainer>

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

		</Container>
	)
}

export { Home }
