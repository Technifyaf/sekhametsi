import react from 'react'
import {Box,Container,Heading,Flex,Text} from 'theme-ui'
import BlockTitle from '../../components/block-title';


const Articles = () => {
 return (
     <Box sx = {Styles.whoweare}>
         <Container>
         <BlockTitle
          title="If you want to fast go alone, if you want to far go together"
          text="The story of sekahmetsi"
        />
             <Box sx ={Styles.row}>
                 <Flex sx = {Styles.col}>
                     <Box sx ={Styles.content}>
                         <Box sx = {Styles.titleBox} >
                             <Heading as="h3">
                              News articles
                             </Heading>
                             <hr  align = "left" width ="130px "color ="gold"></hr>

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
  


export default Articles;

const Styles = {

    whoweare : {
        pt: ['70px', null, null, '80px', '120px', null, '130px'],
        backgroundColor : 'background'

        }

}