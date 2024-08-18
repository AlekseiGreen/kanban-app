// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import "./Header.css"
import User from "./img/user-avatar.svg";


function Header(){
    return(
        <div className="grid-header header">
            <div className="header-logo">Awesome Kanban Board</div>
            <div className="user-avatar">
                <img src={User} alt="user-avatar" />
            </div>
        </div>
    );
}

export default Header;