import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Auth from '../components/Layouts/Auth';
import Card from '../components/Fragments/Card';

function AutoPlay() {
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

   const imageDummy = [
      {
         id: 1,
         image: '1.jpeg',
         title: 'The title of the image 1',
         description: 'Description for image 1',
      },
      {
         id: 2,
         image: '/2.jpeg',
         title: 'The title of the image 2',
         description: 'Description for image 2',
      },
      {
         id: 3,
         image: '3.jpeg',
         title: 'The title of the image 3',
         description: 'Description for image 3',
      },
      {
         id: 4,
         image: '4.jpeg',
         title: 'The title of the image 4',
         description: 'Description for image 4',
      },
   ];

   return (
      <Auth>
         <div className='slider-container mx-auto max-w-7xl mb-10'>
            <Slider {...settings}>
               {imageDummy.map((image) => (
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
