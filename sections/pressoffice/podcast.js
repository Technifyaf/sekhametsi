import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from '../../components/block-title';
import PopularCard from '../../components/cards/popular-card';

const popularCourseData = [
  {
    title:
      'The sekhametsi development trust',
   // reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 plays',
    videoLink: 'd1igVwUD6ug',
    starCount: 5,
    expanded: false,
    list: [
      {
        content: 'How sekhametsi started',
      },
      {
        content: 'Challenges along the way',
      },
      {
        content: 'Investment philosophy',
      },
      {
        content: 'The Sekhametsi of the future.',
      },
    ],
  },
  {
    title: 'National Association Of The Deaf Lesotho',
  //  reviewCount: '4.5 (524 reviews)',
    watchCount: '3,532 plays',
    videoLink: 'mP7Z-oOcZ0Q',
   // starCount: 4,
    expanded: false,
    list: [
        {
            content: 'How sekhametsi started',
          },
          {
            content: 'Challenges along the way',
          },
          {
            content: 'Investment philosophy',
          },
          {
            content: 'The Sekhametsi of the future.',
          },
    ],
  },
  
  
];

const PopularCourse = () => {
  return (
    <Box sx = {styles.whoweare}>
      <Container>
      <BlockTitle
					title='Podcasts'
					text='The story of sekahmetsi'
				/>
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
whoweare : {
        pt: ['70px', null, null, '80px', '120px', null, '130px'],
        backgroundColor : 'background'

        },
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
 //   col: {},
  },
};
