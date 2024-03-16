import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Auth from '../components/Layouts/Auth';
import Card from '../components/Fragments/Card';
import imageDummy from '../../src/components/Utils/imageDumy.json';

function AutoPlay() {
   const images = imageDummy;

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
   };

   return (
      <Auth>
         <div className='slider-container mx-auto max-w-7xl mb-10'>
            <Slider {...settings}>
               {images.map((image) => (
                  <Card
                     key={image.id}
                     className='rounded-lg overflow-hidden shadow-lg'
                  >
                     <Card.Title>
                        <img
                           src={image.image}
                           alt=''
                           className='w-full max-h-screen object-cover rounded'
                        />
                     </Card.Title>
                     <Card.Body className='p-4'>
                        <div className='flex flex-col justify-center items-center'>
                           <h2 className='text-lg font-bold mb-2'>{image.title}</h2>
                           <p className='text-gray-600'>{image.description}</p>
                        </div>
                     </Card.Body>
                  </Card>
               ))}
            </Slider>
         </div>
      </Auth>
   );
}

export default AutoPlay;
