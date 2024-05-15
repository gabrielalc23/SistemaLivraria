<<<<<<< HEAD
import { Carousel } from 'react-bootstrap';
import avatarImage from '../../public/FilmesImgs/avatarImage.jpg'
import vingadoresImage from '../../public/FilmesImgs/vingadoresImage.jpg';
import reileaoImage from '../../public/FilmesImgs/reileaoImage.jpg';
=======
import { Carousel}     from 'react-bootstrap';
import avatarImage     from '../../public/FilmesImgs/avatarImage.jpg';
import vingadoresImage from '../../public/FilmesImgs/vingadoresImage.jpg';
import reileaoImage    from '../../public/FilmesImgs/reileaoImage.jpg';
>>>>>>> 3112abfc9e745cb6865eb2cec7b6be7f2f482826

const FilmesCarrosel = () => {
    return (
        <>
<<<<<<< HEAD
            <div className="d-flex align-items-center justify-content-center bg-dark">
                <Carousel>
                    <Carousel.Item>
                        <img src={avatarImage} className='w-100' />
                        <Carousel.Caption>
                            <h1>Avatar</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={vingadoresImage} className='w-100 ' />
                        <Carousel.Caption>
                            <h1>Vingadores</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={reileaoImage} className='w-100' />
                        <Carousel.Caption>
                            <h1>O Rei Leão</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
=======
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img src={avatarImage} className='w-100' />
                    <Carousel.Caption>
                        <h1>Penis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={vingadoresImage} className=' d-block w-100 ' />
                    <Carousel.Caption>
                        <h1>Penis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={reileaoImage} className='w-100' />
                    <Carousel.Caption>
                        <h1>Penis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
>>>>>>> 3112abfc9e745cb6865eb2cec7b6be7f2f482826
        </>
    );
}
export default FilmesCarrosel;