import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './Slides.css'

const Slides = () => {
        const items = [
            {
                src:"https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg"
            },
            {
                src:"https://beta.ctvnews.ca/content/dam/ctvnews/images/2020/2/20/1_4820983.jpg?cache_timestamp=1582240247414"
            },
            {
                src:"https://images.indianexpress.com/2018/01/men-fashion-1200-filephoto.jpg"
            }
        ]
        return (
            <Carousel>
                {
                    items.map((item, i) => 
                    <div key={i} className="slides--container">
                        <img className="slides--image" src={item.src} alt="Fashion image"/>
                    </div>
                    )
                }
            </Carousel>
        )
}
export default Slides