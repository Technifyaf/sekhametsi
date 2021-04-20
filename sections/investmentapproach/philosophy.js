import react from 'react';
import { Box, Container, Flex, Heading, Text } from 'theme-ui';
import BlockTitle from '../../components/block-title';

const Philosophy = () => {
	return (
		<Box sx={Styles.whoweare}>
			<Container>
				<BlockTitle
					title='If you want to fast go alone, if you want to far, go together'
					text='The story of Sekhametsi'
				/>
				<Box sx={Styles.row}>
					<Flex sx={Styles.col}>
						<Box sx={Styles.content}>
							<Box sx={Styles.titleBox}>
								<Heading as='h3'>Investment Philosophy</Heading>
								<hr color='gold'></hr>

								<Text as='p'>
									Sekhametsi currently employs a buy-and-hold portfolio
									strategy, with a long term-investment horizon to create value
									for shareholders through dividend income and for capital
									appreciation (growth of share price).The company acquires
									significant minority equity interests in established and
									start-up businesses that satisfy the investment due diligence
									criteria: sustainability; past business performance and growth
									prospects, competent management, good governance; alignment
									with Sekhametsi strategic goals and national development
									objectives. Sekhametsi also provides technical assistance at a
									strategic level to investee companies to increase the chances
									of success and to unlock the full value of the investment.
								</Text>
							</Box>
						</Box>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default Philosophy;

const Styles = {
	whoweare: {
		pt: ['70px', null, null, '80px', '120px', null, '130px'],
		backgroundColor: 'background',
	},
};
