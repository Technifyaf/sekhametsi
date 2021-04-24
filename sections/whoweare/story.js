import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex, Link } from 'theme-ui';
//import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/vodacomp.jpg';
import BlockTitle from '../../components/block-title';

const Story = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
				<Box sx={styles.row}>
					<Flex sx={styles.row}>
						<Box sx={styles.content}>
							<Box sx={styles.titleBox}>
								<Heading as='h3'>Our Story</Heading>
								<hr color='gold'></hr>
								<Text as='p'>
									This is embodied in our mission statement: To become a
									globally sought after, ethical wealth creation vehicle for the
									Basotho nation, which embraces innovation, accountability &
									due prudence in all its dealings. We forecast that the market
									capitalization shall grow from the existing M1.2 billion to M5
									billion by 2026. In the late 1990s, the Government of Lesotho
									embarked on a Privatisation Programme that saw the state
									selling off its stakes in various companies. The government’s
									12 percent stake (with an option to buy further 8%) in Vodacom
									Lesotho was one of the assets on offer. At the time Vodacom
									Lesotho was a small mobile network operator with approximately
									19 000 subscribers. The offer led to a moment of inspired
									thinking by a few dozen Basotho who dared to dream big and
									toiled over the years to make that dream a reality. The
									commitment resulted in a journey of overcoming seemingly
									insurmountable challenges, discipline, delayed gratification
									and playing by the book.
									<br /> <Link href='/'> Read more </Link> <br />
									Through solicitation and lobbying, Sekhametsi grew to 200
									individuals and 6 investment clubs. Sekhametsi made a formal
									purchase offer to the government’s Privatisation Unit, and was
									selected as the preferred bidder; and so Sekhametsi gained its
									first stake in Telecoms giant Vodacom. 20 years on, the
									consortium expanded its investment portfolio and boasts
									interests in property, financial services, and textile
									manufacturing. Sekhametsi is the largest locally owned company
									in Lesotho and achieved the M1Billion valuation mark in 2020.
								</Text>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Container>
		</Box>
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
		pt: [null, null, null, null, null, '20px'],
		pb: [null, null, null, null, null, '60px', '140px'],
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

	image: {
		backgroundPosition: 'center',
		backgroundSize: 'contain',
	},
};
