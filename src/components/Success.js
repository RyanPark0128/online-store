import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CognitoContext } from '../context/Cognito'
import './Success.css'

const Success = () => {
    const { user } = useContext(CognitoContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(function() {
            if (user) {
                user.getUserAttributes(function(err, result) {
                    if (err) {
                        console.log(err)
                    } else {
                        let email = result[4].getValue()
                        axios.get(`https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/carts/${email}`)
                            .then((response) => {
                                let arr = []
                                for (let i = 0; i < response.data.length; i++) {
                                    arr.push(response.data[i].id)
                                }
                                let resetinfo = {
                                    email: email,
                                    products: arr
                                }
                                setLoading(false)
                                axios.post("https://ac7j0yqyw7.execute-api.us-east-2.amazonaws.com/dev/clear", resetinfo)
                            });
                    }
                });
            } else {
                localStorage.clear();
                setLoading(false)
            }
        }, 5000);
    }, [])

    return loading ? <div>
        <div className="success--loading">
            <div className="success--loading__loader"></div>
        </div>
    </div> :
        <div>
            <div className="success--container">
                Thank you for your purchase
        </div>
            <div className="success--container">
                <img className="success--image" src="https://inventionland.com/wp-content/uploads/2015/09/National_Thank_You_Day.png" />
            </div>
        </div>
}

export default Success