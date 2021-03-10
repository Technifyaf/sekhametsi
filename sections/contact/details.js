import react from 'react'
import {Box,Container,Flex,Heading,Text} from 'theme-ui'
import BlockTitle from '../../components/block-title';



const Philosophy = () => {
 return (
     <Box sx = {Styles.whoweare}>
            <BlockTitle
					title='Contact '
					text='Details'
				/>
         <Container>
             <Box sx ={Styles.row}>
                         <Box sx = {Styles.titleBox} >
                      
                             <hr  width ='500' color ="gold"></hr>

                             <ul sx={Styles.listitem}>
								 Phone : +266 53094658 <br/>
								  Email : + info@gmail.com <br/>
								 Address : Industrial Area
							 </ul>
							 
                          </Box>
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

        },
         listitem:{
         listStyleType:'none'
     },
     titleBox : {
        textAlign: 'center',
     }

}