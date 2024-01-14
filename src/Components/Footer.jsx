import { Box, Heading, Flex, Text, Link, Divider, IconButton,Image } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = ()=>{

    return (
       <Box bgColor={'black'} paddingTop={'20px'} paddingBottom={'20px'} paddingLeft={{base:'10px',md:'0px',lg:'0px'}} paddingRight={{base:'10px',md:'0px',lg:'0px'}} >
        <Box width={'100%'} margin={'auto'}>
        <Image
                    alt='logo'
                    src='https://galo.co.in/wp-content/uploads/2023/11/white-min.png'
                    width={'20%'}
                    margin={'auto'}
                   
                />
        
        </Box>
        <Box color={'white'} marginTop={'10px'} marginBottom={'10px'}>
       <Text fontWeight={'500'} align={'center'}>
       Galo Energy is a manufacturer that tackles the customer need for electricity by introducing our sustainable products.
The products are proudly made in India.
       </Text>
       <Text align='center' fontWeight={'bold'}>
       Info@galo.co.in +91-9205005791
       </Text>
        </Box>
        <hr style={{color:'grey'}}/>
        <Flex paddingTop={'20px'}  color={'white'} fontWeight={'500'} display={{base:'block',md:'flex',lg:"flex"}} align={{base:'center'}} justifyContent={{base:"none",md:'space-between',md:'space-around',lg:'space-between',lg:'space-around'}}>
        <Text   align={{base:'center'}} >Copyright 2023 Galo Energy Pvt. Ltd. All Rights Reserved.</Text>
        <Text  align={{base:'center'}}>Design By Krishna ❤️</Text>
        </Flex>
       </Box>

    )
}


export default Footer