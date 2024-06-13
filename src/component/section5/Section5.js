import './section5.css'
function Cards(props)
{
    return(
        <>
        <div className={props.col}>
            <div className="cc1">
                <div className="cc11">The Best Financial Accounting</div>
                <div className="cc12">App Ever!</div>
            </div>
            <div className="cc2">
                <div className="cc21">“Arcu at dictum sapien, mollis. Vulputate sit id</div>
                <div className="cc22">accumsan, ultricies. In ultrices malesuada elit mauris."</div>
            </div>
        </div>
        </>
    )
}
export default function Section5()
{
    return(
        <>
            <div className="parsec5">
                <div className="r1">
                  <div className="co11">FAQ</div>
                  <div className="co12">Frequently Asked</div>
                  <div className="co12">Questions</div>
                </div>
                <div className="r2">
                <Cards col="pcard"></Cards>
                <Cards col="p1card"></Cards>
                <Cards col="p1card"></Cards>
                <Cards col="pcard"></Cards>
                <Cards col="pcard"></Cards>
                <Cards col="p1card"></Cards>
                </div>
            </div>
        </>
    )
}