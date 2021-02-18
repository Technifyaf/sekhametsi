import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/agric.jpg';

const Story = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
				<Box sx={styles.row}>
					<Flex sx={styles.col}>
							<Box sx={styles.content}>
              <Box sx ={styles.titleBox}>
								<Heading as='h3'>Environmental</Heading>
                <hr  color ="gold"></hr>
								<Text as='p'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
									dapibus felis sed urna ultrices ornare. Cras elementum risus
									sed cursus suscipit. Proin sem velit, blandit at maximus at,
									consectetur vel tellus. Vestibulum sed iaculis nulla, finibus
									molestie lorem. Morbi egestas mattis dolor, id rhoncus nisl
									vulputate sit amet. Sed ornare blandit odio commodo mattis. Ut
									rhoncus consequat arcu id pharetra. Phasellus vitae odio nec
									neque laoreet lobortis et non lectus. Duis varius est eu arcu
									interdum commodo. Quisque pulvinar orci leo, laoreet mattis
									leo dignissim fringilla. Suspendisse potenti. In eget dapibus
									mi. Sed nunc felis, efficitur nec posuere et, cursus accumsan
									est. Sed rhoncus, eros nec sagittis feugiat, nunc mi lacinia
									odio, eget rutrum ipsum odio id tortor.
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
		pt: [null, null, null, null, null, '100px'],
		pl: [null, null, null, null, null, '60px', '140px'],
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
