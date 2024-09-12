import { Card, Col, Row } from 'react-bootstrap'
import './ImgSection.css'


const ImgSection = ({src,alt,Info2,title,subtitle}) => {
  return (
    <div className='mx-0'>
       <div className=' mx-0 my-5 w-100 d-flex justify-content-center align-items-center'>
        
        <Row className='mx-0 w-75 section '>
           <Col className=' d-flex justify-content-center position-relative '>
           <img className='img2' src={src} alt={alt} />
           </Col>
            <Col className='text'>
            <h3 >{title}</h3>
            <div
            className=' my-3'
            style={{width:"60px",height:"4px",backgroundColor:"var(--main-background-color) " }}
            ></div>
            <p>{subtitle}</p>
            <div className='px-2 py-0 mx-0'>
            {
                Info2.map((e,i)=>{
                    return(
                        <div className='mb-2' key={i}>
                            <Card key={i} className=' border-0 m-1'>
                                <Row className='mx-0'>
                                    <Col xs={2}  className=' d-flex justify-content-center align-items-center'>
                                    <div className='fs-3  py-3 px-3  icon shadow d-flex justify-content-center align-items-center'>{e.icon}</div>
                                    </Col>
                                    <Col  className='m-0 '>    
                                    <div className='fs-6  my-2 text-secondary fw-bold'>{e.title}</div>
                                    <div className='fs-6 text-body-secondary w-100 '>{e.subtitle}</div>
                                    </Col>
                                </Row>
                            
                        
                            </Card>
                        </div>
                    )
                })
            }
           
            </div>


            </Col>
        </Row>
        </div>
    </div>
  )
}

export default ImgSection
