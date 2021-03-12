import { useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap'

import { BackgroundLoader } from './components/BackgroundLoader';
import { BackgroundVideo } from './components/BackgroundVideo';
import { GameInfo } from './components/GameInfo';
import { Header } from './components/Header'

import GlobalStyles from './styles/global'

function App() {

	useEffect(() => {
		const timeline = new TimelineMax()

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
	}, [])

	return (
		<div>
			<GlobalStyles />

			<BackgroundLoader />
			<Header />
			<BackgroundVideo />
			<GameInfo />
		</div>
	);
}

export { App };
