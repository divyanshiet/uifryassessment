import './Section1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import c1 from './c1.svg'
import c2 from './c2.svg'
import d1 from './d1.svg'
import d2 from './d2.svg'
import d3 from './d3.svg'
import group2 from './group2.svg'
export default function Section1() {
    return (
        <>
            <div className="ct2">
                <div className="ct">
                    <div className="p1">
                        <img src={c1}></img>
                    </div>
                    <div className="p2">
                        <img src={c2}></img>
                    </div>
                    <div className="buts">
                        <button><a href='#'>Get started<span className='arrow'>&#8594;</span></a></button>
                        <button className='b2'><a href='#'><FontAwesomeIcon icon="fa-brands fa-youtube" /> Watch video</a></button>
                    </div>
                    <div className="iimg">
                        <img src={group2}></img>
                    </div>
                </div>
                <div className="images">
                     <div className="d1">
                        <img src={d1}></img>
                     </div>
                     <div className="d2">
                     <img src={d2}></img>
                     </div>
                     <div className="d3">
                     <img src={d3}></img>
                     </div>
                </div>
            </div>
        </>
    );
}