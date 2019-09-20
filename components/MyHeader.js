import React from "react"

const divStyle  = {
    background: '#000',
    color: '#fff',
    borderBottom: '1px solid #666',
    padding: '5px 20px',
    fontFamily: 'Helvetica',
    lineHeight: '20px'
 };
 
 function MyHeader() {
    return (
        <header style={divStyle}>
            <b>My React Project</b>
        </header>
   )
 }
  
 export default MyHeader;