import { Card, Col, Row } from 'react-bootstrap'
import Hero2 from '../Hero2/Hero2'
import  './Services.css'




const Services = ({ServicesData}) => {
  return (
    <div className='w-100 text-center '>
      <Hero2 title='Services'  subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. Provident dolor voluptatem doloribus nemo aliquam exercitationem" />
        
    <div className='w-100  d-flex justify-content-center align-items-center'>
        <Row className='w-75 section d-flex flex-wrap ' >
        {
            ServicesData.map((e,i)=>{
                return(
                    <Col key={i} className='m-4' style={{width:'40%'}}>
                    <Card className='w-100 py-2 px-5 border-0 shadow' >
                        <div className='w-100 d-flex justify-content-center align-items-center mt-2'>
                        <div className=' icon fs-3 py-2 shadow rounded-circle ' style={{width:'30%'}}>{e.icon}</div>
                        </div>
                    
                    <Hero2 title={e.title} subtitle={e.subtitle}/>
                    </Card>
                    </Col>
                )
            })
        }
        </Row> 

        </div>
    </div>
  )
}

export default Services
