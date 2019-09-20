import React from "react"
import ReactDOM from "react-dom"

const divStyle  = {
   background: '#dfdfdf',
   color: '#000',
   border: '1px solid red',
   padding: '5px',
   borderRadius: '5px',
   fontFamily: 'Helvetica',
   lineHeight: '20px;'
};

function MyInfo() {
  return (
    <div style={divStyle}>
      <h1>Bob Ziroll</h1>
      <p>This is a paragraph about me...</p>
      <ul>
        <li>Thailand</li>
        <li>Japan</li>
        <li>Nordic Countries</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))