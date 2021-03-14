import { useState } from 'react';
import { autoplayPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';

import wallpaper1 from '../../assets/wallpapers/wallpaper1.png'
import wallpaper2 from '../../assets/wallpapers/wallpaper2.png'
import wallpaper3 from '../../assets/wallpapers/wallpaper3.png'
import wallpaper4 from '../../assets/wallpapers/wallpaper4.png'
import wallpaper5 from '../../assets/wallpapers/wallpaper5.png'
import wallpaper6 from '../../assets/wallpapers/wallpaper6.png'

import {
	Container,
	WallpapersContainer,
	CarouselWallpapers,
	DotsWallpapers
} from './styles'

function Wallpapers() {
	const [currentWallpaper, setCurrentWallpaper] = useState(0)

	return (
		<Container>
			<WallpapersContainer>
				<CarouselWallpapers
					className="wallpapers"
					value={currentWallpaper}
					onChange={(value) => setCurrentWallpaper(value)}
					animationSpeed={700}
					plugins={[
						{
							resolve: autoplayPlugin,
							options: {
								interval: 2000,
							}
						}
					]}
				>
					<img src={wallpaper1} alt="Spider Man Wallpaper 1" />
					<img src={wallpaper2} alt="Spider Man Wallpaper 2" />
					<img src={wallpaper3} alt="Spider Man Wallpaper 3" />
					<img src={wallpaper5} alt="Spider Man Wallpaper 5" />
					<img src={wallpaper6} alt="Spider Man Wallpaper 6" />
					<img src={wallpaper4} alt="Spider Man Wallpaper 4" />
				</CarouselWallpapers>
				<DotsWallpapers
					className="wallpapers-dots"
					value={currentWallpaper}
					onChange={(value) => setCurrentWallpaper(value)}
					thumbnails={[
						(<img src={wallpaper1} alt="Spider Man Wallpaper 1" />),
						(<img src={wallpaper2} alt="Spider Man Wallpaper 2" />),
						(<img src={wallpaper3} alt="Spider Man Wallpaper 3" />),
						(<img src={wallpaper5} alt="Spider Man Wallpaper 5" />),
						(<img src={wallpaper6} alt="Spider Man Wallpaper 6" />),
						(<img src={wallpaper4} alt="Spider Man Wallpaper 4" />),
					]}
				/>
			</WallpapersContainer>
		</Container>
	)
}

export { Wallpapers }
