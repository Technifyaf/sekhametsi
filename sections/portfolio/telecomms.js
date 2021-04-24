import react from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { Link } from '../../components/link';

import Image from '../../components/image';

import img1 from '../../assets/vodacomp.jpg';

const Telecomms = () => {
	return (
		<Container>
			<Box sx={Styles.row}>
				<Flex sx={Styles.row}>
					<Box sx={Styles.content}>
						<Box sx={Styles.titleBox}>
							<Heading as='h3'>TelecommunicationsZ</Heading>
							<hr align='left' width='300px ' color='gold'></hr>

							<Text as='p'>
								With only two network operators in Lesotho, Sekhametsi is proud
								to be shareholder in the largest mobile operator in Lesotho.
								Vodacom Lesotho (VCL) commands a market share of 1,35 million
								subscribers. VCL also owns Mpesa, which is the preferred mobile
								money platform in the country with M1million subscribers. The
								interest in Vodacom has been a game changer and kept SMIC ahead
								of the investment curve. Vodacom has made transformational
								investments worth Billions of Maloti in infrastructure
								developments through its 300 bay stations, leasing of Vodacom
								Park, SMEs vending business opportunities and the hundreds of
								Basotho in its employ in outlets across the country. As the
								leader in social investment and development, Vodacom represents
								an investment that Sekhametsi is proud of and that affords us
								the global appeal and reach that SMIC seek and aspire to.
								<a href =" https://www.vodacom.co.ls"> https://www.vodacom.co.ls </a>for Basotho that will transcend
								geographical limitations.
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={Styles.row}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617952615/_NIK9774_ebbv6w.jpg ' />
				</Flex>
			</Box>
		</Container>
	);
};

export default Telecomms;

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
