import {useState, useEffect} from "react";
import "./Main.css";
import Block from "./Block.jsx";


function Main(){
    localStorage.setItem('titleBox', "Title");
    localStorage.setItem('contentBox', "Content");
    console.log(localStorage);
    const titleBox= "Title2";
    const contentBox= "Content2";

    function ConsLog(value){
        console.log("callBackFunction=", value);
    }

    return(
        <div className="grid-main">
            <div  className="main">
                <Block title={
                    localStorage.getItem('titleBox')}
                    content={localStorage.getItem('contentBox')}
                    onFunction={ConsLog}
                />

            </div>
        </div>
    );
}

export default Main;