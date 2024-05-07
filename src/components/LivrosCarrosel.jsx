import theWitcherImage from '../../public/LivrosImgs/theWitcherImage';
import harryPotterImage from '../../public/LivrosImgs/harryPotterImage';
import senhorDosAneisImage from '../../public/LivrosImgs/senhorDosAneisImage';
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