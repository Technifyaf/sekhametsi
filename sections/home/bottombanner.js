import react from 'react'
import {Box,Flex,Heading,Text,Container} from 'theme-ui'

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
    DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import slide_1 from '../../assets/sekhametsi.jpg';
import slide_2 from '../../assets/sekhametsi_2.jpg';
import slide_3 from '../../assets/sekhametsi_3.jpg';
import slide_4 from '../../assets/sekhametsi_4.jpg';

import Image from '../../components/image';


const Bottombanner = () => {
 return (
     <Box sx = {Styles.banner}>

<Container>			
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={50}
                totalSlides={4}
                isPlaying
            >
                <Slider>
                    <Slide index={0}>
                        <Image src={slide_1} alt='' />
                    </Slide>
                    <Slide index={1}>
                        <Image src={slide_2} alt='' />
                    </Slide>
                    <Slide index={2}>
                        <Image src={slide_3} alt='' />
                    </Slide>
                    <Slide index={3}>
                        <Image src={slide_4} alt='' />
                    </Slide>
                  
                </Slider>
                <DotGroup />
                
            </CarouselProvider>
    </Container>
    
    </Box>   
 )
}
  


export default Bottombanner;

const Styles = {

    banner: {
		pt: ['110px', null, null, null, '150px', '100px'],
		pb: ['50px', null, null, null, '0', null, '0'],
		backgroundColor: 'background',
		overflow: 'hidden',
	
		//backgroundSize: ['100%', null, null, null, 'cover'],
	},

        container: {
            backgroundColor :"blue",
            width: [null, null, null, null, null, null, '390px'],
        },

}