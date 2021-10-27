import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/agric.jpg';

const Story = () => {
	return (
		<Container>
			<Box sx={styles.row}>
				<Flex sx={styles.row}>
					<Box sx={styles.content}>
						<Box sx={styles.titleBox}>
							<Heading as='h3'>Textiles</Heading>
							<hr align='left' width='150px ' color='gold'></hr>

							<Text as='p'>
								The textile and apparel industry, manufacturing are the leading
								industries globally and remain the engine of growth in GDP and
								job creation in Lesotho. Basotho own only two of the 40 textile
								factories in Lesotho. This presents an incredible investment and
								indigenization opportunity. Sekhametsi purchased 30% of locally
								owned textile producer Afri-Expo for M10million. The sector is
								laden with further economic opportutntites that can be harnessed
								from development of a more sustainable and circular textile
								value chain to support the related creative sub-sectors. SMIC
								intends to further increase its footprint in the textile
								industry to spur additional jobs for Basotho, expand the
								country’s export base and contribute to economic growth.
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={styles.row}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617991348/_NIK9856_slbd15.jpg' />
				</Flex>
			</Box>
		</Container>
	);
};

export default Story;

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
