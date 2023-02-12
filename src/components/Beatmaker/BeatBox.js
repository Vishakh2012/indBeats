import { BeatGroup } from './Beat'
import {BL} from './Beat'

const BeatBox = ({ var1,var2,var3, var4 }) => {
   
    return (
        <div style={{display : 'flex', alignItems: "center" ,verticalAlign: "middle" }}>
        
        <BeatGroup>
        <BL src = { var1 }/>
        <BL src = { var2 }/>
        <BL src = { var3 }/>
        <BL src = { var4 }/>
       
        
        </BeatGroup>
        </div> 
     );
}
 
export default BeatBox;