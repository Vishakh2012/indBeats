import styled from 'styled-components';
import  BeatBox  from './components/Beatmaker/BeatBox'
import { Inst, InstSelBlock } from './components/Beatmaker/Beat';
import { useState } from 'react';


const perc_bl = 
[
  {
    label: "mridangam",
    value: "/mridangam.mp3",
  },
  {
    label: "tabla",
    value: "/tabla.mp3",
  },
];

const snare_bl =
[
    {
        label: "snare1",
        value: "/snare1.mp3"
    },
    {
        label: "snare2",
        value: "/snare2.mp3"
    }
]


const Home = () => {
    const [var1, setVar1] = useState("/tabla.mp3");


    const changeVar1 = (e) => {
        setVar1(e.target.value)
    };

    const [var2, setVar2] = useState("/snare1.mp3");


    const changeVar2 = (e) => {
        setVar2(e.target.value);
    };


    

    
    return (
        <div style={{display:'flex' , alignItems:'center', justifyContent: 'center', marginTop: 'calc(50vh - 4rem - 100px)'}}>  
        <InstSelBlock>
        <Inst >
            {perc_bl.map((option) => 
            (
                <option value = {option.value} onClick = {(e) => changeVar1(e)}>{ option.label}</option>
            ))}
        </Inst>
        
        <Inst>
            {snare_bl.map((option) => 
            (
                <option value = {option.value} onClick = {(e) => {changeVar2(e)}}>{ option.label}</option>
            ))}
        </Inst>
        <Inst></Inst>
        <Inst></Inst>

        </InstSelBlock>
        <BeatBox var1 = { var1} var2 = { var2 }/> 
        </div> 
        
    );
}
 
export default Home;