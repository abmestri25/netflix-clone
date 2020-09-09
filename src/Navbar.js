import React ,{useState,useEffect} from 'react'
import logo from "./netflixlogo.png"
import avatar from './avatar.png'
import './Navbar.css'

function Navbar() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };
    
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`} >
            <img className="logo" src={logo}/>
            <img className="icon" src={avatar}/>
        </div>
    )
}

export default Navbar;
