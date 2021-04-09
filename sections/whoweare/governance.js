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
								<Heading as='h3'>Governance</Heading>
								<hr color='gold'></hr>

								<Text as='p'>
									Sekhametsi Investment Consortium is regulated and accountable
									to the Central Bank of Lesotho and its shareholders.
									Sekhametsi is committed to good corporate governance & ethical
									leadership.
                                    <br/>  <br/>
                                    It is governed by a Board of Directors who are
									elected by members every 3 years. The Board exercises
									stewardship and sets the ethical tone through upholding the
									urgency theory principle in all forms of conduct. The board
									embrace innovation, accountability and strive for prudence in
									all of the company’s dealings. The key purpose is to ensure
									the sustainability of Sekhametsi by collectively directing its
									affairs, while meeting stakeholders’ appropriate interests.
                                    <br/>  <br/>
                                    The board is supported and observed by committees set up to
									action and initiate activities and imperatives of SMIC. The
									Audit and Risk Committee which in line with the charter
									ensures effective operational controls and integrity of the
									financial statements. The Investment and Strategy committee
									seeks, receives, vets and assesses potential startups and
									companies for investment consideration and eligibility to be
									included in the Sekhametsi Investment Portfolio. The
									Directors’ Affairs Committee ensures remuneration policy is
									upheld, succession planning of the board and evaluation of
									board performance.
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
