import styled from "styled-components";
import React, { useState } from 'react';
import { Howl } from 'howler'
import { useEffect } from "react";
import { useCallback } from "react";


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
    const [Arr1, setArr1] = useState(Array(4).fill(false))
    const [Arr2, setArr2] = useState(Array(4).fill(false))
    const [Arr3, setArr3] = useState(Array(4).fill(false))
    const [Arr4, setArr4] = useState(Array(4).fill(false))
    const [Arr5, setArr5] = useState(Array(4).fill(false))
    const [Arr6, setArr6] = useState(Array(4).fill(false))
    const [Arr7, setArr7] = useState(Array(4).fill(false))
    const [Arr8, setArr8] = useState(Array(4).fill(false))
    const [Order, setOrder] = useState(0)
    setInterval(() => {
        setOrder((Order+1)%8)
    }, 200);
    
    return(
        <>
                <BL var1 = { var1 } var2 = { var2 } var3 = { var3 } var4 = { var4 } Arr1 = { Arr1 } Arr2 = { Arr2 }Arr3 = { Arr3 } Arr4 = { Arr4 } Arr5 = {Arr5} setArr = { setArr1 } order = { Order }/>
                <BL var1 = { var1 } var2 = { var2 } var3 = { var3 } var4 = { var4 } Arr1 = { Arr1 } Arr2 = { Arr2 }Arr3 = { Arr3 } Arr4 = { Arr4 } setArr = { setArr2 } order = { Order }/>
                <BL var1 = { var1 } var2 = { var2 } var3 = { var3 } var4 = { var4 } Arr1 = { Arr1 } Arr2 = { Arr2 }Arr3 = { Arr3 } Arr4 = { Arr4 } setArr = { setArr3 } order = { Order }/>
                <BL var1 = { var1 } var2 = { var2 } var3 = { var3 } var4 = { var4 } Arr1 = { Arr1 } Arr2 = { Arr2 }Arr3 = { Arr3 } Arr4 = { Arr4 } setArr = { setArr4 } order = { Order }/>
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
    margin: 10px 0px;
    `;

const setMusic = (index,Arr1,Arr2,Arr3,Arr4,setArr,var1,var2,var3,var4, order) => 
{   
    if (order === 0 )
    { 
    const newArr = [...Arr1];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }
    else if (order === 1)
    {
    const newArr = [...Arr2];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }
    else if (order === 2)
    {
    const newArr = [...Arr3];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }
    else if (order === 3)
    {
    const newArr = [...Arr4];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }
    else if (order === 4)
    {
    const newArr = [...Arr5];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }
    else if (order === 5)
    {
    const newArr = [...Arr6];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }
    else if (order === 6)
    {
    const newArr = [...Arr7];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }
    else
    {
    const newArr = [...Arr8];
    newArr[index] = !newArr[index];
    setArr(newArr);
    }

    console.log(Arr);
    console.log(index);   


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
if(Arr[0] === true)
{
    p1.play();
}
if(Arr[1] === true)
{
    p2.play();
}if(Arr[2] === true)
{
    p3.play();
}if(Arr[3] === true)
{
    p4.play();
}
}

const BL = ({ var1, var2, var3, var4, Arr,setArr }) => {
    const [IsActive, setIsActive] = useState(false)
        
        return(
        <Bl>

            {Arr.map((val, index) => (
                <div key={ index} style={{ width: "50px", height: "50px", marginLeft: "10px" , marginBottom: "10px"}} onClick={() => {
                    setMusic(index,Arr,setArr,var1,var2,var3,var4);
                    setIsActive(IsActive? true: false);
                }}>
                    <Beat />
                </div>))}


        </Bl>
    );
            }
