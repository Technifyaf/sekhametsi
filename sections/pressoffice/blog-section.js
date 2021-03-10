
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
//import SectionHeader from 'components/section-header';
//import Rating from 'components/rating';
import BlockTitle from '../../components/block-title';
import FavoriteCard from '../../components/cards/favorite-card';

import ButtonGroup from '../../components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from '../../assets/team/member-1.png';
import Avatar2 from '../../assets/team/member-1.png';
import Avatar3 from '../../assets/team/member-1.png';
import 'react-multi-carousel/lib/styles.css';
import fevCardImageOne from '../../assets/slide.jpg';
import fevCardImageTwo from '../../assets/slide.jpg';
import fevCardImageThree from '../../assets/slide.jpg';


const data = [
  {
    id: 1,
    title: 'Blog title',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa facilisi orci faucibus sagittis a id ornare mauris sapien. Sodales faucibus volutpat, maecenas elementum, elementum vitae malesuada quam in.',
    avatar: Avatar1,
    name: 'Tabo',
    designation: 'creative lab',
    review: 4,
  },
  {
    id: 2,
    title: 'Blog title',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa facilisi orci faucibus sagittis a id ornare mauris sapien. Sodales faucibus volutpat, maecenas elementum, elementum vitae malesuada quam in.',
    avatar: Avatar1,
    name: 'Tabo',
    designation: 'Creative lab',
    review: 5,
  },
  {
    id: 3,
    title: 'Blog title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa facilisi orci faucibus sagittis a id ornare mauris sapien. Sodales faucibus volutpat, maecenas elementum, elementum vitae malesuada quam in.',
    avatar: Avatar1,
    name: 'Tabo',
    designation: 'Creative lab',
    review: 5,
  },
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const favoriteCourseData = [
  {
    title: 'How to work with prototype design with adobe xd featuring tools',
    image: fevCardImageOne,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 reads',
    videoLink: 'g9avOpUOREM',
    starCount: 5,
  },
  {
    title:
      'Create multiple artboard by using figma prototyping tools development',
    image: fevCardImageTwo,
    reviewCount: '4.5 (524 reviews)',
    watchCount: '3,532 reads',
    videoLink: 'L9jU-IIN0ng',
    starCount: 4,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 reads',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
];

export default function TestimonialCard() {
  return (
    <Box id="testimonial" sx={styles.whoweare}>
      <BlockTitle
					title='Blog'
					text='Posts'
				/>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
         customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
    {favoriteCourseData.map((course, index) => (
             <FavoriteCard
             starCount={course.starCount}
             title={course.title}
             image={course.image}
             reviewCount={course.reviewCount}
             watchCount={course.watchCount}
             videoLink={course.videoLink}
           />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

const styles = {
  whoweare : {
    pt: ['70px', null, null, '80px', '120px', null, '150px'],
    backgroundColor : 'background'

    },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-35px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 47px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'yellow',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'primary',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'Black',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'primary',
    lineHeight: 1.3,
  },
  designation: {
    color: '#25A0FF',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
