// NewsCard.js
import React, { useState } from 'react';
import {
  Box,
  Image,
  Text,
  Button,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';

const NewsCard = ({ imageUrl, title, content }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [buttonText, setButtonText] = useState('Read More');

  const handleReadMore = () => {
    onToggle();
    setButtonText(isOpen ? 'Read More' : 'Read Less');
  };

  return (
    
   
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor="#FCD249" width={'100%'}>
      {/* Card content remains unchanged */}
      <Image src={imageUrl} alt="News Image" />
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {title}
        </Text>
        <Collapse in={isOpen}>
          <Text color="gray.600">{content}</Text>
        </Collapse>
        <Button onClick={handleReadMore} mt="4">
          {buttonText}
        </Button>
      </Box>
    </Box>
 
  
   
  );
};

export default NewsCard;
