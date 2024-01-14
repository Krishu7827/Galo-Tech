/********* Import        ********** */
import React, { useState } from 'react';

import {

    Box,
    Flex,
    Spacer,
    Button,
    Link,
    IconButton,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    VStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
    HStack,

} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';


/****************** Component          ********************** */
const Navbar = () => {

    /***************  States ************** */


    const [isDrawerOpen, setDrawerOpen] = useState(false);


    /******************* function *********************** */
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    /******   responsive Navbar close toggle****** */
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    /**********Notification Generate function************** */

    return (
        <Flex
            p={{ base: 2, md: 4 }}
            bgColor="#FCD249;"
            color="white"
            alignItems="center"
            position="sticky"
            top="0"
            zIndex="1000"
            boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}
            style={{ position: "sticky" }}
        >
            <Box>


                <Image
                    alt='logo'
                    src='https://galo.co.in/wp-content/uploads/2023/11/black-min.png'
                    width={'100px'}

                />
            </Box>
            <Spacer />
            <HStack spacing={{base:5,md:5,lg:6}}>
                <Box>
                    <a href='https://www.facebook.com/people/Galo-Energy/100081798261662/'>
                        <Image
                            alt='logo'
                            src='https://cdn-icons-png.flaticon.com/128/1384/1384015.png'
                            width={{ base: '30px', md: '40px', lg: '40px' }}

                        />
                    </a>
                </Box>
                <Box>
                    <a href='https://www.instagram.com/galo_energy/'>
                        <Image
                            alt='logo'
                            src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png'
                            width={{ base: '30px', md: '40px', lg: '40px' }}

                        />
                    </a>
                </Box>
                <Box>
                    <a href=''>
                        <Image
                            alt='logo'
                            src='https://cdn-icons-png.flaticon.com/128/1384/1384005.png'
                            width={{ base: '30px', md: '40px', lg: '40px' }}

                        />
                    </a>
                </Box>

            </HStack>
            <Spacer />
            <Box display={{ base: 'none', md: 'flex' }} borderRadius={30}>
                {/* Display buttons for larger screens */}



                <Button variant="ghost" mr={4} color={"black"}>
                    Latest Posts
                </Button>
                <Button variant="ghost" mr={4} color={"black"}>
                    Featured Posts
                </Button>
                <Button variant="ghost" mr={4} color={"black"}>
                    Trending Posts
                </Button>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color={"black"} bgColor={'#FCD249'} >
                        Categories
                    </MenuButton>

                    <MenuList textColor={'black'} >
                        <MenuItem >Technology</MenuItem>
                        <MenuItem>Policy</MenuItem>
                        <MenuItem color={'black'}>economics</MenuItem>
                    </MenuList>
                </Menu>



            </Box>
            <Box display={{ base: 'flex', md: 'none' }} >
                {/* Display hamburger icon for smaller screens */}
                <IconButton
                    icon={<HamburgerIcon size={{ base: "20" }} />}
                    variant="ghost"
                    onClick={handleDrawerOpen}
                    color={"black"}
                />
            </Box>

            {/* Responsive Drawer for smaller screens */}
            <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} placement="left" >
                <DrawerOverlay />
                <DrawerContent bgColor="#FCD249" color={"white"} >
                    <DrawerCloseButton color={"black"} />
                    <DrawerBody>
                        {/* Use VStack to stack items vertically */}
                        <VStack spacing={4} align="start">
                            <Button variant="ghost" mr={4} color={"black"}>
                                Latest Posts
                            </Button>
                            <Button variant="ghost" mr={4} color={"black"}>
                                Featured Posts
                            </Button>
                            <Button variant="ghost" mr={4} color={"black"}>
                                Trending Posts
                            </Button>

                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color={"black"} bgColor={'#FCD249'}>
                                    Categories
                                </MenuButton>

                                <MenuList textColor={'black'} >
                                    <MenuItem >Technology</MenuItem>
                                    <MenuItem>Policy</MenuItem>
                                    <MenuItem color={'black'}>economics</MenuItem>
                                </MenuList>
                            </Menu>





                        </VStack>
                    </DrawerBody>
                </DrawerContent>

            </Drawer>

        </Flex>
    );
};


export default Navbar