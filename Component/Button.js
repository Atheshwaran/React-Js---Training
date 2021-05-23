 import React from 'react';
 import ButtonChild from './ButtonChild'

 function Button()
 {
    let clicked = () => {
        console.log("clicked"); 
    }

     return <ButtonChild name ="Athesh" click = {clicked} > <p>Hello</p> <h1>Athesh</h1> <p>Welcome react fragment</p> </ButtonChild>
 }

 export default Button;