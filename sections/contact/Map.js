import react from 'react'
import {Box,Container,Heading,Flex,Text} from 'theme-ui'

const Map = () => {
 return (
     <Box sx = {Styles.whoweare}>
         <Container>
             <Box sx ={Styles.row}>
                 <Flex sx = {Styles.col}>
                     <Box sx ={Styles.content}>
                         <Box sx = {Styles.titleBox} >
                             <Heading as="h3">
                                Map
                             </Heading>
                              <Text as="p">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus felis sed urna ultrices ornare. Cras elementum risus sed cursus suscipit. Proin sem velit, blandit at maximus at, consectetur vel tellus. Vestibulum sed iaculis nulla, finibus molestie lorem. Morbi egestas mattis dolor, id rhoncus nisl vulputate sit amet. Sed ornare blandit odio commodo mattis. Ut rhoncus consequat arcu id pharetra. Phasellus vitae odio nec neque laoreet lobortis et non lectus. Duis varius est eu arcu interdum commodo. Quisque pulvinar orci leo, laoreet mattis leo dignissim fringilla. Suspendisse potenti. In eget dapibus mi. Sed nunc felis, efficitur nec posuere et, cursus accumsan est. Sed rhoncus, eros nec sagittis feugiat, nunc mi lacinia odio, eget rutrum ipsum odio id tortor.
                              </Text>
                          </Box>

                     </Box>

                 </Flex>
            </Box>
        </Container>

    </Box>   
 )
}
  


export default Map;

const Styles = {

    whoweare : {
        pt: ['70px', null, null, '80px', '120px', null, '130px'],
        backgroundColor : 'background'

        }

}