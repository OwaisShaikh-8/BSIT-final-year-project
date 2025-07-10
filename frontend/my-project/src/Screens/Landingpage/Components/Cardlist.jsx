import React from 'react'
import Card from './Card'
import img1 from '../Components/card1img.png'
import img2 from '../Components/card2img.png'
import img3 from '../Components/card3img.png'
import img4 from '../Components/card4img.png'

const Cardlist = () => {
    return (
        <div className='flex flex-col md:flex-row  gap-8 hidden'>
            <Card heading="Pre-order Meals" paragraph="Skip the lines by scheduling your meals in advance — perfect for lunch breaks or busy evenings" source={img1} className="bg-[#3A3A3A] mt-40" />
            <Card heading="Live Chat with Restaurants" paragraph="Need help or want a custom dish? Chat live with restaurant staff for a personalized experience." source={img2} className="bg-[#FFA31A]" />
            <Card heading="Real-Time Order Tracking" paragraph="Get instant updates about your order status, from preparation to pickup" source={img3} className="bg-[#FFA31A]" />
            <Card heading="Secure Online Payments" paragraph="Pay with ease using trusted gateways — no cash needed, just tap and go." source={img4} className="bg-[#3A3A3A]" />
            <Card heading="Delivery Service" paragraph="" className="bg-[#FFA31A]" />

        </div>
    )
}

export default Cardlist
