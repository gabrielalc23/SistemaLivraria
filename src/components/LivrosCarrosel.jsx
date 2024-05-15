import { Carousel } from 'react-bootstrap';

const bookImages = [
  {
    src: '../../public/LivrosImgs/theWitcherImage.jpg',
    title: 'The Witcher',
  },
  {
    src: '../../public/LivrosImgs/harryPotterImage.jpg',
    title: 'Harry Potter',
  },
  {
    src: '../../public/LivrosImgs/senhorDosAneisImage.jpg',
    title: 'Senhor dos Anéis',
  },
];

const BookCarousel = () => {
  return (
    <div className=' d-flex align-items-center justify-content-center bg-dark'>    
    <Carousel className="col-sm-8 col-lg-8 col-md-8 mt-4">
      {bookImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image.src} className="w-100 rounded" />
          <Carousel.Caption>
            <h1 className="">{image.title}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default BookCarousel;