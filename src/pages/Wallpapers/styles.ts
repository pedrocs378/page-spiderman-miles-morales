import styled from 'styled-components'
import Carousel, { Dots } from '@brainhubeu/react-carousel'

export const Container = styled.section`
	max-width: 1440px;
	margin: 0 auto;

	padding: 36px 16px;

	height: 85vh;
`

export const WallpapersContainer = styled.div`
	margin: 0 auto;
	width: 100%;

	position: relative;
`

export const CarouselWallpapers = styled(Carousel)`
	max-height: 700px;
	margin-bottom: 10px;
	border-radius: 8px;
`

export const DotsWallpapers = styled(Dots)`
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);

	.BrainhubCarousel__thumbnail {
		background-color: transparent;
		max-width: 130px;
	}

	.BrainhubCarousel__thumbnail img {
		border-radius: 3px;
	}

	.BrainhubCarousel__thumbnail:not(.BrainhubCarousel__thumbnail--selected) {
		opacity: 0.4;
	}
`
