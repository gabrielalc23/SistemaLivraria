import { Carousel}     from 'react-bootstrap';
import avatarImage     from '../../public/FilmesImgs/avatarImage';
import vingadoresImage from '../../public/FilmesImgs/vingadoresImage';
import reileaoImage    from '../../public/FilmesImgs/reileaoImage';

const FilmesCarrosel = () => {
    return (
        <>
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img src={avatarImage} className='w-100' />
                    <Carousel.Caption>
                        <h1>Penis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={vingadoresImage} className='w-100 ' />
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
        </>
    );
}
export default FilmesCarrosel;