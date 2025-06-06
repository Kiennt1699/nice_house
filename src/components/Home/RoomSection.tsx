import { Container, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import APT_3 from '../../assets/rooms/APT_3.jpg';
import APT_4 from '../../assets/rooms/APT_4.jpg';
import APT_6 from '../../assets/rooms/APT_6.jpg';
import APT_8 from '../../assets/rooms/APT_8.jpg';
import Vina_1 from '../../assets/rooms/Vina_1.jpg';


const RoomCarousel = ({ settings, children }: any) => {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

const roomsData = [
  {
    image: APT_3,
    name: 'Cao cấp',
    price: 'giá từ 3.000.000vnđ',
    area: 'diện tích: 65m2',
    beds: '2 phòng',
    rating: 5,
  },
  {
    image: APT_4,
    name: 'Đơn giản',
    price: 'giá từ 2.500.000vnđ',
    area: 'diện tích: 65m2',
    beds: '2 phòng',
    rating: 4,
  },

  {
    image: APT_6,
    name: 'Tiện nghi',
    price: 'giá từ 2.500.000vnđ',
    area: 'diện tích: 65m2',
    beds: '2 phòng',
    rating: 4,
  },

  {
    image: APT_8,
    name: 'Thoải mái',
    price: 'giá từ 2.500.000vnđ',
    area: 'diện tích: 65m2',
    beds: '2 phòng',
    rating: 5,
  },
  {
    image: Vina_1,
    name: 'Đẳng cấp',
    price: 'giá từ 2.500.000vnđ',
    area: 'diện tích: 65m2',
    beds: '2 phòng',
    rating: 4,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RoomCard = ({ children }: any) => {
  return (
    <Box
      sx={{
        padding: '16px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        },
        '& img': {
          borderRadius: '8px',
          transition: 'transform 0.3s ease',
        },
        '&:hover img': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {children}
    </Box>
  );
};

const RoomCarouselSection = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: 'Brice Regular SemiExpanded',
          color: '#343a40',
          fontWeight: 'bold',
          mb: 4,
          fontSize: '2.4rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1rem',
        }}
      >
        CÁC HẠNG PHÒNG
      </Typography>
      <RoomCarousel settings={settings}>
        {roomsData.map((room, index) => (
          <div key={index}>
            <RoomCard>
              <img
                src={room.image}
                alt={room.name}
                style={{ width: '100%', height: '200px',objectFit: 'cover', borderRadius: '8px'}}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Brice Regular SemiExpanded',
                  color: '#343a40',
                  fontWeight: 'bold',
                  mt: 2,
                  fontSize: '1.3rem',
                }}
              >
                {room.name}
              </Typography>
              <Typography
                sx={{ color: '#686868', fontSize: '1rem', mt: 1 }}
              >
                {room.price}
              </Typography>
              <Typography
                sx={{ color: '#686868', fontSize: '0.9rem', mt: 0.5 }}
              >
                {room.area}
              </Typography>
              <Typography
                sx={{ color: '#686868', fontSize: '0.9rem', mt: 0.5 }}
              >
                {room.beds}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    color: '#C19D68',
                    fontWeight: 'bold',
                    mr: 1,
                    fontSize: '1.2rem',
                  }}
                >
                  {'★'.repeat(room.rating)}
                </Typography>
                <Typography
                  sx={{
                    color: '#686868',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {room.rating === 5 ? 'Sang trọng' : 'Thoải mái'}
                </Typography>
              </Box>
            </RoomCard>
          </div>
        ))}
      </RoomCarousel>
    </Container>
  );
};

export default RoomCarouselSection;
