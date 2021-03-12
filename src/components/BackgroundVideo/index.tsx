
import spidermanVideo from '../../assets/video/spiderman2.mp4'

import {
	VideoContainer,
} from './styles'

function BackgroundVideo() {

	return (
		<VideoContainer>
			<video autoPlay muted loop>
				<source src={spidermanVideo} type="video/mp4" />
			</video>
		</VideoContainer>
	)
}

export { BackgroundVideo }
