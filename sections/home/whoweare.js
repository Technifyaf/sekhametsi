import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/sekhametsi.jpeg';
import {Loader, LoaderOptions} from 'google-maps';
import BlockTitle from '../../components/block-title';


const Whoweare= () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			
			<Container>
			<BlockTitle
          title="If you want to fast go alone, if you want to far go together"
          text="The story of sekahmetsi"
        />
				<Box sx={styles.row}>
					<Flex sx={styles.col}>
							<Box sx={styles.content}>
              <Box sx ={styles.titleBox}>
								<Heading as='h3'>Who we are</Heading>
								<hr  align = "left" width ="200px "color ="gold"></hr>
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

export default Whoweare;

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
	//	height : '100px',
		backgroundColor: 'background',
		flex: ['0 0 100%', null, null, '0 0 50%'],
	},
  content: {
		width: '100%',
		textAlign: ['left', null, 'justify', null, 'left'],
		pt: [null, null, null, null, null, '100px'],
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
