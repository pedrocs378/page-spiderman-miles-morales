import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { TimelineMax, Expo } from 'gsap'

import { BackgroundLoader } from './components/BackgroundLoader';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Header } from './components/Header'

import { Routes } from './routes'

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
			.fromTo(
				'.wallpapers',
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
				'-=0.5'
			)
			.fromTo(
				'.wallpapers-dots',
				{ y: -50, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.7, ease: Expo.easeInOut },
				'-=0.5'
			)
	}, [])

	return (
		<BrowserRouter>
			<GlobalStyles />

			<BackgroundLoader />
			<BackgroundVideo />

			<Header />

			<Routes />
		</BrowserRouter>
	);
}

export { App };
