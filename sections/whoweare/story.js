import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/vodacomp.jpg';
import BlockTitle from '../../components/block-title';

const Story = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
				<Box sx={styles.row}>
					<Flex sx={styles.col}>
						<Box sx={styles.content}>
							<Box sx={styles.titleBox}>
								<Heading as='h3'>Our Story</Heading>
								<hr color='gold'></hr>
								<Text as='p'>
									In the late 1990s, when the Government of Lesotho embarked on
									a Privatisation Programme that saw the state selling off its
									stakes in various companies. The government’s 12 percent stake
									(with a option to buy further 8%) in Vodacom Lesotho was one
									of the assets on sale. At that time Vodacom Lesotho was a
									small mobile network operator with just about 19 000
									subscribers. One moment of inspired thinking by a few dozen
									Basotho who dared to dream big and toiled over the years to
									make that dream a reality resulted in a journey of Huge
									hurdles surmounted, gratification delayed, through hard work
									and Commitment to playing by the rule book. Through
									solicitation and lobbying, Sekhemetsi grew to 200 individuals
									and investment clubs. They then submitted a formal offer to
									the government’s Privatisation Unit, who selected it as the
									preferred bidder ahead of two other competitors and so
									Sekhametsi gained its first stake in Telecoms giant Vodacom.
									20 years on, the consortium boasts interests in Property,
									Financial services, and Textile manufacturing. Sekhametsi is
									the largest locally owned company in Lesotho and exceeded the
									M1Billion valuation mark in 2020.
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex sx={styles.col}>
						<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617789079/_NIK5378_bruc7u.jpg ' />
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
		backgroundColor: 'bacground',
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
		pt: [null, null, null, null, null, '0px'],
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
};
