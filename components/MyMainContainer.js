import React from "react"

const divStyle  = {
    background: '#dfdfdf',
    color: '#000',
    border: '1px solid red',
    padding: '5px',
    borderRadius: '5px',
    fontFamily: 'Helvetica',
    lineHeight: '20px'
 };
 
 function MyMainContainer() {
   return (
       <section>
           <div style={divStyle}>
                <h1>Bob Ziroll</h1>
                <p>This is a paragraph about me...</p>
                <ul>
                    <li>Thailand</li>
                    <li>Japan</li>
                    <li>Nordic Countries</li>
                </ul>
            </div>      
       </section>
   )
 }
  
 export default MyMainContainer;