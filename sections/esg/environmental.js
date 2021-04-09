import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';
import BlockTitle from '../../components/block-title';

import img1 from '../../assets/agric.jpg';

const Story = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
				<BlockTitle
					title='If you want to fast go alone, if you want to far go together'
					text='The story of sekahmetsi'
				/>
				<Box sx={styles.row}>
					<Flex sx={styles.col}>
						<Box sx={styles.content}>
							<Box sx={styles.titleBox}>
								<Heading as='h3'>Environmental</Heading>
								<hr color='gold'></hr>
								<Text as='p'>
									It is critical that we all safeguard the future of our
									beautiful country by conducting our business and affairs in a
									responsible and sustainable manner and this begins and ends
									with the way we deal and interact with our environment. The
									majority of Lesotho is untouched landscape that requires
									protection and consideration in our endeavours to grow the
									economy of Lesotho. Sekhametsi is therefore dedicated to
									assisting and championing environmentally sustainable projects
									throughout Lesotho. We have responsibility to ensure that
									future generations are able to enjoy their birth rite just as
									we and generations before us have.
								</Text>
							</Box>
						</Box>
					</Flex>
					<Flex sx={styles.col}>
						<Image src={img1} alt='' />
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
