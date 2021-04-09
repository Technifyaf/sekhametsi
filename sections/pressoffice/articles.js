import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from '../../components/block-title';
import FavoriteCard from '../../components/cards/favorite-card';
import fevCardImageOne from '../../assets/slide.jpg';
import fevCardImageTwo from '../../assets/slide.jpg';
import fevCardImageThree from '../../assets/slide.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';



const favoriteCourseData = [
  {
    title: 'The Genesis of Sekhametsi',
    image: fevCardImageOne,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 reads',
    videoLink: 'https://www.thepost.co.ls/news/the-genesis-of-sekhametsi/',
    starCount: 5,
  },
  {
    title:
      'Mustard seed',
    image: fevCardImageTwo,
    reviewCount: '4.5 (524 reviews)',
    watchCount: '3,532 reads',
    videoLink: 'https://www.thepost.co.ls/news/sekhametsi-the-mustard-seed/',
    starCount: 4,
  },
  {
    title:
      'Leading with humility',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 reads',
    videoLink: 'https://www.thepost.co.ls/news/leading-with-humility/',
    starCount: 5,
  },
  {
    title:
      'Mashinini : The Future of Sekhametsi',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 reads',
    videoLink: 'https://www.thepost.co.ls/news/mashinini-the-future-of-sekhametsi/',
    starCount: 5,
  },
  {
    title:
      'Sekhametsi braces for brusing legal battle',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 reads',
    videoLink: 'https://www.thepost.co.ls/local-news/sekhametsi-braces-for-bruising-legal-battle/',
    starCount: 5,
  },
  {
    title:
      'From Caddy to chairman',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 reads',
    videoLink: 'https://www.thepost.co.ls/news/from-a-caddy-to-board-chairman/',
    starCount: 5,
  },
  {
    title:
      'Education for all',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 reads',
    videoLink: 'https://www.thepost.co.ls/news/education-for-all/',
    starCount: 5,
  },
  {
    title:
      'Against all odds',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 reads',
    videoLink: 'https://www.thepost.co.ls/news/leading-with-humility/',
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
					title='News'
					text='Articles'
				/>
     
   
  

      <Container sx = {styles.swiperContainer}>
        <Swiper {...FavoriteCarousel} 
       >
          {favoriteCourseData.map((course, index) => (
          
            <SwiperSlide key={index} 
          
            >
         
 
              <FavoriteCard
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
