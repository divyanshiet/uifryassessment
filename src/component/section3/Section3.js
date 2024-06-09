import './section3.css'

import b1 from './b1.svg'
import b2 from './b2.svg'
import faqs from './faq.svg'
import bgr1 from './bgr1.svg'
import bhr2 from './bhr2.svg'
import bgr3 from './bgr3.svg'
import bgl from './bgl.svg'
import cont from './cont.svg'
import started from './started.svg'
import s7 from './s7.svg'
import s6 from './s6.svg'
export default function Section2(){
    return(
        <>
        <div className="mn">
            <div className="bimg">
                <div className="bg1">
                 <img src={b1}></img>
                </div>
            </div>
            <div className="reim">
                <img src={b2}></img>
            </div>
            <div className="faq">
            <img src={faqs}></img>
           </div>
           </div>
           <div className="mp">
            <div className="left">
                <img className='l1' src={bgl}></img>
                <div className="co">
                    <img src={started}></img>
                    <img src={cont}></img>
                    <button className='downbt'><a href='#'>Download App</a></button>
                </div>
                <img className='s6' src={s6}></img>
            </div>
            <div className="right">
                <img className='img1' src={bgr1}></img>
                <img className='img2' src={bhr2}></img>
                <img className='img3' src={bgr3}></img>
                <img className='s7' src={s7}></img>
            </div>
           </div>
           
        </>
    );
}