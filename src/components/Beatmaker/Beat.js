import styled from "styled-components";
import React, { useState } from 'react';
import { Howl } from 'howler'
import { useEffect } from "react";


export const InstSelBlock = styled.div`
    background-color: ${({ theme }) => theme.colors.header};
    display: flex;
    flex-direction: column;
    height: 220px;
    /* justify-content: space-around; */
    align-items: center;
    vertical-align: middle;
    width: 70px;
`
export const Inst = styled.select`
    border-radius: 50%;
    display: flex;
    background-color: rgba(5, 168, 170, 1);
    margin: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  -moz-appearance: none;
  -webkit-appearance: none;  
`
export const BG = () => {
    const [Steps_h, setSteps_h] = useState(Array(8).fill(false));

    return(
        <>
            {Steps_h.map((val, index) =>
                (<BL key = { index }/>)
             )}
        </>
    )
}


export const BeatGroup = styled(BG)`
    display: flex;
    height: 230px;
    width: 500px; 
    justify-content: center;
    flex-direction: row;
    margin: auto;
`

export const Butto = () => {
    return (
        <button ></button>
    )
}



const Bt = styled.div`
    height: 50px;
    width : 50px;
    background-color:${(props) => props.BgColor} ;
    margin-right: 10px;
    :hover{
        box-shadow: 5px 5px;
    }
`
const Beat = () => {
    const [BgColor, setBgcolor] = useState('rgba(67, 207, 149, 1)')
    return (
        <Bt BgColor={BgColor} onClick={() => { setBgcolor(BgColor === "rgba(67, 207, 149, 1)" ? "rgba(0, 255, 240, 1)" : "rgba(67, 207, 149, 1)") }}>

        </Bt>
    )
}



const Bl = ({ sound,src, isActive, setIsActive }) => {
    const [steps_v, setSteps_v] = useState(Array(4).fill(false))
    


    return (
        <div >

            {steps_v.map((val, index) => (
                <div key={ index} style={{ width: "50px", height: "50px", marginLeft: "10px" , marginBottom: "10px"}} onClick={() => {

                }}>
                    <Beat />
                </div>))}


        </div>
    );
}

export const BL = styled(Bl)`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50px;
    margin: 10px 10px;
    `;


function usePlaySound(steps, src) {
    const sound = new Howl({
      src: [src],
    });
  
    useEffect(() => {
      let index = 0;
      const intervalId = setInterval(() => {
        if (steps[index]) {
          sound.play();
        }
        index = (index + 1) % steps.length;
      }, 200);
  
      return () => {
        clearInterval(intervalId);
        sound.unload();
      };
    }, [steps, sound]);
  }