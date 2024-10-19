import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import User from "./img/user-avatar.svg";
import Arrow from "./img/arrow-down.svg";


function Header(){
    const [flag, setFlag] = useState(false);
    function changeFlag(){
        setFlag(!flag);
    }

    return(
        <div className="grid-header">
            <div className="header">
                <Link to="/" className="header__logo">Awesome Kanban Board</Link>
                <div className="header__user-avatar">
                    <img src={User} alt="user-avatar"/>
                </div>
                <div className="header__arrow-down">
                    <img src={Arrow} onClick={changeFlag} className={flag ? "header__arrow-down-transp": ""} alt="arrow-down"/>
                </div>
                {flag &&
                    <>
                        <div className="header__arrow-down-diamont"></div>
                        <div className="header__arrow-down-dropdown">
                            <div className="header__arrow-down-profile">Profile</div>
                            <div className="header__arrow-down-log">Log out</div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default Header;