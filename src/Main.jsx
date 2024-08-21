import {useState, useEffect} from "react";
import "./Main.css";
import Block from "./Block.jsx";
import Avatar from "./Avatar.jsx";


function Main(){
    localStorage.setItem('titleBox', "Title");
    localStorage.setItem('contentBox', "Content");
    console.log(localStorage);
    const titleBox= "Title2";
    const contentBox= "Content2";

    return(
        <div className="grid-main">
            <div  className="main">
                <Block prTitle={localStorage.getItem('titleBox')} prCont={localStorage.getItem('contentBox')}/>

            </div>
        </div>
    );
}

export default Main;