import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import Image from '../../components/image';
import BlockTitle from '../../components/block-title';

import Gallery from 'react-photo-gallery';

import 'pure-react-carousel/dist/react-carousel.es.css';

import bannerImg from '../../assets/banner_b.jpg';

export const photos = [
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788551/_NIK5317_lytqjs.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617789009/_NIK5370_h5xnsq.jpg',
			width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788611/_NIK5325_gl6pe3.jpg',
			width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788942/_NIK5364_lxeuje.jpg',
			width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788936/_NIK5363_x7rbke.jpg',
			width: 4,
			height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1619077306/_NIK9938_vjb0rp.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788536/_NIK5312_cgdmjw.jpg',
			width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1619077292/_NIK9932_hzjado.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1619077324/_NIK9954_qokxpt.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788533/_NIK5311_xdtroy.jpg',
			width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788780/_NIK5341_qahgkg.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788967/_NIK5367_hurgz0.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1619078290/WhatsApp_Image_2021-04-16_at_10.13.02_PM_l31nsc.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788931/_NIK5351_ksxaxl.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1619078453/WhatsApp_Image_2021-04-16_at_10.13.04_PM_1_a2pagx.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788981/_NIK5368_oy6s0y.jpg',
		width: 4,
		height: 3,
	},
	{
		src:
			'https://res.cloudinary.com/did2sewpc/image/upload/v1617788949/_NIK5365_nwzbnq.jpg',
		width: 4,
		height: 3,
	},
];

const Pictorial = () => {
	return (
		<Box as='section' sx={styles.wrapper}>
			<Container>
				<BlockTitle
					sx={styles.blocktitle}
					title='Corporate meetings'
					text='The story of Sekhametsi'
				/>
				<Gallery photos={photos} />
			</Container>
		</Box>
	);
};

export default Pictorial;

const styles = {
	wrapper: {
		pt: ['70px', null, null, '80px', '50px', null, '130px'],
		backgroundColor: 'background',
	},
	blocktitle: {
		pt: [null, null, null, null, null, '100px'],
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
