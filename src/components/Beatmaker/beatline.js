import styled from "styled-components";
import  {Beat} from "./Beat"
import {Howl} from 'howler'
import { useEffect } from "react";
import { useState } from "react";


const Bl = ({src}) => {
    const [steps, setSteps] = useState(Array(8).fill(false))
    
    useEffect(() => 
    {
        const sound = new Howl({
            src: [src]
    })

    let index = 0; 
    const intervalId = setInterval(() => {
            if (steps[index]){
           sound.play()
        }
           clearInterval(intervalId);
    sound.pause();
    },500)

    
})

const changeStap = (index) => {
    setSteps(steps[index] ?false:true)
}
    return ( 
        <div style={{display:"flex" , marginBottom: "10px"}}>
         
      {steps.map((active, index) => (
        <Beat
          
          
          onClick={() => changeStap(index)}
        />
      ))}
    
          </div>
     );
}



export const BL = styled(Bl)`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin: 10px 10px;
    `;

 
export default BL;