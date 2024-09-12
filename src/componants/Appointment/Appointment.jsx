import { Row } from 'react-bootstrap';
import Hero2 from '../Hero2/Hero2'
import './Appointment.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Appointment = ({btn}) => {
  return (
    <div className='appointment mt-5 pt-3 w-100 py-4 '>
      <Hero2 title='Make An Appointment'  subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit." />
         
      <div className=' flex'>
      <Form className='px-5 mx-5 mb-5  '>

        <div className=''>
           
            <Form.Group className="mb-3 block d-flex justify-content-center align-items-center" controlId="exampleForm.ControlInput1">
                <Form.Control className='input mx-3' type="text" placeholder="Your name" />
                <Form.Control className='input mx-3' type="email" placeholder="Your email" />
                <Form.Control className=' input mx-3' type="password" placeholder="Your password" />
            </Form.Group>
        </div>
        
        <div className=''>
            <Form.Group className="mb-3 block input d-flex justify-content-center align-items-center" controlId="exampleForm.ControlInput1">
            
                <Form.Control className='mx-3' type="date" placeholder="set date" />
                
                <Form.Select className='mx-3 input'>
                    <option> Select Department</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                
                <Form.Select className='mx-3 input'>
                    <option>Select Doctor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
            
        </div>
        
        <div className='mb-4 w-100  block'>
            <Form.Group className="input d-flex justify-content-center align-items-center" controlId="exampleForm.ControlTextarea1">
                <Form.Control placeholder="Message (Optional)" as="textarea" rows={5} />
            </Form.Group>
        </div>

        <div className=''> 
            <div className='d-flex justify-content-center align-items-center w-100 mx-0'>
             <Button className=' btn-nav px-sm-4 py-sm-2 p-1 fs-6 mx-1  border-0' >{btn}</Button>
            </div>
        </div>
      
    </Form>

        </div>   



       
      

    </div>
  )
}

export default Appointment
