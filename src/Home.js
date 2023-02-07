import styled from 'styled-components';
import  BeatBox  from './components/Beatmaker/BeatBox'
import { Inst, InstSelBlock } from './components/Beatmaker/Beat';
const BB = styled(BeatBox)`
    vertical-align: middle;
    align-items: center;
    display: flex;
`;
const Home = () => {
    
    return (
        <div style={{display:'flex' , alignItems:'center', justifyContent: 'center', marginTop: 'calc(50vh - 4rem - 100px)'}}>  
        <InstSelBlock>
        <Inst>
            
            <option value="tabla">tabla</option>
            <option value="Mridangam">Mridangam</option>
            <option value="dholak">dholak</option>
        </Inst>
        <Inst>
            <option value="clap 1">clap1</option>
            <option value="clap 2">clap2</option>
            <option value="clap 2">clap3</option>
        </Inst>
        <Inst></Inst>
        <Inst></Inst>

        </InstSelBlock>
        <BB/>    
        </div> 
        
    );
}
 
export default Home;