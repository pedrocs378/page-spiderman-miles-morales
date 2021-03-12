
import { BackgroundVideo } from './components/BackgroundVideo';
import { Header } from './components/Header'

import GlobalStyles from './styles/global'

function App() {
	return (
		<div>
			<GlobalStyles />

			<Header />
			<BackgroundVideo />
		</div>
	);
}

export { App };
