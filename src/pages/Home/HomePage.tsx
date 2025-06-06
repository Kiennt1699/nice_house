import { Box } from '@mui/material';
import ImageCarousel from '../../components/Home/ImageCarousel';
import RoomCarouselSection from '../../components/Home/RoomSection';
import FacilitiesSection from '../../components/Home/FacilitiesSection ';
import IntroSection from '../../components/Home/NicehouseIntro ';
import Facilities from '../../components/Home/Facilities ';
import FacilitiesOffer from '../../components/Home/FacilitiesOffer';
import Rating from '../../components/Home/Rating';
import BlogSection from '../../components/Home/BlogSection';
const HomePage = () => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* Carousel Section */}
      <ImageCarousel />
      {/* Room Carousel Section */}
        <RoomCarouselSection />
      {/* Facilities Section */}
        <FacilitiesSection />
      {/*About NiceHouse*/ }
      <IntroSection/>
       {/*Facilities*/ }
       <Facilities/>
       {/*About NiceHouse*/ }
       {/* <RoomCarouselSection/> */}
        {/*Facilities Offer*/ }
       <FacilitiesOffer/>
       {/*Cutomer Feedback*/ }
       <Rating/>
        {/*Blog Travel*/ }
       <BlogSection/>
    </Box>
  );
};

export default HomePage;
