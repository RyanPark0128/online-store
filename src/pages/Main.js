import React from 'react'
import Navbar from '../components/Navbar'
import Slides from '../components/Slides'
import Items from '../components/Items'
import Footer from '../components/Footer'

const top = {
    title: "Top Brands",
    products: [{
        name: "Uniclo",
        img: "https://pbs.twimg.com/profile_images/458964185620033537/wS4KHdvj.jpeg"
    },
    // {
    //     name: "Adidas",
    //     img: "https://lh3.googleusercontent.com/proxy/dVeIlr090CmguLdS7EwPmQUSGYRs_ngzTI_4jlgIuLon65POo-tcTCjk9XMSU4mA4nipqIPYavVj0DvHIaRk3RwGuKAPrphU0rvxIGdRafopaK06lGB880iBW-iPO_qQtNMT9EMCiki5uyZ6i7wJwMn-AaV0-MUpOOfZDr_FJtu0jeX1Z3sTIg"
    // }, 
    {
        name: "Nike",
        img: "https://spectraelectric.com/wp-content/uploads/2016/11/nike-highres-500x500.jpg"
    }, {
        name: "H&M",
        img: "https://ceowatermandate.org/wp-content/uploads/2017/08/HM.png"
    }]
}

const category = {
    title: "Shop by Category",
    products: [{
        name: "Shirts",
        img: "https://5.imimg.com/data5/YU/EE/MY-5267293/9-500x500.jpg"
    }, {
        name: "Jeans",
        img: "https://5.imimg.com/data5/MT/BP/MY-31357245/mens-jeans-500x500.jpg"
    }, {
        name: "Shorts",
        img: "https://5.imimg.com/data5/GJ/FX/MY-64476153/men-light-blue-denim-shorts-500x500.jpg"
    }, {
        name: "Outerwear",
        img: "https://maximusxl.ca/wp-content/uploads/2020/10/sosc192418-f20-beige-01-500x500.jpg"
    }]
}

const trending = {
    title: "Trending",
    products: [{
        name: "Nike",
        img: "https://spectraelectric.com/wp-content/uploads/2016/11/nike-highres-500x500.jpg"
    }, {
        name: "Levi's",
        img: "https://images.squarespace-cdn.com/content/v1/595d69672e69cf27605f00ba/1517173407436-27Q4A5OSAQ5PAG1UVFVU/ke17ZwdGBToddI8pDm48kM8XCyO3tdbs9iwf07PpcZpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxDj0JEJp6v-6go8giGfMQQ6KAreWDCAzWMPRAVgEWtpG3euutcpw_4TYJL1vEwVbI/Levis-Logo.png?format=500w"
    }, {
        name: "Lacoste",
        img: "https://shaiik.com/image/catalog/brands/Lacoste.png"
    }, {
        name: "Under Armor",
        img: "https://i1.sndcdn.com/avatars-000524214249-8dtmrv-t500x500.jpg"
    }]
}

const Main = () => {
    return (
        <div>
            <Navbar />
            <Slides />
            <Items data={top} />
            <Items data={category} />
            <Items data={trending} />
            <Footer />
        </div>
    )
}

export default Main