import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';
import BlockTitle from '../../components/block-title';

import Gallery from "react-photo-gallery";







import 'pure-react-carousel/dist/react-carousel.es.css';


import bannerImg from '../../assets/banner_b.jpg';



export const photos = [
	{
	  src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
	  width: 1,
	  height: 1
	},
	{
	  src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://source.unsplash.com/PpOHJezOalU/800x599",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
	  width: 4927,
	  height: 1000
	},
	{
	  src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
	  width: 4,
	  height: 3
	}
  ];
  



const Pictorial = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
			<BlockTitle
          title="If you want to fast go alone, if you want to far go together"
          text="The story of sekahmetsi"
        />
		<Gallery photos={photos} />;
		</Container>
		</Box>
	);
};

export default Pictorial;

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
		backgroundColor: 'gold',
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
			color: 'black',
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
