import './Carousel.css'

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';


const Carousels = ({ CarouselInfo,btn }) => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                {
                    CarouselInfo?.map((e, i) => {
                        return (
                            <Carousel.Item key={i} className='w-100 Slideimg'>
                                <img
                                    className="d-block "
                                    src={e.src}
                                    alt={e.alt}
                                />
                                <Carousel.Caption >
                                    <Container className='caption  p-xs-5 p-lg-5 py-lg-3 mb-lg-5 '>
                                    <h3 className='text-secondary fw-bold py-2 fs-xs-5 '>{e.title}</h3>
                                    <p>{e.subtitle}</p>
                                    <Button className='btn-nav px-4 py-2 border-0 mb-3' variant="primary">{btn}</Button>
                                    </Container>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>


        </>
    )
}

export default Carousels





