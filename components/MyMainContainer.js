import React from "react"

 function MyMainContainer() {
    let firstName = "Bob"
    let lastName = "Mike"
    let dt = new Date().getHours();
    let greet;
    if(dt >= 0 && dt < 12){
        greet = 'Morning'
    }
    else if(dt >= 12 && dt < 16){
        greet = 'Afternoon'
    }
    else if(dt >= 16 && dt < 20){
        greet = 'Good evening'
    }
    else{
        greet = 'Goodnight'
    }
    
   return (
       <section>
           <div>
                <h1>{`${firstName} ${lastName}`} its {dt % 12} o'clock</h1>
                <p>{greet}</p>
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