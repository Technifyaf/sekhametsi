import react from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { Link } from '../../components/link';

import Image from '../../components/image';

import img1 from '../../assets/banner_b.jpg';

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Financialservices = () => {
	return (
		<Container>
			<Box sx={Styles.row}>
				<Flex sx={Styles.row}>
					<Box sx={Styles.content}>
						<Box sx={Styles.titleBox}>
							<Heading as='h3'>Financial Services</Heading>
							<hr align='left' width='300px ' color='gold'></hr>

							<Text as='p'>
								Financial inclusion is pivotal to the growth and prosperity of
								the Basotho Nation. The majority of Basotho and entrepreneurs
								remain underbanked and in underserved segments of the sector.
								Sekhametsi investment in the sector contribute to promoting
								investment and bridging the financing gaps for individuals and
								enterprises in need of credit, start - up and growth capital.
								<br />
								<br />
								<h1>Stanlib </h1>
								Sekhametsi is proud shareholder in Stanlib Lesotho the largest
								asset management service in the country with over M4 Billion
								worth of assets under its management.
								<a href='https://stanlib.com/lesotho/'> <h4>https://stanlib.com/lesotho/</h4></a>
								
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={Styles.row}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952574/_NIK9787_f61o5i.jpg' />
				</Flex>
			</Box>
			<Box sx={Styles.row}>
				<Flex sx={Styles.row}>
					<Box sx={Styles.content}>
						<Box sx={Styles.titleBox}>
							<Text as='p'>
								
								<h1>Letshego </h1>
								The company also holds a stake in Letshego Financial Services, a
								micro financing institution that provides appropriate and
								accessible consumer, microfinance and savings solutions to the
								financially under-served, thus delivering on the inclusive
								finance agenda.
								<a href = "https://www.letshego.com/lesotho/ "> <h4> https://www.letshego.com/lesotho/ </h4> </a>
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={Styles.row}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617991382/_NIK9869_lf3euy.jpg' />
				</Flex>
			</Box>
		</Container>
	);
};

export default Financialservices;

const Styles = {
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
		width: '100%',
		textAlign: ['left', null, 'justify', null, 'left'],
		pt: [null, null, null, null, null, '50px'],
		pb: [null, null, null, null, null, '60px', '15px'],
		pr: [null, null, null, null, null, '60px', '140px'],
	},
	titleBox: {
		textAlign: ['center', null, null, 'left'],
		h3: {
			color: 'primary',
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
