import { Col, Row ,Card } from 'react-bootstrap'
import './VideoSection.css'


const VideoSection = ({img,alt,icon ,title,subtitle,text,endtext,miniInfo}) => {
  return (
    <div className='mx-0 '>
    <div className=' mx-0 my-5 w-100 d-flex justify-content-center align-items-center'>
        
    <Row className=' w-75 mx-0  section'>
       <Col className=' d-flex justify-content-center position-relative '>
       <img className='img ' src={img} alt={alt} />
       <div className='playicon position-absolute top-50 left-50 rounded-circle text-white d-flex justify-content-center align-items-center'>{icon}</div>
       </Col>
        <Col className='text'>
        <h3 >{title}</h3>
        <p>{subtitle}</p>
        {
            text.map((e,i)=>{
                return(
                    <div className='mb-2' key={i}>
                        <span className='check m-1'>{e.icon2}</span> {e.text2}
                    </div>
                )
            })
        }
        <p>{endtext}</p>
        </Col>
    </Row>
    </div>
    <section className='mx-0 w-100 my-5 d-flex justify-content-center align-items-center'>
        <div className='mx-0 w-75 d-flex section mb-5 justify-content-evenly align-items-center'>
        {
        miniInfo.map((e,i)=>{
          return(
            <Card key={i} className=' my-3 mx-2 w-75 shadow  d-flex justify-content-center align-items-center '>
              <Row className='flex-nowrap'>
                <Col xs={2}  className=' d-flex justify-content-center align-items-center'>
                <div className='fs-2 icon '>{e.icon}</div>
                </Col>
                <Col  className='m-0 py-3 w-100 '>    
                 <div className='fs-4  my-2 text-secondary fw-bold'>{e.title}</div>
                <div className='fs-6 text-body-secondary w-100 px-1 '>{e.subtitle}</div>
                </Col>
              </Row>
          
     
        </Card>
          )
        })
        }
        </div>

       </section>
    </div>

  )
}

export default VideoSection

