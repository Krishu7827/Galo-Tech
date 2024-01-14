import { useEffect, useState } from "react";

import {Box,Heading} from '@chakra-ui/react'
import NewsCard from "./Components/News.Card.";
const NewsComponent = () => {
    const [News, setNews] = useState('');

    useEffect( () => {
        const get = async()=>{
            const data = [
                {
                 
                  "imageUrl": "https://www.hindustantimes.com/ht-img/img/2023/03/22/550x309/Black_and_silver_solar_panels_1676005255798_1679523955977_1679523955977.jpg",
                  "title": "Delhi Budget: 25% power demand to be met by solar panels by 2025",
                  "content": "The Delhi government, he said, has allocated ₹3,348 crore to the power sector for the financial year 2023-24, barely unchanged from the ₹3,340 crore allocated last year. The Capital’s solar policy will be notified next month, Delhi finance minister Kailash Gahlot said during the state Budget address on Wednesday, adding that the city will look to generate 25% of its energy needs through solar panels by 2025."
                },
                {
                
                  "imageUrl": "https://cdn.britannica.com/85/162485-050-7670426D/Solar-panel-array-rooftop.jpg",
                  "title": "MoneyTalks: Galo Solar Company Has Best Solar",
                  "content": "The Delhi government, he said, has allocated ₹3,348 crore to the power sector for the financial year 2023-24, barely unchanged from the ₹3,340 crore allocated last year. The Capital’s solar policy will be notified next month, Delhi finance minister Kailash Gahlot said during the state Budget address on Wednesday, adding that the city will look to generate 25% of its energy needs through solar panels by 2025."
                },
                {
                
                  "imageUrl": "https://www.servotech.in/_next/image?url=%2Fimages%2Fsolar%2FSolar-Products-2140x914.webp&w=3840&q=75",
                  "title": "Naukri.com: Galo Solar Company is Contrbuting in Employability ",
                  "content": "The Delhi government, he said, has allocated ₹3,348 crore to the power sector for the financial year 2023-24, barely unchanged from the ₹3,340 crore allocated last year. The Capital’s solar policy will be notified next month, Delhi finance minister Kailash Gahlot said during the state Budget address on Wednesday, adding that the city will look to generate 25% of its energy needs through solar panels by 2025."
                }
              ];

              setNews(data)
              
    }

    get()
        return ()=>{

        }
    }, []);

    return (
        <Box >
            <Heading
            align={'center'}
            marginTop={'10px'}
            marginBottom={'10px'}
            >News</Heading>
            <hr style={{border:'1px solid',width:"50%", margin:"auto"}}/>
        <Box display="grid" gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)',lg:'repeat(3, 1fr)' }} gridColumnGap={{md:'10px',lg:'10px'}} gridRowGap={{base:'10px',lg:'10px',md:'10px'}} marginTop={'20px'}>
         
        {News &&
          News.map((news, ind) => (
            <NewsCard key={ind} imageUrl={news.imageUrl} title={news.title} content={news.content} />
          ))}
      </Box>
      </Box>
    );
}

export default NewsComponent;
