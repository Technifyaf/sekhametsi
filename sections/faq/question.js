import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from '../../components/link';
import BlockTitle from '../../components/block-title';
import Accordion from '../../components/accordion/accordion';

import {
	Label,
	Input,
	Select,
	Textarea,
	Radio,
	Checkbox,
	Slider,
  Button
} from 'theme-ui';

const accordionData = [
	{
		isExpanded: false,
		title: 'How much does it cost to be a credit card merchant?',
		contents: (
			<div>
				For our recent trip to S.A. I booked several accommodation thru SA
				Places. I just wanted to tell you that everything worked out perfectly
				with all the bookings and also your booking was very quick and
				professional. I hope I have the opportunity to re-visit South Africa
				soon, I will then make my bookings with your company again. I will also
				recommend
			</div>
		),
	},
	{
		isExpanded: true,
		title: 'How can I open a merchant account?',
		contents: (
			<div>
				For our recent trip to S.A. I booked several accommodation thru SA
				Places. I just wanted to tell you that everything worked out perfectly
				with all the bookings and also your booking was very quick and
				professional. I hope I have the opportunity to re-visit South Africa
				soon, I will then make my bookings with your company again. I will also
				recommend
			</div>
		),
	},
	{
		isExpanded: false,
		title: 'How long does the application take?',
		contents: (
			<div>
				For our recent trip to S.A. I booked several accommodation thru SA
				Places. I just wanted to tell you that everything worked out perfectly
				with all the bookings and also your booking was very quick and
				professional. I hope I have the opportunity to re-visit South Africa
				soon, I will then make my bookings with your company again. I will also
				recommend
			</div>
		),
	},
	{
		isExpanded: false,
		title: 'Can I make payment outside of Hong Kong?',
		contents: (
			<div>
				For our recent trip to S.A. I booked several accommodation thru SA
				Places. I just wanted to tell you that everything worked out perfectly
				with all the bookings and also your booking was very quick and
				professional. I hope I have the opportunity to re-visit South Africa
				soon, I will then make my bookings with your company again. I will also
				recommend
			</div>
		),
	},
	{
		isExpanded: false,
		title: 'How do I get the payment complete?',
		contents: (
			<div>
				For our recent trip to S.A. I booked several accommodation thru SA
				Places. I just wanted to tell you that everything worked out perfectly
				with all the bookings and also your booking was very quick and
				professional. I hope I have the opportunity to re-visit South Africa
				soon, I will then make my bookings with your company again. I will also
				recommend
			</div>
		),
	},
];

const QuestionForm = () => {
	return (
		<Box sx={styles.wrapper} as='section' id='faq'>
			<Container>
				<BlockTitle
					title='Frequently asked questions'
					text='Ask your question and get a response a'
				/>
				<Box as='form' onSubmit={(e) => e.preventDefault()}>
					<Label htmlFor='name'>Name</Label>
					<Input name='name' mb={3} />
					<Label htmlFor='password'>Email</Label>
					<Input type='email' name='Email' mb={3} />
				
				
					<Label htmlFor='comment'>Question</Label>
					<Textarea name='comment' rows='6' mb={3} />
				
			
					<Button>Submit</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default QuestionForm;

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
