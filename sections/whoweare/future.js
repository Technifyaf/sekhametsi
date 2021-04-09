import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/sekhametsi.jpeg';

const Story = () => {
	return (
		
			<Container>
				<Box sx={styles.row}>
					<Flex sx={styles.col}>
							<Box sx={styles.content}>
              <Box sx ={styles.titleBox}>
								<Heading as='h3'>The Sekhametsi of the future</Heading>
                <hr  color ="gold"></hr>

								<Text as='p'>
								2021 marks 20 years of investment success, delivering value to shareholders, empowering vulnerable communities and contributing to the economic development of Lesotho for SMIC. This milestone affords us the opportunity to reset and refocus to improve our performance and accentuate our competitive edge. We are rigorously restructuring and streamlines our operation evolve us into the organisation we purposed to be in 2016, Sekhametsi. This is embodied in our mission statement: To become a globally sought after, ethical wealth creation vehicle for the Basotho nation, which embraces innovation, accountability & due prudence in all its dealings. We forecast the market capitalization shall grow from the existing M1.2 billion to M5 billion by 2026. The future is bright for us all.   
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
		pb: [null, null, null, null, null, '60px', '140px'],
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
