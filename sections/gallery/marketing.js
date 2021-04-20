import react from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';

import img1 from '../../assets/agric.jpg';
import Gallery from "react-photo-gallery";
import BlockTitle from '../../components/block-title';


export const photos = [
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617789037/_NIK5372_fwbfph.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617789009/_NIK5370_h5xnsq.jpg",
	  width: 1,
	  height: 1
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991316/_NIK9854_uwki0v.jpg",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788942/_NIK5364_lxeuje.jpg",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788936/_NIK5363_x7rbke.jpg",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617952625/_NIK9780_xlkco8.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788536/_NIK5312_cgdmjw.jpg",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617990267/health_elel0t.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991279/_NIK9843_m1mrnz.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788533/_NIK5311_xdtroy.jpg",
	  width: 3,
	  height: 4
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788780/_NIK5341_qahgkg.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788967/_NIK5367_hurgz0.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991324/_NIK9848_s9ocib.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788931/_NIK5351_ksxaxl.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617991349/_NIK9862_nbtuki.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788981/_NIK5368_oy6s0y.jpg",
	  width: 4,
	  height: 3
	},
	{
	  src: "https://res.cloudinary.com/did2sewpc/image/upload/v1617788949/_NIK5365_nwzbnq.jpg",
	  width: 4,
	  height: 3
	}
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
