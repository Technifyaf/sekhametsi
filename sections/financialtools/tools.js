import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from '../../components/block-title';
import FavoriteCard from '../../components/cards/favorite-card';
import fevCardImageOne from '../../assets/stanlib.png';
import fevCardImageTwo from '../../assets/lra.png';
import fevCardImageThree from '../../assets/liberty.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import FinancialToolsCard from '../../components/cards/financial-tools';



const favoriteCourseData = [
  {
    title: 'Stanlib tools',
    image: fevCardImageOne,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 views',
    videoLink: 'https://stanlib.com/transact-adviser/#tools',
    starCount: 5,
  },
  {
    title:
    'PAYE Calculator',
    image: fevCardImageTwo,
    reviewCount: '4.5 (524 reviews)',
    watchCount: '3,532 downloads',
    videoLink: 'http://lra.org.ls/paye-tax-calculator',
    starCount: 4,
  },
  {
    title:
    'Investment calculator',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 downloads',
    videoLink: 'https://www.liberty.co.za/calculators/investment-calculator',
    starCount: 5,
  },
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 50,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" sx={styles.whoweare}>
   
      <BlockTitle
					title='Financial Tools and calculators'
					text='Links'
				/>
     
   
  

      <Container sx = {styles.swiperContainer}>
        <Swiper {...FavoriteCarousel} 
       >
          {favoriteCourseData.map((course, index) => (
          
            <SwiperSlide key={index} 
          
            >
         
 
              <FinancialToolsCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
          
            </SwiperSlide>
         
          ))}
        </Swiper>
        </Container>
       
      </Box>
  
  );
};

export default FavoriteCourse;

const styles = {
  whoweare : {
    pt: ['70px', null, null, '80px', '120px', null, '150px'],
    backgroundColor : 'background'

    },
fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },

  swiperContainer :{
    width: '100%',
    height: '100%'
  }
 ,
  swiperSlide :{

  }
};
