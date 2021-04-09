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
				<Flex sx={Styles.col}>
					<Box sx={Styles.content}>
						<Box sx={Styles.titleBox}>
							<Heading as='h3'>Financial Services</Heading>
							<hr align='left' width='300px ' color='gold'></hr>

							<Text as='p'>
								Financial literacy and access and inclusion to financial
								services is pivotal to the growth and prosperity of the Basotho
								Nation. The majority of Basotho remain outside the financial
								inclusion circle and Sekhametsi is dedicated to ensuring that
								this changes across the board. Local participation in the
								financial services sector ensures that the economic interests of
								Basotho are prioritised and an imperative for money to circulate
								within our borders as opposed to it flowing out is given greater
								impetus. Sekhametsi is proud to be a significant shareholder in
								Stanlib Lesotho which currently manages over M4Billion worth of
								assets and is the largest asset management service in Lesotho.
								Sekhametsi hold stake in Letshego Financial Services and is
								keenly assessing the micro financing landscape in Lesotho and
								how it is developing. It is our aspiration to become a larger
								player in the financial services ownership sphere as we believe
								it empowers us to make more meaningful contributions and
								interventions towards the enhancement and improvement of
								Lesotho’s economy and the standard of living of our people.
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={Styles.col}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952571/_NIK9790_wdwray.jpg' />
				</Flex>
			</Box>
		</Container>
	);
};

export default Financialservices;

const Styles = {
	whoweare: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'bacground',
	},

	row: {
		mixBlendMode: 'softlight',
		backgroundColor: 'black',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: ['column', null, null, 'row-reverse'],
	},
	col: {
		backgroundColor: 'background',
		flex: ['0 0 100%', null, null, '0 0 50%'],
	},
	content: {
		width: '100%',
		textAlign: ['left', null, null, null, 'left'],
		pt: [null, null, null, null, null, '50px'],
		pl: [null, null, null, null, null, '60px', '140px'],
		pr: [null, null, null, null, null, '60px', '140px'],
	},
	slider: {
		pl: [null, null, null, null, null, '0px', '10px'],
		pr: [null, null, null, null, null, '0px', '10px'],
		width: '100%',
	},

	slide: {
		pl: [null, null, null, null, null, '0px', '10px'],
		pr: [null, null, null, null, null, '0px', '10px'],
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
