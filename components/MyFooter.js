import React from "react"

const divStyle  = {
    background: '#94a5b1',
    color: '#4a95eb',
    borderTop: '1px solid #666',
    padding: '3px 20px',
    fontFamily: 'Helvetica',
 };
 
 function MyFooter() {
    return (
        <footer style={divStyle}>
            <p>&copy; My project | 2019 </p>
        </footer>
   )
 }
  
 export default MyFooter;