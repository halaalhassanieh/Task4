import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Hero = ({data}) => {
  return (

<Row className='thirdSection mx-0 d-flex justify-content-center align-items-center'>
           <Container className=' my-5 text-center '>
            <h3 className='text-white fw-semibold py-2 fs-xs-5 '>{data.title}</h3>
            <p className='text-white '>{data.subtitle}</p>
            <div className='d-flex justify-content-center align-items-center w-100 mx-0'
            ><Button className='bg-transparent px-4 py-2 border-white mb-3' >{data.btn}</Button>
            </div>
                
            </Container>
          </Row>

  )
}

export default Hero
