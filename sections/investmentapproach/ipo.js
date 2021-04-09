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
									It is the intention of Sekhametsi to fully list in the Maseru
									Securities Market. We intend to be done with all compliance
									and due diligence processes to be fully list in the 3rd
									quarter of 2021.{' '}
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
