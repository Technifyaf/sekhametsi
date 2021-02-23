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