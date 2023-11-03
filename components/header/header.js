
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { IoIosUnlock } from 'react-icons/io';
import Logo from '../logo';
import Link from 'next/link'

import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobileDrawer';
import menuItems from './header.data';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function Header({ className }) {

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

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];

	return (
		<DrawerProvider>
			<header sx={styles.header} className={className}>
				<Container sx={styles.container}>
					<Logo />

					<Flex as='nav' sx={styles.nav}>
					{menuItems.map(({ path, label }, i) => (
                     <ul sx={styles.nav.navLink} key={i}>
                       {path === '/' ? (
                         <a onClick={downloadPdf}> {label}</a>
                          ) : (
                         <Link activeClass='active' href={path}>{label}</Link>
                      )   }
                    </ul>
                ))}

</Flex>

					<a
						href='/faq'
						ml={2}
						label='Get Technified'
						sx={styles.headerBtn}
						variant='buttons.primary'
					>
FAQ					</a>
					

					<MobileDrawer />
				</Container>
			</header>
		</DrawerProvider>
	);
}

const styles = {
	headerBtn: {
		backgroundColor: 'rgba(0,0,0,0)',
		fontSize: '16px',
		fontWeight: 'bold',
		letterSpacing: '-0.16px',
		borderRadius: '5px',
		border: '2px solid',
		borderColor: 'primary',
		color: 'primary',
		padding: '8px 24px',
		display: ['none', null, null, null, 'inline-block'],
		ml: ['0', null, null, 'auto', '0'],
		mr: ['0', null, null, '20px', '0'],
		'&:hover': {
			color: 'white',
			backgroundColor: 'secondary',
			borderColor:'secondary',
		},
	},
	header: {
		color: '#4CA4AD',
		fontWeight: 'normal',
		py: '25px',
		width: '100%',
		position: 'fixed',
		top: 0,
		left: 0,
		backgroundColor: 'transparent',
		transition: 'all 0.4s ease',

		'&.sticky': {
			backgroundColor: 'background',
			color: '#4CA3AD',
			py: '15px',
			boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
		},
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		width: [null, null, null, null, null, null, '1390px'],
		'@media screen and (max-width: 960px)': {
			justifyContent: 'space-between',
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
};
