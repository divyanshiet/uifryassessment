import './section2.css'
import el1 from './el1.svg'
import el2 from './el2.svg'
import s2 from './s2.svg'
export default function Section2(){
    return(
        <>
           <div className="main">
            <div className="bgimg">
                <div className="bg1">
                 <img src={el1}></img>
                </div>
                <div className="bg2">
                 <img src={el2}></img>
                </div>
            </div>
            <div className="maco">
                <img src={s2}></img>
            </div>
           </div>
        </>
    );
}