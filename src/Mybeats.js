import {Howl} from 'howler'
const Mybeats = () => {
    const s = new Howl({
        src : [ "/percussion/tabla.mp3"],
        
    })

    const s2 = new Howl({
        src : [ "/clap/clap1.mp3"],
        
    })
    const playsound = () => {
        s.play()
        s2.play()
        
        console.log("okay");
    }
    return ( 
        <>
            <button onClick={() => playsound()}> play</button>
        </>
     );
}
 
export default Mybeats;
