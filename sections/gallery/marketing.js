import react from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/agric.jpg';
import Gallery from "react-photo-gallery";
import BlockTitle from '../../components/block-title';


export const photos = [
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991396/Sekhametsi/_NIK9871_nh0dug.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991390/Sekhametsi/_NIK9864_opuejd.jpg",
	  width: 4,
	  height: 3
	},
	
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991382/Sekhametsi/_NIK9869_lf3euy.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991269/Sekhametsi/_NIK9849_ncf66w.jpg",
	  width: 4,
	  height: 3
	},

	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991205/Sekhametsi/_NIK9835_l6obrd.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991223/Sekhametsi/_NIK9841_jyknoh.jpg",
	  width: 4,
	  height: 3
	},
	
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952625/Sekhametsi/_NIK9780_xlkco8.jpg",
	  width: 4,
	  height: 3
	},

	
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952622/Sekhametsi/_NIK9778_bxih0a.jpg",
	  width: 4,
	  height: 3
	},
	
	
	{
		src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952622/Sekhametsi/_NIK9778_bxih0a.jpg",
		width: 4,
		height: 3
	  },
	 
	  {
		src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952612/Sekhametsi/_NIK9770_zyb6x0.jpg",
		width: 4,
		height: 3
	  },
  
	  
	  {
		src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952609/Sekhametsi/_NIK9772_b7hsp8.jpg",
		width: 4,
		height: 3
	  },
	  
	  
	  {
		  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952594/Sekhametsi/_NIK9765_odacxn.jpg",
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
