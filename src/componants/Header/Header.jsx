import { Col, Row } from 'react-bootstrap'
import './Header.css'


const Header = ({info}) => {
  return (
    <>
   
    
    <Row className='d-sm-flex d-block justify-content-around-sm  align-items-center background-header px-1 py-1 mx-0 w-100'>
      {
        info?.map((e,i)=>{
          return(
            <Col key={i} className='d-flex justify-content-center align-items-center text-white  m-xs-5'>
               <div className='p-1 '>{e.icon}</div>
               <div className=' mt-1'>{e.text}</div>
            </Col>
          )
        })
      }
    </Row>
    
    </>
  )
}

export default Header
