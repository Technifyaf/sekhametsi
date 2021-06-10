/** @jsxRuntime classic */

/** @jsx jsx */

//import React from 'react';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import {useSpring, animated} from 'react-spring'

import { Box, Button, jsx, Link } from 'theme-ui';

import bannerImg from '../../assets/vodacom.jpeg';
import bannerImg2 from '../../assets/whoweare.jpg';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import AwesomeSliderStyles from '../../styles/styles.module.css';
const slides = [
	{
		title: 'AGM',
		description:
			'AGM has been Postponed to the 13th June 2021 at 10H00.',
		button: 'Read More',
		image: 'https://res.cloudinary.com/did2sewpc/image/upload/v1617788661/_NIK5330_j5tknu.jpg',
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
		link: '/agm',
	},
	{
		title: 'Who we are',
		description:
			'Sekhametsi Investment Consortium (SMIC) is a 100% Basotho owned (non partisan) broad based public investment company established in 1999. The company has a diversified investment portfolio in telecommunications, financial services, real estate & textiles. ',
		button: 'Read More',
		image: 'https://res.cloudinary.com/did2sewpc/image/upload/v1617952554/_NIK9747_bcs9m1.jpg',
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
		link: '/whoweare',
	},
	{
		title: 'What we do',
		description:
			'We empower Basotho nationals to engage in viable and sustainable investment for the generation of employment, inclusive growth & creating generational wealth. We pride ourselves on creating exceptional shareholder value.  ',
		button: 'Read more',
		image: 'https://res.cloudinary.com/did2sewpc/image/upload/v1617991316/_NIK9854_uwki0v.jpg',
		user: 'Samantha',
		userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
		link: '/portfolio',
	},
	{
		title: 'Financial tools',
		description:
			'To help you manage your invesments and plans for the future , try these free financial tools',
		button: 'Read more',
		image: 'https://res.cloudinary.com/did2sewpc/image/upload/v1618000025/WhatsApp_Image_2021-04-09_at_10.25.44_PM_xmdhk4.jpg',
		user: 'Michael',
		userProfile: 'https://s7.postimg.cc/6exjimijv/3_3x.png',
		link: '/financialtools',
	},
	
];

const AutoplaySlider = withAutoplay(AwesomeSlider);



const Banner = () => {
	
	return (
		<Box sx={styles.banner}>
			<Box sx={styles.content}>
				
				<AutoplaySlider
					sx={styles.slider}
					play={true}
					cancelOnInteraction={false} // should stop playing on user interaction
					interval={5000}
					cssModule ={AwesomeSliderStyles}
				>
					{slides.map((item, index) => (
						<Box
							key={index}
							style={{
								//	background:
								//background: `url('${item.image}') no-repeat center`,
						background:` linear-gradient( rgba(255,0,0, 0.3), rgba(22,22,50, 0.9)), url(${item.image}) no-repeat center`,
								//background: `linear-gradient( rgba(73,93,109,1)0.3 ) rgba(49,55,82,1) 0.7% ),  url(${item.image}) no-repeat center`,
								height: '650px', /* You must set a specified height */
							//	backgroundPosition: 'center', /* Center the image */
							//	backgroundRepeat: 'no-repeat', /* Do not repeat the image */
								backgroundSize: 'cover' /** */,
								objectFit: 'contain'


							}}
						>
							<Box sx={styles.slide}>
								<h1>{item.title}</h1>
								<p>{item.description}</p>
								<Link href={item.link}>
									<Button>{item.button}</Button>
								</Link>
							
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
			//opacity: '',
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
		display: 'block',
		flexDirection: 'column',

		//	alignItems: 'center',
		//marginTop: '100px',
	},
	slider: {
		//	backgroundColor :"gold",
	//	display: 'in-line block',
		height: '650px',
	},
	
	
};
