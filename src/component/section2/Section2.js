import './section2.css'
import i1 from './i1.svg'
import i12 from './i12.svg'
import icon3 from './icon3.svg'
import icon2 from './icon2.svg'
import icon1 from './icon1.svg'
export default function Section2() {
    return (
        <>
            <div className="mainsection">
                <div className="p1">
                    <div className="i1"><img src={i1}></img></div>
                    <div className="i12"><img src={i12}></img></div>
                </div>
                <div className="p2">
                    <div className="co1">
                        <div className="co11">FEATURES</div>
                        <div className="co12">Uifry Premium</div>
                    </div>
                    <div className="co2">
                        <div className="heading">
                            <div className="symbol">
                            <img src={icon1}></img>
                            </div>
                            <div className="cont">
                             Budgeting Intervals
                            </div>
                        </div>
                        <div className="conten">
                        <div className="co21">Cum at Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet</div>
                        <div className="co22">Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor</div>
                        </div>
                    </div>
                    <div className="co3">
                        <div className="heading">
                            <div className="symbol">
                            <img src={icon2}></img>
                            </div>
                            <div className="cont">
                            Budgeting Intervals
                            </div>
                        </div>
                        <div className="conten">
                        <div className="co21">Cum at Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet</div>
                        <div className="co22">Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor</div>
                        </div>
                    </div>
                    <div className="co4">
                        <div className="heading">
                            <div className="symbol">
                            <img src={icon3}></img>
                            </div>
                            <div className="cont">
                            Budgeting Intervals
                            </div>
                        </div>
                        <div className="conten">
                        <div className="co21">Cum at Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet</div>
                        <div className="co22">Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}