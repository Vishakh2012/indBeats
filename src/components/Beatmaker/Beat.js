import  styled  from "styled-components";
import { useState } from "react";
export const Beat = () => {
    const [BgColor, setBgColor] = useState('rgba(67, 207, 149, 1)');

    
    return(
       <Bt BgColor = {BgColor} onClick = {() => setBgColor(BgColor === 'rgba(67, 207, 149, 1)'?'rgba(0, 255, 240, 1)':'rgba(67, 207, 149, 1)')}/>
    )
}
const Bt = styled.div`
    height: 50px;
    width : 50px;
    background-color:${ ( props ) => props.BgColor } ;
    margin-right: 10px;
    :hover{
        box-shadow: 5px 5px;
    }
`

export const InstSelBlock = styled.div`
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
`

export const InstSel = styled(Beat)`
    background-color: ;
`



export const BL = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    `;


export const BeatGroup = styled.div`
    display: flex;
    margin: auto;
    height: calc(100vh - 4rem);
    width: 100vw;
    //align-items: center;
    justify-content: center;
    flex-direction: column;

` 