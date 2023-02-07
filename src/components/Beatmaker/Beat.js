import styled from "styled-components";
import { useState } from "react";
export const Beat = () => {
    const [BgColor, setBgColor] = useState('rgba(67, 207, 149, 1)');


    return (
        <Bt BgColor={BgColor} onClick={() => setBgColor(BgColor === 'rgba(67, 207, 149, 1)' ? 'rgba(0, 255, 240, 1)' : 'rgba(67, 207, 149, 1)')} />
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
export const InstSelBlock = styled.div`
    background-color: ${({theme}) => theme.colors.header};
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

export const BL = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin: auto 10px;
    `;

export const BeatGroup = styled.div`
    display: flex;
    height: 230px;
    width: 500px; 
    justify-content: center;
    flex-direction: column;
    margin: auto;

` 