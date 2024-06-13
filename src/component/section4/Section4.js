import './section4.css'
import i1 from './i1.svg'
import i12 from './i12.svg'
import bellicon2 from './bellicon2.svg'
export default function Section2() {
    return (
        <>
            <div className="mainsection3">
            <div className="p1">
                    <div className="i13"><img src={i1}></img></div>
                    <div className="i12"><img src={i12}></img></div>
                </div>
                <div className="p2">
                    <div className="co2">
                        <div className="headin">
                            <div className="symbol">
                            <img src={bellicon2}></img>
                            </div>
                            <div className="cont">
                             Fully Customizable
                            </div>
                        </div>
                        <div className="conte">
                        <div className="co21">Arcu at dictum sapien, mollis. Vulputate sit id accumsan,</div>
                        <div className="co21">ultricies. In ultrices malesuada elit mauris etiam odio. Duis</div>
                        <div className="co21">tristique lacus, et blandit viverra nisl velit. Sed mattis</div>
                        <div className="co21">rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget</div>
                        <div className="co21">eget ac dolor neque lorem sapien, suspendisse aliquam.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}