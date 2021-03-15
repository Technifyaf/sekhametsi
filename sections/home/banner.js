/** @jsxRuntime classic */

/** @jsx jsx */

import React from 'react';
import {
	Box,
	Container,
	Grid,
	Button,
	Input,
	Heading,
	Text,
	Flex,
	jsx,
} from 'theme-ui';

import Image from '../../components/image';

import bannerImg from '../../assets/slide.jpg';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/captioned.css';
import { Link } from 'react-scroll';



const slides = [
	{
		title: 'Who we are',
		description:
			'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
		button: 'Read More',
		image: bannerImg,
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
		link : '/whoweare'
	},
	{
		title: 'What we do',
		description:
			'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Samantha',
		userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
		link : '/whoweare'

	},
	{
		title: 'Our gift section',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.',
		button: 'Discover',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Michael',
		userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
		link : '/whoweare'

	},
];

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
	return (
		<Box sx={styles.banner}>
		<Box sx ={styles.content}>
			<AutoplaySlider sx ={styles.slider}
			play={true}
			cancelOnInteraction={false} // should stop playing on user interaction
			interval={2000}
		

			>
				{slides.map((item, index) => (
					<Box
					
						key={index}
						style={{
						//	background: 
							background : `url('${item.image}') top `,
						//	backgroundSize : '50%'
							
						}}
					>
						<Box sx ={styles.slide}>
						 <h1>{item.title}</h1>
            <p>{item.description}</p>
			
            <Button>{item.button}</Button>
		
			</Box>
				
					</Box>
				))}
			</AutoplaySlider>
			</Box>
			</Box>
		
	);
};

export default Banner;

const styles = {
	banner: {
		pt: ['110px', null, null, null, '150px', '100px'],
		pb: ['100px', null, null, null, '0', null, '0'],
	//	height: '100px',

		//	marginTop : '200px',
		backgroundColor: 'background',
		//overflow: 'hidden',
		//backgroundSize: ['100%', 'cover', 'cover', null, 'cover'],
		//backgroundSize: '600px',
	},
	container: {
	//	backgroundColor: 'green',
		//width: [null, null, null, null, null, null, '490px'],
	},
	grid: {
	//	backgroundColor: 'gold',
		display: 'grid',
		gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
		gridGap: '0',
	},
	content: {
		h3: {
		//	color: '#4CA3AD',
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

	slide: {
		display: 'flex',
		flexDirection: 'column',
	//	alignItems: 'center',
		//marginTop: '100px',
	},
	slider: {
	//	backgroundColor :"gold",
		display : 'in-line block',
		height: '600px',
	},
};
