import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl :weatherImg,
        title : 'Calculate Weather',
        desc: 'Accurate weather forecasts at your fingertips..',
    },
    {
        imgUrl :guideImg,
        title : 'Best Tour Guide',
        desc : 'Discover the world with our expert tour guides leading the way..',
    },
    {
        imgUrl :customizationImg,
        title : 'Customization',
        desc : 'Tailor your experiences with our bespoke customization services..',
    },
]
const ServiceList = () => {
  return (
    <>
     {
        servicesData.map((item, index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))
     } 
    </>
  )
}

export default ServiceList
