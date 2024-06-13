import logo from './Group.svg'
import './header.css'

export default function Header() {

    return (
        <>
                <div className="header">
                    <div className="nav1">
                        <div className="logo">
                            <img src={logo}></img>
                        </div>
                        <div className="content">
                            <div ><a className="home" href='#'>Home</a></div>
                            <div className="about"><a className="ho" href='#'>About Us</a></div>
                            <div className="pricing"><a className="ho" href='#'>Pricing</a></div>
                            <div className="feature"><a className="ho" href='#'>Features</a></div>
                        </div>
                    </div>
                    <div className="nav2">
                        <button><a href="#">Download</a></button>
                    </div>
                </div>
        </>
    );
}