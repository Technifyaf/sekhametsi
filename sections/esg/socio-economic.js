import react from 'react';
import { Box, Container, Flex, Heading, Text, Button } from 'theme-ui';
import { Link } from '../../components/link';

import Image from '../../components/image';

import img1 from '../../assets/agric.jpg';


const Whatwedo = () => {
	return (
		<Container>
			<Box sx={Styles.row}>
				<Flex sx={Styles.col}>
					<Box sx={Styles.content}>
						<Box sx={Styles.titleBox}>
							<Heading as='h3'>Socio-economic</Heading>
							<hr color='gold'></hr>

							<Text as='p'>
								Sekhametsi Development Trust (SDT) was duly established in 2014
								to implement the Corporate Social Investment (CSI) Programme on
								behalf of SMIC. The Trust key focus areas are the community,
								health, education and the environment. The support is delivered
								through direct or collaborative impact initiatives targeted at
								communities, social enterprises, marginalized and vulnerable
								groups and the less privileged.
							</Text>
							<a href ="https://sekhametsi.org/">
							<Button> Visit website</Button>
							</a>
						</Box>
					</Box>
				</Flex>
				<Flex sx={Styles.col}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617998425/Sekhametsi/sdt_okwlto.jpg' />
				</Flex>
			</Box>
		</Container>
	);
};

export default Whatwedo;

const Styles = {
	whoweare: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background]',
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
