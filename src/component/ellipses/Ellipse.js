import ellipse1 from './ellipse1.svg'
import ellipse2 from './ellipse2.svg'
import './ellipse.css'
export default function Section1() {
    return (
        <>

            <div className="ellipses">
                <div className="e1">
                    <img src={ellipse1}></img>
                </div>
                <div className="e2">
                    <img src={ellipse2}></img>
                </div>
            </div>
        </>
    );
}