import react from 'react'
import {Box,Container,Flex,Heading,Text} from 'theme-ui'

const Philosophy = () => {
 return (
     <Box sx = {Styles.whoweare}>
         <Container>
             <Box sx ={Styles.row}>
                 <Flex sx = {Styles.col}>
                     <Box sx ={Styles.content}>
                         <Box sx = {Styles.titleBox} >
                             <Heading as="h3">
                                Contact
                             </Heading>
                             <hr  color ="gold"></hr>

                             <ul>
								 <li> Phone : +266 53094658</li>
								 <li> Email : + info@gmail.com</li>
								 <li> Address : Industrial Area</li>
							 </ul>
							 
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