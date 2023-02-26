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

export const BeatGroup = ({ var1, var2, var3, var4}) => {
    const [Steps_h, setSteps_h] = useState(Array(8).fill(false));

    return(
        <>
            {Steps_h.map((val, index) =>
                (<BL key = { index } var1 = { var1 } var2 = { var2 } var3 = { var3 } var4 = { var4 }/>)
             )}
        </>
    )
}



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


export const Bl = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 50px;
    margin: 10px 10px;
    `;

const BL = ({ var1, var2, var3, var4}) => {
    const [steps_v, setSteps_v] = useState(Array(4).fill(false))
    const [IsActive, setIsActive] = useState(false)
    const [Arr, setArr] = useState(Array(4).fill(false))
    
    const setMusic = (index) => 
        {
            const p1 = new Howl({
                src : [var1],
            });
            const p2 = new Howl({
                src : [var2],
            });
            const p3 = new Howl({
                src : [var3],
            });
            const p4 = new Howl({
                src : [var4],
            });
            const newArr = [...Arr];
            newArr[index] = !newArr[index];
            setArr(newArr);
            console.log(Arr);
            console.log(index);
            
            if(newArr[0] === true)
            {
                p1.play();
            }
            if(newArr[1] === true)
            {
                p2.play();
            }if(newArr[2] === true)
            {
                p3.play();
            }if(newArr[3] === true)
            {
                p4.play();
            }
        } 
        useEffect(() => {
          
        }, [Arr])
        
        return(
        <Bl>

            {steps_v.map((val, index) => (
                <div key={ index} style={{ width: "50px", height: "50px", marginLeft: "10px" , marginBottom: "10px"}} onClick={() => {
                    setMusic(index);
                    setIsActive(IsActive? true: false);
                }}>
                    <Beat />
                </div>))}


        </Bl>
    );
}
