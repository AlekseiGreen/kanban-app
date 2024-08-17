// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import "./Header.css"


function Header(){
    return(
        <div className="grid-header header">
            <div className="header-logo">Awesome Kanban Board</div>
            <div className="user-avatar">
                <img src="/img/user.svg" alt="user-avatar" className="user__img" />
            </div>
        </div>
    );
}

export default Header;