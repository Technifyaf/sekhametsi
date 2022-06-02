import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from '../../components/block-title';
import FavoriteCard from '../../components/cards/favorite-card';
import fevCardImageOne from '../../assets/slide.jpg';
import fevCardImageTwo from '../../assets/slide.jpg';
import fevCardImageThree from '../../assets/slide.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import FinancialCard from '../../components/cards/financial-card';



const favoriteCourseData = [

  
  {
    title:
    'AFS 2021',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
   // watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1YilGKUgmBb45R9102xsIBHByrXdYOuvA/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2020',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
   // watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/15-WEQ819t0fGWGmnJPjlKM9r6Ui9_aTk/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2019',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
   // watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1jLMyZa8k3tWhpGH-MW5aORDhe86eCsFB/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2018',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
   // watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/12OC1kzW-x_m_qCjbusaFdy2Bm119c7-z/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2017',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
  //  watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1HD3uIYRvN3IPVeJlmYQwkM5wvjapQucy/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2016',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
  //  watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1HD3uIYRvN3IPVeJlmYQwkM5wvjapQucy/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2015',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
   // watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1SHpuNYEjeAsP9-IINtcL6iSUys7-93tA/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2014',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
   // watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1SHpuNYEjeAsP9-IINtcL6iSUys7-93tA/view?usp=sharing',
    starCount: 5,
  },
  
  {
    title:
    'AFS 2013',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    //watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1SHpuNYEjeAsP9-IINtcL6iSUys7-93tA/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2012',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    //watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1SHpuNYEjeAsP9-IINtcL6iSUys7-93tA/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2011',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
   // watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1AYMrqEaI4KjOr1oW_bGuOtRtcXlR7yix/view?usp=sharing',
    starCount: 5,
  },
  
  {
    title:
    'AFS 2010',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1AYMrqEaI4KjOr1oW_bGuOtRtcXlR7yix/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2009',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    //watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1D7ZrisNvbJJIg4iz1eZR4POTPM6hJ0OS/view?usp=sharing',
    starCount: 5,
  },
  {
    title:
    'AFS 2008',
    image: fevCardImageTwo,
    reviewCount: '4.5 (524 reviews)',
    //watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1D7ZrisNvbJJIg4iz1eZR4POTPM6hJ0OS/view?usp=sharing',
    starCount: 4,
  },
  {
    title: 'AFS 2007',
    image: fevCardImageOne,
    reviewCount: '5.0 (392 reviews)',
    //watchCount: '0 downloads',
    videoLink: 'https://drive.google.com/file/d/1w7SnV12O6AaZa3hbjgfFlOpKz6S_K0Zi/view?usp=sharing',
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
					title='Financials'
					text='Swipe left to see more'
				/>
     
   
  

      <Container sx = {styles.swiperContainer}>
        <Swiper {...FavoriteCarousel} 
       >
          {favoriteCourseData.map((course, index) => (
          
            <SwiperSlide key={index} 
          
            >
         
 
              <FinancialCard
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
