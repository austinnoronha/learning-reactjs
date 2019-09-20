import React from "react"
import MyHeader from './MyHeader'
import MyFooter from './MyFooter'
import MyMainContainer from './MyMainContainer'

const divStyle = {
    color: '#333',
    padding: '20px',
    marging: '10px 20%'
};

function App(){
    return (
        <div style={divStyle}>
            <MyHeader />
            <MyMainContainer />
            <MyFooter />
        </div>
    )
}

export default App;