import react from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/agric.jpg';
import Gallery from "react-photo-gallery";
import BlockTitle from '../../components/block-title';


export const photos = [
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991400/_NIK9865_qlep3n.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991396/_NIK9871_nh0dug.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991401/_NIK9863_dbgspw.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952624/_NIK9779_erqqdg.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952620/_NIK9775_a8x66s.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952622/_NIK9778_bxih0a.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952620/_NIK9771_qlp2q4.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952611/_NIK9773_xfaahh.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952601/_NIK9761_ruaqfa.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952562/_NIK9750_lodcea.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952558/_NIK9746_e82t9d.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952575/_NIK9749_r3v3x5.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952574/_NIK9787_f61o5i.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952572/_NIK9788_k0hxoz.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952547/_NIK9786_m3mryn.jpg",
	  width: 4,
	  height: 3
	},
	
	{
		src: "https://res.cloudinary.com/did2sewpc/image/upload/v1619251815/Screenshot_2021-04-24_at_10.10.00_AM_gcbki4.png",
		width: 4,
		height: 3
	  },
	  
  ];
  

const Marketing = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
      <BlockTitle sx={styles.blocktitle}
          title="Portfolio"
          text="The story of Sekhametsi"
        />
			
				<Gallery photos={photos} />
			</Container>
		</Box>
	);
};

export default Marketing;

const styles = {
	customerSupport: {
		backgroundColor: 'gold',
		overflow: 'hidden',
		pt: ['75px', null, null, null, '0', '80px'],
		pb: ['75px', null, null, null, null, '120px', '210px'],
	},
  blocktitle: {
	marginTop : '10px'
	},
	row: {
		display: 'grid',
		gridGap: [0, null, null, null, '25px', null, '55px'],
		gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
	},
	col: {
		img: {
			maxWidth: ['100%', null, null, '60%', '100%', 'none'],
			mx: [null, null, null, 'auto', '0'],
			display: [null, null, null, 'block'],
			mt: [null, null, null, null, '40px', '0'],
		},
	},
	content: {
		backgroundColor: 'red',
		pt: [0, null, null, null, '160px', '210px'],
		mb: [null, null, null, '-40px', '0'],
		position: 'relative',
		zIndex: 10,
		paddingLeft: ['12px', null, null, null, '0'],
		paddingRight: ['12px', null, null, null, '0', '75px', '0'],
		pb: ['10px'],
		maxWidth: [null, null, null, '590px', null, '100%'],
		width: ['100%'],
		mx: [null, null, null, 'auto', null, '0'],
		textAlign: ['center', null, null, null, 'left'],
		h3: {
			fontSize: [5, null, '21px', null, 7, '32px', 8],
			maxWidth: [null, null, null, '400px', 'none'],
			mx: [null, null, null, 'auto', '0'],
			color: 'black',
			fontWeight: 'bold',
			letterSpacing: ['-0.5px', null, null, null, null, null, '-1.5px'],
			lineHeight: [1.5, null, 1.25],
			mb: ['30px', null, null, null, '30px'],
		},
		p: {
			fontSize: [0, null, 2, null, '17px'],
			color: 'text',
			lineHeight: ['26px', null, null, 1.8, null, 2.06],
			'+p': {
				mt: ['15px', null, null, null, '15px'],
			},
		},
	},
	specialText: {
		color: 'heading',
		opacity: 0.6,
	},
	link: {
		color: 'primary',
		fontSize: [1, null, 2],
		display: 'inline-block',
		verticalAlign: 'middle',
		fontWeight: 'bold',
		mt: ['10px', null, null, null, '10px'],
		svg: {
			position: 'relative',
			top: '3px',
		},
	},
};
