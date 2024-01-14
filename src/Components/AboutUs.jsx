import { Box, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, IconButton, Heading,Text } from '@chakra-ui/react';
import image from './sddefault.jpg';
import { FaPlayCircle } from 'react-icons/fa';

const VideoPopupComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
      <Heading
            align={'center'}
            marginTop={'10px'}
            marginBottom={'10px'}
            >About Us</Heading>
            <hr style={{border:'1px solid',width:"50%", margin:"auto"}}/>

        <Text fontWeight={'300'} textAlign={'center'} marginTop={'20px'}>At Galo Energy, we understand the vital role that water plays in agriculture and rural development. With conventional water pumps often proving to be costly and environmentally harmful, we have embraced solar technology to revolutionize the way water is accessed and utilized. Our solar pumps are designed to operate seamlessly, utilizing solar energy to pump water from wells, rivers, and reservoirs without the need for grid electricity or fuel-powered generators.</Text>
      </Box>
      <Box position="relative" onClick={onOpen} textAlign="center" marginTop={'10px'}>
        {/* Image in clickable div */}
        <Image src={image} alt="Clickable Image" width="400px" height="400px" style={{ margin: 'auto' }} />

        {/* Play button */}
        <IconButton
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          icon={<FaPlayCircle size={50} color="red" />}
          variant="ghost"
          aria-label="Play video"
        />
      </Box>

      {/* Modal (Popup div) */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent width={{ base: '90%', lg: '100%' }} paddingTop={{ base: '40px', md: '', lg: '30px' }}>
          <ModalCloseButton />
          <ModalBody>
            {/* Embedded YouTube video */}
            <Box position="relative" paddingBottom={{ base: '100%', md: '56.25%', lg: '56.25%' }} height="0" overflow="hidden" width={{ base: '100%', lg: '100%' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/egaNeKMQF6U?si=7-GR0TaFRH67rOiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoPopupComponent;
