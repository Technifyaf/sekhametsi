import react from 'react';
import { Box, Container, Heading, Flex, Text } from 'theme-ui';

const Ipo = () => {
	return (
		<Box sx={Styles.whoweare}>
			<Container>
				<Box sx={Styles.row}>
					<Flex sx={Styles.col}>
						<Box sx={Styles.content}>
							<Box sx={Styles.titleBox}>
								<Heading as='h3'>Initial Public Offering (IPO)</Heading>
								<hr color='gold'></hr>

								<Text as='p'>
									It is the intention of Sekhametsi to list on the Maseru
									Securities Market to widen investment opportunities for more
									Basotho to deepen our impact.{' '}
								</Text>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Ipo;

const Styles = {
	whoweare: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background',
	},
};
