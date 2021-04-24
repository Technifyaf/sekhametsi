import react from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import { Link } from '../../components/link';

import Image from '../../components/image';

import img1 from '../../assets/event.jpg';
import Gallery from "react-photo-gallery";
import BlockTitle from '../../components/block-title';



export const photos = [
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1619251556/Gallery_3_fq76sy.png",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1619251550/Gallery_1_phyedg.png",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1619251553/Gallery_2_hdnihi.png",
	  width: 4,
	  height: 3
	},
	
	
	
  ];
  

const Events = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
      <BlockTitle sx ={styles.blocktitle}
          title="Events"
          text="The story of Sekhametsi"
        />
			
				<Gallery photos={photos} />
			</Container>
		</Box>
	);
};

export default Events;

const styles = {
	whoweare: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'blue',
	},
  blocktitle: {
		pt: [null, null, null, null, null, '100px'],
	},
	row: {
		mixBlendMode: 'softlight',
		backgroundColor: 'black',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: ['column', null, null, 'row-reverse'],
	},
	col: {
		backgroundColor: 'teal',
		flex: ['0 0 100%', null, null, '0 0 50%'],
	},
	content: {
		width: '100%',
		textAlign: ['left', null, null, null, 'left'],
		pt: [null, null, null, null, null, '100px'],
		pl: [null, null, null, null, null, '60px', '140px'],
	},
	titleBox: {
		textAlign: ['center', null, null, 'left'],
		h3: {
			color: 'black',
			fontSize: [5, null, null, '21px', '36px', '32px', 8],
			lineHeight: [1.6, null, null, '1.5'],
			fontWeight: 'bold',
			letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
		},
		p: {
			fontSize: [0, null, 2, null, '17px'],
			color: 'text_secondary',
			opacity: '.6',
			lineHeight: ['26px', null, null, 1.8, null, 2.06],
			padding: ['0 20px', null, null, '0'],
			mt: ['15px'],
		},
	},
};
