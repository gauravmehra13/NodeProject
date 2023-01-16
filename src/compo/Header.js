import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

const Header=()=>{
    const navBar=()=>{

        var x=document.querySelector(".responsive-menu-bar");
        console.log(x);
        x.classList.add("responsive-menu-bar-active");
        x.classList.remove("responsive-menu-bar-disable");
    }

    const cancelBar=()=>{

        var y=document.querySelector(".responsive-menu-bar")
        y.classList.add("responsive-menu-bar-disable");
        y.classList.remove("responsive-menu-bar-active")
    }

    return (
        <>
          <div className="title-wrapper">
        <div className="rotate-wrapper">
           <h3 className="text-rotate">THE</h3>
           
        </div>
        <h1>SIREN</h1>

        </div>
        <div className="header">
            <div className="navbar">
            <p> <Link to="/home" className="list">Home</Link></p>
            <p><Link to="/Bollywood" className="list">Bollywood</Link></p>
            <p><Link to="/Technology" className="list">Technology</Link></p>
            <p><Link to="/Hollywood" className="list">Hollywood</Link></p>
            <p><Link to="/Fitness" className="list">Fitness</Link></p>
            <p><Link to="/Food" className="list">Food</Link></p>
            </div>

            <div className="menu-icon" onClick={navBar}>
                <span className="menu-icon-line"></span>
                <span className="menu-icon-line"></span>
                <span className="menu-icon-line"></span>
            </div>
            
        </div>

        <div className="responsive-menu-bar">
        <p><Link to="/home" className="list" onClick={cancelBar}>Home  </Link>
        <p className="cancel" onClick={cancelBar}>&times;</p>
        </p>
            <hr className="responsive-menu-bar-hr" />
            <p><Link to="/Bollywood" className="list" onClick={cancelBar}>Bollywood</Link></p>
            <hr className="responsive-menu-bar-hr" />
            <p><Link to="/Technology" className="list" onClick={cancelBar}>Technology</Link></p>
            <hr className="responsive-menu-bar-hr" />
            <p><Link to="/Hollywood" className="list" onClick={cancelBar}>Hollywood</Link></p>
            <hr className="responsive-menu-bar-hr" />
            <p><Link to="/Fitness" className="list" onClick={cancelBar}>Fitness</Link></p>
            <hr className="responsive-menu-bar-hr" />
            <p><Link to="/Food" className="list" onClick={cancelBar}>Food</Link></p>
            
            </div>
        <hr className="navbar-hr"></hr>
        </>
    )
}

export default Header;
