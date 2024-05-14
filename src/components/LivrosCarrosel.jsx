import theWitcherImage from     '../../public/LivrosImgs/theWitcherImage.jpg';
import harryPotterImage from    '../../public/LivrosImgs/harryPotterImage.jpg';
import senhorDosAneisImage from '../../public/LivrosImgs/senhorDosAneisImage.jpg';
import { Carousel } from 'react-bootstrap';

const LivrosCarrosel = () => {
    return (
        <>
            <Carousel className="mt-5">
                <Carousel.Item>
                    <img src={theWitcherImage} className='w-100' />
                    <Carousel.Caption>
                        <h1>Penis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={harryPotterImage} className='w-100 ' />
                    <Carousel.Caption>
                        <h1>Penis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={senhorDosAneisImage} className='w-100' />
                    <Carousel.Caption>
                        <h1>Penis</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
export default LivrosCarrosel;