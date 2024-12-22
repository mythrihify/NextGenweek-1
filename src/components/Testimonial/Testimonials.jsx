import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        speed: 1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }  ,
        },
    ],
    };
  return (
 <Slider {...settings}>
<div className="testimonial py-4 px-3">
<p>Trip was very good. Transfers and sightseeing were completely taken care hasslefree. Driver assigned was friendly and flexible to adjust delays in joyride timings. Covered all sightseeing points .</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava01} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>John Doe</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>It was a good experience for us. Everything was going gud but in the last day of my trip was gud. Thanks ! Best memories includes Aranyanka Resort vist , House boat visit , Elephant Safari & Cherai beach .</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Lia Franklin</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>Thank you Traveling company for a wonderful trip. It was smooth and well curated. It was our 4th Wedding Anniversary trip that we wanted to celebrate in Bali. We could cover all the activities and the locations in the itinerary. I wish the first stay was in a different property though, the rooms in Bakungsari in Kuta was not our type of stays. Dim lighting was a turn off. Felt that the staff was bit biased towards Indian tourists. But overall a decent and seamless trip. Will recommend them to friends and family. Thanks again.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Alexander Davis</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>Everything was executed flawlessly, and the team was exceptionally friendly and cooperative. The hotels provided were top-notch, and the team's guidance was outstanding. Everything promised in the itinerary, including photography, was delivered to perfection.</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava03} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Nicolas Parker</h6>
    <p>Customer</p>
</div>
</div>
</div>
<div className="testimonial py-4 px-3">
<p>Visited Meghalaya for the first time and Reify travels made our trip memorable. Special thanks to Nikita our tour coordinator who was very approachable during our travel and made sure our trip is going fine. Krishna bhaiiya was our driver who made our trip special. The hotels provided were top notch. Would highly recommend to curate north east packages from Reify travels who will make your whole trip comfortable and memorable. Hotels - 5 / 5 Cab & Driver - 5 / 5 Agent - 5 / 5</p>

<div className="d-flex align-items-center gap-4 mt-3">
<img src={ava02} className='w-25 h-25 rounded-2' alt="" />
<div>
    <h6 className='mb-0 mt-3'>Olivia Cruz</h6>
    <p>Customer</p>
</div>
</div>
</div>
 </Slider>
  )
}

export default Testimonials
