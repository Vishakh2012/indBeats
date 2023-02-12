import  BeatBox  from './components/Beatmaker/BeatBox'
import { Inst, InstSelBlock } from './components/Beatmaker/Beat';
import { useState } from 'react';
import styled from 'styled-components';


const perc_bl = 
[
  {
    id: 1,
    label: "mridangam",
    value: "/percussion/mridangam.wav"
  },
  {
    id:2,
    label: "tabla",
    value: "/percussion/tabla.mp3",
  },
];

const snare_bl =
[
    {   id: 1,
        label: "snare1",
        value: "/snare/snare1.mp3"
    },
    {
        id:2,
        label: "snare2",
        value: "/snare/snare2.mp3"
    }
]

const clap_bl =
[
    {
        id:1,
        label: "clap1",
        value: "/clap/clap1.mp3"
    },
     {
        id:2,
        label: "clap2",
        value: "/clap/clap2.mp3"
     }
]

const safari_bl =
[
    {
        id:1,
        label: "safari",
        value: "/safari/safari kick.mp3"
    }

]

const Home = () => {
    const [var1, setVar1] = useState("/percussion/tabla.mp3");


    const changeVar1 = (e) => {
        setVar1(e.target.value)
    };

    const [var2, setVar2] = useState("/snare/snare1.mp3");


    const changeVar2 = (e) => {
        setVar2(e.target.value);
    };

    const [var3, setVar3] = useState("/clap/clap1.mp3");


    const changeVar3 = (e) => {
        setVar3(e.target.value);
    };

    const [var4, setVar4] = useState("/safari/safari kick.mp3");


    const changeVar4 = (e) => {
        setVar4(e.target.value);
    };


    const Butto = styled.button`
        background-color: rgba(67, 207, 149, 1);
        margin:  100px auto 10 auto;
        padding: 10px 20px;
        display: flex;
    `;
    

    
    return (
        <div style={{display:'flex', flexDirection:'column',justifyContent:'space-around', alignItems: 'center'}}>
        <Butto>play</Butto>
        <div style={{display:'flex' , alignItems:'center', justifyContent: 'center', marginTop: 'calc(50vh - 4rem - 100px)'}}> 
        

        
        <InstSelBlock>
        <Inst key = "perc_bl">
            {perc_bl.map((option) => 
            (
                <option key={ option.id } value = {option.value} onClick = {(e) => changeVar1(e)}>{ option.label}</option>
            ))}
        </Inst>
        
        <Inst key = "snare_bl">
            {snare_bl.map((option) => 
            (
                <option key = { option.id } value = {option.value} onClick = {(e) => {changeVar2(e)}}>{ option.label}</option>
            ))}
        </Inst>
        <Inst key = "clap_bl">
        {clap_bl.map((option) => 
            (
                <option key = {option.id} value = {option.value} onClick = {(e) => {changeVar3(e)}}>{ option.label}</option>
            ))}
        </Inst>
        <Inst key ="safari">
        {safari_bl.map((option) => 
            (
                <option key={ option.id } value = {option.value} onClick = {(e) => {changeVar4(e)}}>{ option.label}</option>
            ))}
        </Inst>

        </InstSelBlock>
        <BeatBox var1 = { var1 } var2 = { var2 } var3 = { var3 } var4 = { var4 }/> 
        </div> 
        </div>
    );
}
 
export default Home;