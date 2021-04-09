import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/agric.jpg';

const Story = () => {
	return (
		<Container>
			<Box sx={styles.row}>
				<Flex sx={styles.col}>
					<Box sx={styles.content}>
						<Box sx={styles.titleBox}>
							<Heading as='h3'>Textiles</Heading>
							<hr align='left' width='150px ' color='gold'></hr>

							<Text as='p'>
								The textile industry is one of the oldest industrial trades in
								Lesotho. The world over, Lesotho is famed for its textile
								exports which historically were spearheaded by the export of
								wool and mohair and their by-products, and in more recent times
								the large-scale production of white label clothing exported all
								over the world. The textile industry in Lesotho is the largest
								formal employer with number having peaked at 54,000 employed,
								comprising of 92% of manufacturing jobs and producing 43% of
								Lesotho’s exports. The industry is massive and pivotal to the
								growth of Lesotho. Only two of the 40 textile factories in
								Lesotho are owned by Basotho. This presents an incredible growth
								opportunity. Sekhametsi purchased 30% of locally owned textile
								producer Afri-Expo for M10million has intends to further
								increase its stake in the textile industry to create more jobs
								for Basotho and expand our export base. We continue to run the
								rule over developments in the textile industry and look to
								seeing more of the global value chain migrate within Lesotho
								borders, offering more opportunities to the thousands of young
								Basotho who have acquired skills in cutting and sowing and are
								even branching out into creating their own labels and brands.
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={styles.col}>
					<Image src={img1} alt='' />
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
		backgroundColor: 'black',
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
