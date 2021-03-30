import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/sekhametsi.jpeg';
import BlockTitle from '../../components/block-title';


import {
	CarouselProvider,
	Slider,
	Slide,
	DotGroup,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Property = () => {
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
								<Heading as='h3'>Property</Heading>
								<hr  align = "left" width ="150px "color ="gold"></hr>


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
					<Container sx={styles.slider}>
			<CarouselProvider
						naturalSlideWidth={90}
						naturalSlideHeight={100}
						totalSlides={3}
						isPlaying
					>
						<Slider>
							<Slide index={0}>
							<Image src={img1} alt='' />
							</Slide>
							<Slide index={1}>
							<Image src={img1} alt='' />
							</Slide>
							<Slide index={2}>
							<Image src={img1} alt='' />
							</Slide>
						</Slider>
						<DotGroup/>
						
					</CarouselProvider>
			</Container>
					
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Property;

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
		pt: [null, null, null, null, null, '100px'],
		pb: [null, null, null, null, null, '60px', '140px'],
   		pr: [null, null, null, null, null, '60px', '140px'],
	},
	slider :{

		pr: [null, null, null, null, null, '0px', '10px'],
		pl: [null, null, null, null, null, '0px', '10px'],
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
