import React from 'react';
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Image from '../../components/image';

import bannerImg from '../../assets/banner_b.jpg';

const Banner = () => {
	return (
		<Box sx={styles.banner} id='banner'>
			<Container>
			
					<CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={50}
						totalSlides={3}
					>
						<Slider>
							<Slide index={0}>
								<Image src={bannerImg} alt='' />
							</Slide>
							<Slide index={1}>
								<Image src={bannerImg} alt='' />
							</Slide>
							<Slide index={2}>
								<Image src={bannerImg} alt='' />
							</Slide>
						</Slider>
						
					</CarouselProvider>
			</Container>
			
		</Box>
	);
};

export default Banner;

const styles = {
	banner: {
		pt: ['110px', null, null, null, '150px', '100px'],
		pb: ['50px', null, null, null, '0', null, '0'],
		backgroundColor: '#101332',
		overflow: 'hidden',
	},
	container: {
		width: [null, null, null, null, null, null, '1390px'],
	},
	grid: {
    backgroundColor : 'gold',
		display: 'grid',
		gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
		gridGap: '0',
	},
	content: {
		h3: {
			color: '#4CA3AD',
			fontWeight: 'bold',
			lineHeight: [1.39],
			letterSpacing: ['-.7px', '-1.5px'],
			mb: ['15px', null, null, null, '20px'],
			width: ['100%'],
			maxWidth: ['100%', null, null, '90%', '100%', '540px'],
			fontSize: [6, null, null, '36px', null, '55px', 9],
		},
		p: {
			fontSize: [1, null, null, 2, null, 3],
			lineHeight: ['26px', null, null, null, 2.33],
			color: 'text',
			opacity: '.7',
			mb: ['20px', null, null, null, null, '30px'],
			width: ['100%'],
			maxWidth: ['100%', null, null, null, null, '410px'],
			br: {
				display: ['none', null, null, null, 'inherit'],
			},
		},
	},
	form: {
		mb: ['30px', null, null, null, null, '60px'],
		display: ['flex'],
		input: {
			borderRadius: ['4px'],
			backgroundColor: '#fff',
			width: ['240px', null, null, null, '315px', null, '375px'],
			height: ['45px', null, null, '55px', null, null, '65px'],
			padding: ['0 15px', null, null, '0 25px'],
			fontSize: [1, null, null, 2],
			border: 'none',
			outline: 'none',
			boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
		},
		button: {
			fontSize: [1, null, null, null, 2, '20px'],
			borderRadius: ['4px'],
			padding: ['0 15px'],
			ml: ['10px'],
			width: ['auto', null, null, null, '180px'],
		},
	},
	image: {
		img: {
			display: 'flex',
			mixBlendMode: 'ligthen',
			position: 'relative',
			top: ['0', null, null, null, null, '-40px'],
			maxWidth: ['100%', null, null, null, null, null, 'none'],
		},
	},
	partner: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		mb: ['40px'],
		'> div + div': {
			ml: ['10px', null, null, '20px', null, '30px'],
		},
		img: {
			display: 'flex',
		},
		span: {
			fontSize: [1, null, null, null, 2],
			color: '#566272',
			lineHeight: [1],
			opacity: 0.6,
			display: 'block',
			mb: ['20px', null, null, null, '0px'],
			mr: [null, null, null, null, '20px'],
			flex: ['0 0 100%', null, null, null, '0 0 auto'],
		},
	},
};