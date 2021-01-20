import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './Slides.css'
import { useHistory } from "react-router-dom";

const Slides = () => {
    let history = useHistory();
    const items = [
        {
            src: "https://cdn.luxe.digital/media/2019/12/16162226/best-men-online-shopping-mr-porter-luxe-digital.jpg",
            text: "LAST CHANCE",
            text2: "CLEARANCE SALE!",
            text3: "Up to 80% off regular pricing",
            button: "SHOP NOW",
            direction: "right"

        },
        {
            src:"https://images.unsplash.com/photo-1465239097349-d71529b03f80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            text: "50% ~ 60% OFF ON",
            text2: "REGULAR PRICING",
            text3: "Your Best Year Starts Here",
            button: "SHOP NOW",
            direction: "left"
        },
    ]
    return (
        <Carousel>
            {
                items.map((item, i) =>
                    <div key={i} className="slides--container">
                        <div className={`slides--text__container__${item.direction}`}>
                            <div className="slides--text swing-in-top-fwd">
                                {item.text}
                            </div>
                            <div className="slides--text2 swing-in-top-fwd--delay">
                                {item.text2}
                            </div>
                            <div className="slides--text3 swing-in-top-fwd--delay2">
                                {item.text3}
                            </div>
                            <button onClick={() => history.push("/product")} className="slides--button swing-in-top-fwd--delay3">
                                {item.button}
                            </button>
                        </div>
                        <img className="slides--image" src={item.src} alt="Fashion" />

                    </div>
                )
            }
        </Carousel>
    )
}
export default Slides