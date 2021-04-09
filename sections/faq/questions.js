import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from '../../components/link';
import BlockTitle from '../../components/block-title';
import Accordion from '../../components/accordion/accordion';

const accordionData = [
	{
		isExpanded: false,
		title: 'I’m interested, can you tell me more about the company?',
		contents: (
			<div>
				Sekhametsi Investment Consortium is a public company (owned by over 500
				shareholders) established in 2000 (reg I2000/173A). It has diversified
				interest in the following sectors; Telecommunication, Property,
				Financial Services and Textile.
			</div>
		),
	},
	{
		isExpanded: true,
		title: 'Can I buy shares from Sekhametsi and what is the share price?',
		contents: (
			<div>
				Currently Sekhametsi shares are fully subscribed. However, ad-hoc
				private sales between existing and new shareholders often occurs. The
				company does not participate in notifying the public of the availability
				of shares for sale but only assists in the transfer of such shares
				between the buyer and seller. Furthermore, the company does not
				determine the share price, the sales price is determined on a
				‘willing-buyer willing-seller’ basis.
			</div>
		),
	},


	{
		isExpanded: false,
		title: 'Do you help start-up businesses?',
		contents: (
			<div>
				Currently, Sekhametsi invests in assets in excess of M5 million which is
				beyond the range of majority of start-up businesses. The company has
				however, resolved to establish a fund specifically targeted for start-up
				businesses owned by Basotho youth. Once established the targeted
				investments shall be plus/minus M500,000.00. Invariably, the company
				considers the viability of any intended investments after conducting a
				thorough due diligence exercise.
			</div>
		),
	},
  {
		isExpanded: false,
		title: 'Are you issuing shares anytime soon?',
		contents: (
			<div>
				The company has not resolved to increase its share capital. However, watch the space.
			</div>
		),
	},
];

const FAQ = () => {
	return (
		<Box sx={styles.wrapper} as='section' id='faq'>
			<Container>
				<BlockTitle
					title='Frequently asked questions'
					text='Ask your question and get a response a'
				/>
				<Flex sx={styles.flex}>
					<Box sx={styles.faqWrapper}>
						<Accordion items={accordionData} />
					</Box>
					<Box sx={styles.content}>
						<Heading as='h3'>
							Do you have any quesiton? Please ask here we ready to support
						</Heading>
						<Text as='p'>
							If your question is not list here, please feel free to make a
							manual support.
						</Text>
						<Link sx={styles.askButton} path='/question'>
							Ask your Question
						</Link>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default FAQ;

const styles = {
	wrapper: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background',
	},
	flex: {
		flexWrap: 'wrap',
		flexDirection: ['column', null, null, null, null, 'row-reverse'],
		pb: ['70px', null, null, null, '90px', null, '130px'],
	},
	content: {
		flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
		maxWidth: ['100%', null, null, '450px', '100%'],
		mx: ['auto', null, null, null, '0'],
		mb: ['0px', null, null, null, '0'],
		textAlign: ['center', null, null, null, null, 'left'],
		mt: ['40px', null, null, null, null, '0'],
		h3: {
			fontSize: ['23px', null, null, null, '24px'],
			lineHeight: [1.5, null, null, null, 1.67],
			color: 'Primary',
			fontWeight: 700,
			letterSpacing: '-1.5px',
			mt: '-5px',
			pr: ['0', null, null, null, null, '30px'],
		},
		p: {
			fontSize: '16px',
			lineHeight: 1.87,
			color: 'Secondary',
			opacity: 0.7,
			mt: '10px',
			pr: ['0', null, null, null, null, '80px'],
		},
	},
	askButton: {
		display: 'inline-block',
		verticalAlign: 'middle',
		backgroundColor: 'primary',
		color: '#fff',
		borderRadius: '5px',
		fontSize: '16px',
		fontWeight: 700,
		p: '6.5px 19px',
		letterSpacing: '-0.16px',
		mt: '25px',
		transition: 'all 500ms ease',
		'&:hover': {
			opacity: 0.8,
		},
	},
	faqWrapper: {
		flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
	},
};
