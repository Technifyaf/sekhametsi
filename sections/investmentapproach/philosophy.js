import react from 'react'
import {Box,Container,Flex,Heading,Text} from 'theme-ui'
import BlockTitle from '../../components/block-title';


const Philosophy = () => {
 return (
     <Box sx = {Styles.whoweare}>
         <Container>
         <BlockTitle
          title="If you want to fast go alone, if you want to far, go together"
          text="The story of Sekhametsi"
        />
             <Box sx ={Styles.row}>
                 <Flex sx = {Styles.col}>
                     <Box sx ={Styles.content}>
                         <Box sx = {Styles.titleBox} >
                             <Heading as="h3">
                                Investment Philosophy
                             </Heading>
                             <hr  color ="gold"></hr>

                              <Text as="p">
                              Sekhametsi currently enlists a buy-and-hold portfolio strategy, with a long term-investment horizon. We acquire significant minority equity interests in established and start-up businesses that meet one or more of the following criteria:
Sustainability and solid growth prospects
Experienced, qualified and capable management
Strong cash flow generated ethically
Strategic objectives alignment with that of Sekhametsi
Initiatives that addresses the challenges faced by our country and that benefit Basotho nation.
Opportunities for consolidation of businesses in the portfolio

Value proposition: We create value to stakeholders, and primarily our shareholders by using our strong balance sheet to acquire interest in different entities meeting the success criteria. Over a period of time, we offered assistance at a strategic level to investee companies to ensure unlocking of the value.

The mandate for the board is underpinned by the investment objectives of our broad based shareholders which can be categorised into two; investing for dividend income and for capital appreciation (growth of share price).

                              </Text>
                          </Box>

                     </Box>

                 </Flex>
            </Box>
        </Container>
    </Box>   
 )
}
  


export default Philosophy;

const Styles = {

    whoweare : {
        pt: ['70px', null, null, '80px', '120px', null, '130px'],
        backgroundColor : 'background'

        }

}