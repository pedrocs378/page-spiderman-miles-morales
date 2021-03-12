
import { BackgroundVideo } from './components/BackgroundVideo';
import { GameInfo } from './components/GameInfo';
import { Header } from './components/Header'

import GlobalStyles from './styles/global'

function App() {
	return (
		<div>
			<GlobalStyles />

			<Header />
			<BackgroundVideo />
			<GameInfo />
		</div>
	);
}

export { App };
