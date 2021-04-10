import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/sekhametsi.jpeg';
import BlockTitle from '../../components/block-title';

import {
	CarouselProvider,
	Slider,
	Slide,
	DotGroup,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Property = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
			<BlockTitle
          title="If you want to fast go alone, if you want to far, go together"
          text="The story of Sekhametsi"
        />

				<Box sx={styles.row}>
					<Flex sx={styles.col}>
						<Box sx={styles.content}>
							<Box sx={styles.titleBox}>
								<Heading as='h3'>Property</Heading>
								<hr align='left' width='150px ' color='gold'></hr>

								<Text as='p'>
									It is a known fact that the benefits of investing in real
									estate include passive income, stable cash flow, tax
									advantages, diversification, leverage as well as hedging
									against inflation. We believe that Lesotho is in its early
									years with regards to private sector property investment and
									we are pioneering this space by earmarking significant
									properties which will experience exponential growth and
									possess high expansion potential.<br/><br/> Our current portfolio of
									property is comprised of prime and iconic properties in the
									Maseru CBD. <br/><br/> 
									<li>Vodacom Park </li> Known as the biggest green building
									in Lesotho Vodacom park was built and handed over to Vodacom
									Lesotho in 2017. The building was to minimise its impact on
									climate change by reducing greenhouse gas emissions generated
									by its operation. The three-storey 3 631 m² building includes
									a call centre, open plan offices, closed offices, boardrooms,
									canteens, ablutions, a kitchen and a freezer room, is a
									M80million marvel in the heart Maseru CBD. <br/><br/> 
									<li>Sekhametsi Place</li> A
									piece of architectural history in story of Lesotho, the former
									Agric Bank was acquired by Sekhametsi in 2017. Now known as
									Sekhametsi Place, plans are in place to complete the iconic
									building and make it one of the key fixtures in Maseru’s
									skyline.<br/><br/>  <li>Moruo Develpoments (Pioneer Mall)</li> The advent of
									Pioneer Mall transformed the purchase experience of Basotho
									and opened up untapped revenue streams in the commercial
									property space. As a Major shareholder in Moruo Developments,
									Sekhametsi cemented its position as a developmental investor
									with Pioneer Mall employing over 300 Basotho.
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex sx={styles.col}>
						<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952603/_NIK9769_nx9nc6.jpg ' />
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Property;

const styles = {
	wrapper: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background',
	},
	row: {
		mixBlendMode: 'softlight',
		backgroundColor: 'background',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: ['column', null, null, 'row'],
	},
	col: {
		backgroundColor: 'background',
		flex: ['0 0 100%', null, null, '0 0 50%'],
	},
	content: {
		backgroundColor: 'background',
		width: '100%',
		textAlign: ['left', null, 'justify', null, 'left'],
		pt: [null, null, null, null, null, '0px'],
		pb: [null, null, null, null, null, '60px', '10px'],
		pr: [null, null, null, null, null, '60px', '140px'],
	},
	slider: {
		backgroundColor: 'red',

		pr: [null, null, null, null, null, '0px', '10px'],
		pl: [null, null, null, null, null, '0px', '10px'],
	},
	titleBox: {
		textAlign: ['center', null, null, 'left'],
		h3: {
			color: 'Primary',
			fontSize: [5, null, null, '21px', '36px', '32px', 8],
			lineHeight: [1.6, null, null, '1.5'],
			fontWeight: 'bold',
			letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
		},
		p: {
			fontSize: [0, null, 2, null, '17px'],
			color: 'text',
			opacity: '.6',
			lineHeight: ['26px', null, null, 1.8, null, 2.06],
			padding: ['0 20px', null, null, '0'],
			mt: ['15px'],
		},
	},
};
