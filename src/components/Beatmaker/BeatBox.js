import { BeatGroup } from './Beat'
import {BL} from './Beat'
import { Howl } from 'howler'
import { useState, useEffect } from 'react'
const BeatBox = ({ var1,var2,var3, var4 }) => {
    const [isActive, setIsActive] = useState(false);
   const [sound1, setSound1] = useState(new Howl({ src: [var1] }));
   const [sound2, setSound2] = useState(new Howl({ src: [var2] }));
   const [sound3, setSound3] = useState(new Howl({ src: [var3] }));
   const [sound4, setSound4] = useState(new Howl({ src: [var4] }));
 
   useEffect(() => {
     setSound1(new Howl({ src: [var1] }));
     setSound2(new Howl({ src: [var2] }));
     setSound3(new Howl({ src: [var3] }));
     setSound4(new Howl({ src: [var4] }));
   }, [var1,var2,var3,var4]);
    return (
        <div style={{display : 'flex', alignItems: "center" ,verticalAlign: "middle" }}>
        
        <BeatGroup>
        <BL isActive = { isActive } setIsActive = { setIsActive } sound = { sound1 }  src = { var1 }/>
        <BL isActive = { isActive } setIsActive = { setIsActive } sound = { sound2 } src = { var2 }/>
        <BL isActive = { isActive } setIsActive = { setIsActive } sound = { sound3 } src = { var3 }/>
        <BL isActive = { isActive } setIsActive = { setIsActive } sound = { sound4 } src = { var4 }/>
        </BeatGroup>
        </div> 
     );
}
 
export default BeatBox;