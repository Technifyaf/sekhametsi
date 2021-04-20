import react from 'react';
import { Box, Container, Grid, Heading, Text, Flex } from 'theme-ui';
import { Link } from '../../components/link';
import TeamCard from '../../components/cards/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import SectionHeader from '../../components/sectionheading';


import Member1 from '../../assets/team/Lebete.jpg';
import Member2 from '../../assets/team/Moteane_2.jpg';
import Member3 from '../../assets/team/Kotelo_2.jpg';
import Member4 from '../../assets/team/Relebohile.jpg';
import Member5 from '../../assets/team/Khomari.jpg';
import Member6 from '../../assets/team/limpho.jpg';
import Member7 from '../../assets/team/limpho.jpg';
import Member8 from '../../assets/team/lintle.jpeg';

import Member9  from '../../assets/team/limpho.jpg';


const data = [
    {
      id: 1,
      imgSrc: Member1,
      altText: 'Leboela Lebete',
      title: 'Leboela Lebete',
      designation: 'Chairman',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 2,
      imgSrc: Member2,
      altText: 'Matjato Moteane',
      title: 'Matjato Moteane',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 3,
      imgSrc: Member3,
      altText: 'Palo Kotelo',
      title: 'Palo Kotelo',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 4,
      imgSrc: Member4,
      altText: 'Relebohile Sefako',
      title: 'Relebohile Sefako',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 5,
      imgSrc: Member5,
      altText: 'Lebohang Khomari',
      title: 'Lebohang Khomari',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 6,
      imgSrc: Member6,
      altText: 'Limpho Maema',
      title: 'Limpho Maema',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
   
    {
      id: 7,
      imgSrc: Member7,
      altText: 'Lesrotholi Seeiso',
      title: 'Lerotholi Seeiso',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
    {
      id: 8,
      imgSrc: Member8,
      altText: 'Lintle Thamae',
      title: 'Lintle Thamae',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    }, {
      id: 9,
      imgSrc: Member9,
      altText: 'Naledi Maphathe',
      title: 'Naldi Maphathe',
      designation: 'Member',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
    },
  ];

const Board = () => {
	return (

    <Container sx = {styles.wrapper}>
           <SectionHeader
          slogan="The Board"
          title="service, dedication, transparency and a willingness to win"
          
        />

      
                <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
            
	</Container>
	);
};

export default Board;

const styles = {
  wrapper: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background',
	},
	
    grid: {
   

        mt: [0, null, -6, null, -4],
        gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
        gridTemplateColumns: [
          'repeat(2,1fr)',
          null,
          'repeat(2,1fr)',
          null,
          'repeat(3,1fr)',
        ],
      },
};
