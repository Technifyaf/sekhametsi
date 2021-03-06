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
			

				<Box sx={styles.row}>
					<Flex sx={styles.row}>
						<Box sx={styles.content}>
							<Box sx={styles.titleBox}>
								<Heading as='h3'>Investment Portfolio</Heading>
								<hr align='left' width='150px ' color='gold'></hr>

								<Text as='p'>
									As a strategy, Sekhametsi maintains a balanced and diversified
									investment portfolio to manage overall investment risk and to
									ensure consistent returns.
									<br />
									<br /> Sekhametsi approach is to invest in high-value
									strategic commercial, industrial and mixed-use property
									acquisitions with attractive future growth potential and
									rental income. The company seeks blue-chip tenants and extents
									services to growth oriented SMEs. Current portfolio of
									property is comprised of prime and iconic properties in the
									Maseru CBD. <br />
									<br />
									<h1>Vodacom Park </h1> Vodacom Park is a M80 million
									investment and a green building that features more than 25%
									electricity generation, solar screening and passive cooling
									system. The building minimise its impact on climate change by
									reducing greenhouse gas emissions generated by its operation.
									It was constructed and handed over to Vodacom Lesotho in 2017.
									The three-storey 3 631 m2 has an adaptable design customized
									to offer a suitable modern working environment for the client.{' '}
									
									
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex sx={styles.row}>
						<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952603/_NIK9769_nx9nc6.jpg ' />
					</Flex>
					
				</Box>
				<Box sx={styles.row}>
					<Flex sx={styles.row}>
						<Box sx={styles.content}>
							<Box sx={styles.titleBox}>
								

								<Text as='p'>
									
									<br />
									<h1>Sekhametsi Place</h1> Sekhametsi Place, former Agric Bank,
									was acquired in 2017 refurbished and rebranded. The property
									is a thirteen storey high-rise building, strategically located
									on Kingsway. The building will be fully constructed in the
									future to be a prominent feature of the city’s urban skyline.
									<br />
									
									
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex sx={styles.row}>
						<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952554/_NIK9747_bcs9m1.jpg' />
					</Flex>
					
				</Box>
				<Box sx={styles.row}>
					<Flex sx={styles.row}>
						<Box sx={styles.content}>
							<Box sx={styles.titleBox}>
						
								<Text as='p'>
								
									<br />
									<br /> <h1>Moruo Developments (Pioneer Mall)</h1> The advent
									of Pioneer Mall transformed the purchase experience of Basotho
									and opened up untapped revenue streams in the commercial
									property space. As a Major shareholder in Moruo Developments,
									Sekhametsi cemented its position as a developmental investor
									with Pioneer Mall employing over 300 Basotho. <a href = "http://www.pioneer.co.ls">  http://www.pioneer.co.ls</a>
									
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex sx={styles.row}>
						<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952625/_NIK9780_xlkco8.jpg ' />
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
		marginBottom : '10px'
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
