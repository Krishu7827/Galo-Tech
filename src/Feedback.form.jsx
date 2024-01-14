import { Box, Input, Textarea, Button,Heading } from '@chakra-ui/react';
import {useToast} from '@chakra-ui/react'
import { useState } from 'react';

const ContactForm = () => {

    const Toast = useToast()
  const [formData, setFormData] = useState({
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log("yes")
 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /** Logic */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(formData.comment && formData.email && emailRegex.test(formData.email)){
  
    Toast({
        title: 'Sent',
        description: "Comment Sent it",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position:"top-right"
     })
}else{
    Toast({
        title: 'Invalid Input',
        description: "Enter Valid Email & Comment",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position:"top-right"
     })
}
    console.log('Form submitted:', formData);
  };

  return (
    <Box>
         <Heading
            align={'center'}
            marginTop={'10px'}
            marginBottom={'10px'}
            >Share Your Thought</Heading>
            <hr style={{border:'1px solid',width:"50%", margin:"auto"}}/>
            
    <Box width={'100%'} padding={{base:'10px',lg:'20px'}} bgColor={'#FCD249'} marginTop={'20px'}>
       
    <Box maxW="md" mx="auto" p={4} borderWidth="1px" borderRadius="lg" bgColor={'white'}>
      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <label htmlFor="email" style={{fontWeight:'400'}}>Email:</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Box>
        <Box mb={4}>
          <label htmlFor="comment">Comment:</label>
          <Textarea
            id="comment"
            name="comment"
            placeholder="Type your comment here"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </Box>
        <Button type="submit" colorScheme="teal" onClick={handleSubmit}>
          Send
        </Button>
      </form>
    </Box>
    </Box>
    </Box>
  );
};

export default ContactForm;
