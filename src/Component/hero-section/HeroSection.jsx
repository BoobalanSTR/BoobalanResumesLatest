import React, { useRef,useEffect } from 'react'
import "./HeroSection.css"
import { Container,Row,Col } from 'reactstrap'
import { init } from 'ityped';
import Image from "../../../src/Image.jpg"

const HeroSection = () => {
    const Reff=useRef()
    useEffect(()=>{
        init(Reff.current,{
            backDelay:1500,
            showCursor:true,
            strings:[
                'Boobalan'
            ]
        })
    },[])

return (<section className='hero_section' id="home">
    <Container>
        <Row>
            <Col lg="6" md="6">
                <div className='hero_content'>
                    <p className='mb-3'>Welcome to my World!</p>                 
                    <h2 className='hero_title mb-4'>
                        I'm <span ref={Reff} ></span>
                    </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis velit nulla cumque eum dolorem optio quasi recusandae dolorum odit! Deleniti quidem optio repellat et voluptate culpa vero doloremque animi eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis totam a praesentium dolor natus iste quis nulla nobis laborum! Nihil, nulla! Nesciunt blanditiis itaque, incidunt accusantium delectus perferendis officia exercitationem!</p>
                    <div className='mt-5 hero_btns d-flex align-items-center gap-4'>
                        <button className='btn hire_btn'><a href='#'>Hire ME</a></button>
                        <button className='btn'>Contact</button>
                    </div>
                </div>
            </Col>
            <Col lg="6" md="6">
                <img src={Image} alt="" className='w-100'></img>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default HeroSection