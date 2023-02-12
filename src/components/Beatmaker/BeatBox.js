import { BL,BeatGroup, Beat } from './Beat'

const BeatBox = ({ var1,var2,var3, var4 }) => {

    return (
        <div style={{display : 'flex', alignItems: "center" ,verticalAlign: "middle" }}>
        
        <BeatGroup>
        <BL >
          <Beat src = {var1} />
          <Beat src = {var1} />
          <Beat src = {var1} />
          <Beat src = {var1} />
          <Beat src = {var1} />
          <Beat src = {var1} />
          <Beat src = {var1} />
          <Beat src = {var1} />
          
        </BL>
        <BL>
          <Beat  src = {var2}/>
          <Beat src = {var2}/>
          <Beat src = {var2}/>
          <Beat src = {var2}/>
          <Beat src = {var2}/>
          <Beat src = {var2}/>
          <Beat src = {var2}/>
          <Beat src = {var2}/>
        </BL>
        <BL>
        <Beat  src = {var3}/>
          <Beat src = {var3}/>
          <Beat src = {var3}/>
          <Beat src = {var3}/>
          <Beat src = {var3}/>
          <Beat src = {var3}/>
          <Beat src = {var3}/>
          <Beat src = {var3}/>
        </BL>
        <BL>
        <Beat src = {var4} />
        <Beat src = {var4} />
        <Beat src = {var4} />
        <Beat src = {var4} />
        <Beat src = {var4} />
        <Beat src = {var4} />
        <Beat src = {var4} />
        <Beat src = {var4} />
        </BL>
        
        </BeatGroup>
        </div> 
     );
}
 
export default BeatBox;