import React, { Component } from 'react'

export class Camera extends Component {

   opencam = ()=>{
        navigator.getUserMedia= navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.oGetUserMedia ||
        navigator.msGetUserMedia ;

        if(navigator.getUserMedia)
        {
           navigator.getUserMedia({video:true }, function(stream){}, function (){console.warn("Error getting VIDEO stream from getUserMedia")}) ;
        }
   }
    
    render() {
        return (
            <div className = 'camera'>
              <button onClick={this.opencam()}>Camera</button>  
            </div>
        )
    }
}

export default Camera
