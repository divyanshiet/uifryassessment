import './Section1.css'
import img from './img.svg'
import d1 from './d1.svg'
import d2 from './d2.svg'
import d3 from './d3.svg'
export default function Section1()
{
    return(
        <>
           <div className="section1">
             <div className="sec1">
               <div className="c1">
                  <div className="c11">Make The Best</div>
                  <div className="c12">Financial Decisions</div>
               </div>
               <div className="c2">
                <div className="c21">Cum at Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet</div>
                <div className="c22">Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor</div>
               </div>
               <div className="buttons">
                <button><a href="#">Get started <span>&#8594;</span></a></button>
                <button><a href='#'>Watch Video</a></button>
               </div>
               <div className="img">
                <img src={img}></img>
               </div>
             </div>
             <div className="sec2">
                 <div className="d1"><img src={d1}></img></div>
                 <div className="d2"><img src={d2}></img></div>
                 <div className="d3"><img src={d3}></img></div>
             </div>
           </div>
        </>
    )
}