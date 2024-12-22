import React from 'react'

import '../styles/newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import femaleTourist from '../assets/images/female-travel.jpg'
const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
            <div className="newsletter__content">
                <h2>Subscribe now to know more about your traveling places.</h2>

                <div className="newsletter__input">
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn newsletter__btn'>Subscribe</button>
                </div>
                <p>Travel involves visiting new places and meeting new people and having varied experiences.</p>
            </div>
            </Col>
            <Col lg='6'>
            <div className="newsletter__img">
                <img src={femaleTourist} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default Newsletter
