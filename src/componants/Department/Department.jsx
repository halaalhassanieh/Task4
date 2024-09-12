import { Col, Row, } from "react-bootstrap"
import Hero2 from "../Hero2/Hero2"
import { useState } from "react"





const Department = ({items}) => {
 const [name,setname]=useState('')

  return (
    <section className="mx-0">
        
    <div>
      <Hero2 title='Departments' subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit."/>
    </div>
    <div>
        <Row>
            <Col>
            <ul>
              {items.map((e,i)=>{
                return(
                <li key={i}  className={name === e.name ?'item-active':'item' } onChange={()=>{setname(e.name)}}>{e.name}</li>
              )})
              }
            </ul>
                </Col>
            <Col>
            <h1> {name}</h1>
            </Col>
            <Col></Col>
        </Row>
    </div>
    </section>
  )
}

export default Department
