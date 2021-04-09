import react from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
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
							<Heading as='h3'>Historical Anecdotes</Heading>
							<hr color='gold'></hr>

							<Text as='p'>
								<ul>
									<li> Sekhametsi was founded in 1999</li>
									<li> It began with 12 members</li>
									<li>
										{' '}
										The first investment was a 12% stake in Vodacom Lesotho
									</li>
									<li> Sekhametsi had 500 shareholders in 1999</li>
									<li> SMIC shares were valued at M34 when we began</li>
									<li>
										{' '}
										Shareholder base is comprised of farmers, informal traders,
										pensioners, corporate managers, students, religious
										organisations, investment clubs, burial societies, women and
										youth groups.
									</li>
									<li>
										{' '}
										The first Chairman of the Sekhametsi Board was Matjato
										Moteane.
									</li>
									<li>
										There have been 6 Sekhametsi boards to date with elections
										occurring every 3 years.
									</li>
								</ul>
							</Text>
						</Box>
					</Box>
				</Flex>
				<Flex sx={Styles.col}>
					<Image src='https://res.cloudinary.com/did2sewpc/image/upload/v1617788661/_NIK5330_j5tknu.jpg' />
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
		pt: [null, null, null, null, null, '50px'],
		pl: [null, null, null, null, null, '60px', '140px'],
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
