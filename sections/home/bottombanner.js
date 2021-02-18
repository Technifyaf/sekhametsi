import react from 'react'
import {Box,Flex,Heading,Text,Container} from 'theme-ui'

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import bannerImg from '../../assets/banner_b.jpg';

import Image from '../../components/image';


const Bottombanner = () => {
 return (
     <Box sx = {Styles.whoweare}>
		<Container>
			<Image src ={bannerImg}></Image>
		</Container>
    </Box>   
 )
}
  


export default Bottombanner;

const Styles = {

    whoweare : {
        pt: ['70px', null, null, '80px', '120px', null, '130px'],
        backgroundColor : '#101332'

        },

        container: {
            backgroundColor :"#101332",
            width: [null, null, null, null, null, null, '390px'],
        },

}