import react from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { Link } from '../../components/link';

import Image from '../../components/image';

import img1 from '../../assets/vodacomp.jpg';

const Telecomms = () => {
	return (
		<Container>
			<Box sx={Styles.row}>
				<Flex sx={Styles.col}>
					<Box sx={Styles.content}>
						<Box sx={Styles.titleBox}>
							<Heading as='h3'>Telecommunication</Heading>
							<hr align='left' width='300px ' color='gold'></hr>

							<Text as='p'>
								With only two network operators in Lesotho, Sekhametsi is proud
								to be a major shareholder in the largest mobile operator in
								Lesotho. Vodacom is Lesotho’s first Mobile network operator with
								a subscriber base of 1,35 million Basotho. It also owns Mpesa
								which is the most used mobile money platform in the country with
								M1million subscribers. It is through stake in Vodacom that
								Sekhametsi found its feet and the relationship continues to grow
								into the improvement and betterment of countless Basotho lives.
								Vodacom has invested Billions of Maloti in infrastructal
								developments in Lesotho through its 300 bay stations, its rental
								of Vodacom Park and the hundreds of Basotho it continues to
								employ across the country. Having always been a trendsetter in
								social investment and development, Vodacom represents an
								investment that Sekhametsi is proud of and that affords us the
								global appeal and reach that we seek and aspire to. Sekhametsi
								will continue to find avenues to invest and develop the
								telecommunications industry in Lesotho to enhance connectivity
								and accessibility for Basotho that will transcend geographical
								limitations.
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={Styles.col}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952615/_NIK9774_ebbv6w.jpg ' />
				</Flex>
			</Box>
		</Container>
	);
};

export default Telecomms;

const Styles = {
	whoweare: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background',
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
		pt: [null, null, null, null, null, '100px'],
		pl: [null, null, null, null, null, '60px', '140px'],
		pr: [null, null, null, null, null, '60px', '140px'],
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
