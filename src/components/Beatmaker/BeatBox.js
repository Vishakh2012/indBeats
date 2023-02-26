import { BeatGroup } from './Beat'
import {BL} from './Beat'
import { Howl } from 'howler'
import { useState, useEffect } from 'react'

const BeatBox = ({ var1,var2,var3, var4 }) => {
    const [isActive, setIsActive] = useState(false);

 

    return (
        <div style={{display : 'flex', alignItems: "center" ,verticalAlign: "middle", flexDirection: 'row' }}>
        
        <BeatGroup var1 = { var1 } var2 = { var2 } var3 = { var3 } var4 = { var4 }/>
           
        </div> 
     );
}
 
export default BeatBox;