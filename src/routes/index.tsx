import { Route, Switch } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Wallpapers } from '../pages/Wallpapers'

export function Routes() {

	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/wallpapers" component={Wallpapers} />
		</Switch>
	)
}
