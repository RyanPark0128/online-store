import react from 'react'

const Address = ({ setUserInfo }) => {
    return (<div>
        <input/>
        <br/>
        <input/>
        <br/>
        <input/>
        <br/>
        <input/>
        <br/>
        <input/>
        <br/>
        <input/>
        <br/>
        <button onClick={()=> setUserInfo(false)}>
            back
        </button>
    </div>)
}

export default Address