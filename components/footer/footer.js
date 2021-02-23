import { jsx, Box, Text, Container } from 'theme-ui';
import {Link} from '../../components/link'
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [30, 40],
          paddingBottom: [30, 65],
        }}
      >
        <Box sx={styles.left}>
        
          <Text as="p">
            &copy; {new Date().getFullYear()} All right reserved - Design &
            Developed by Creativ lab
          </Text>
          
        </Box>
        <Box sx={styles.right}>
          <Link path="/" label="Home" />
          <Link path="/faq" label="FAQs" />
          <Link path="/financialtools" label="Resources" />
         
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'Primary',
      opacity: 0.6,
      mt: ['10px', null, '0'],
    },
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    fontSize: 2,
    alignItems: 'center',
    color: 'Primary',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary',
      },
    },
    'a+a': {
      marginLeft: '30px',
    },
  },
};
