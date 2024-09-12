import { Row } from 'react-bootstrap'


const Hero2 = ({title,subtitle}) => {
  return (
    <Row className='mx-0 my-5 text-center d-flex justify-content-center align-items-center'>
        <h3>{title}</h3>
        <div
        className=' my-3'
        style={{width:"60px",height:"4px",backgroundColor:"var(--main-background-color) " }}
        ></div>
        <p >{subtitle}</p>
    </Row>
  )
}

export default Hero2
