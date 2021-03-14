import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'

import { BackgroundVideo } from './components/BackgroundVideo';
import { Header } from './components/Header'

import { Routes } from './routes'

import GlobalStyles from './styles/global'

function App() {

	useEffect(() => {
		const isLoaded = localStorage.getItem('@SpiderMan:isLoaded')

		if (!isLoaded) {
			localStorage.setItem('@SpiderMan:isLoaded', 'false')
		}
	}, [])

	return (
		<BrowserRouter>
			<GlobalStyles />

			<BackgroundVideo />

			<Header />

			<Routes />
		</BrowserRouter>
	);
}

export { App };
