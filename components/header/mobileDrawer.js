import React, { useContext } from 'react';
import { Button, Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from '../drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Link from 'next/link'
import { Facebook, Twitter, Github, Dribbble } from '../customIcon';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import menuItems from './header.data';
import Logo from '../logo';
import LogoDark from '../logo';

const social = [
  {
    path: '/',
    icon: <Facebook />,
  },
  {
    path: '/',
    icon: <Twitter />,
  },
  {
    path: '/',
    icon: <Github />,
  },
  {
    path: '/',
    icon: <Dribbble />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // download pdf file
  const downloadPdf = () => {
  fetch("sekhametsi.pdf").then((response) => {
    response.blob().then((blob) => {
      // new pdf object
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "sekhametsi.pdf";
      alink.click();
    });
  });
};

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="22px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo src={LogoDark} />
          <Box sx={styles.menu}>
            {menuItems.map(({ path, label }, i) => (
             <ul sx={styles.nav.navLink}>	
             {path === '/' ? (
                  <a onClick={downloadPdf}>{label}</a>
                ) : (
                  <Link activeClass='active' href={path}>{label}</Link>
                )}
             </ul>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <Button variant="primary" sx={styles.button}>
              Register Now
            </Button>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 960px)': {
      display: 'none',
    },
  },
  nav: {
		mx: 'auto',
		'@media screen and (max-width: 960px)': {
			display: 'none',
		},
		navLink: {
			fontSize: '16px',
			color: '#4CA4AD',
			fontWeight: '400',
			cursor: 'pointer',
			lineHeight: '1.2',
			mr: '0px',
			transition: '500ms',
			':last-child': {
				mr: '10',
			},
			'&:hover, &.active': {
				color: '#CFA22B',
			},
		},
	},

  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',

    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
      py: '5px',
      cursor: 'pointer',
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: 'primary',
    color: '#fff',
  },
};

export default MobileDrawer;
