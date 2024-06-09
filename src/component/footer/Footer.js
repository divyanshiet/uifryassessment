import './footer.css'
import frame from './frame.svg'
import group from './Group.svg'
export default function Footer() {
    return (
        <>
            <div className="pfoot">
                <div className="foot1">
                    <div className="f1">
                        <img src={group}></img>
                        <div className="di">Help@Frybix.com</div>
                        <div className="di">+1234567890</div>
                    </div>
                    <div className="f2">
                        <div className="heading">Links</div>
                        <div className="di">Home</div>
                        <div className="di">About us</div>
                        <div className="di">Bookings</div>
                        <div className="di">Blog</div>
                    </div>
                    <div className="f3">
                        <div className="heading">Legal
                        </div>
                        <div className="di">Terms of use</div>
                        <div className="di">Privacy policy</div>
                        <div className="di">Cookie policy</div>
                    </div>
                    <div className="f4">
                        <div className="heading">Product</div>
                        <div className="di">Take Tour</div>
                        <div className="di">Live chats</div>
                        <div className="di">Reviews</div>
                    </div>
                    <div className="f5">
                        <div className="heading">Newsletter</div>
                        <div className="di">Stay up to date</div>
                        <div className="butto">
                            <input defaultValue='Your email'/>
                            <button><a href='#'>Subscribe</a></button>
                        </div>
                    </div>
                    <div className="f6"></div>
                </div>
                <div className="foot2">
                    <img src={frame}></img>
                </div>
            </div>
        </>
    )
}