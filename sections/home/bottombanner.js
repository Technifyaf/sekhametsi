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

import bannerImg from '../../assets/agric.jpg';

import Image from '../../components/image';


const Bottombanner = () => {
 return (
     <Box sx = {Styles.whoweare}>

         <Container sx ={Styles.container}>
         <CarouselProvider
						naturalSlideWidth={100}
						naturalSlideHeight={30}
						totalSlides={3}
					>
						<Slider>
							<Slide index={0}>
								<Image src={bannerImg} alt='' />
							</Slide>
							<Slide index={1}>
								<Image src={bannerImg} alt='' />
							</Slide>
							<Slide index={2}>
								<Image src={bannerImg} alt='' />
							</Slide>
						</Slider>
						<ButtonBack>Back</ButtonBack>
						<ButtonNext>Next</ButtonNext>
					</CarouselProvider>
                    
        </Container>

    </Box>   
 )
}
  


export default Bottombanner;

const Styles = {

    whoweare : {
        pt: ['70px', null, null, '80px', '120px', null, '130px'],
        backgroundColor : 'teal'

        },

        container: {
            backgroundColor :"Yellow",
            width: [null, null, null, null, null, null, '390px'],
        },

}