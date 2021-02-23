
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

export default function Header({ className }) {
	return (
		<DrawerProvider>
			<header sx={styles.header} className={className}>
				<Container sx={styles.container}>
					<Logo />

					<Flex as='nav' sx={styles.nav}>
						{menuItems.map(({ path, label }, i) => (
						<ul sx ={styles.nav.navLink}>	
							<Link
								activeClass='active'
								//sx = {styles.nav.navLink}
								href={path}
							
								key={i}
							>
								{label}
							</Link>
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
					Ask a question
					</a>
					

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
			backgroundColor: 'black',
			borderColor:'gold',
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
