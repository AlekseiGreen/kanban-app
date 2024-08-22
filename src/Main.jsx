import {useState, useEffect} from "react";
import "./Main.css";
import Block from "./Block.jsx";


function Main(){
    localStorage.setItem('titleBox', "Title");
    localStorage.setItem('contentBox', "Content");

    const dataMock = [
        {
             title: 'backlog',
             issues: [
                 {
                     id: '12345',
                     name: 'Sprint bugfix',
             description: 'Fix all the bugs'
                 }
             ]
        },
        // и так далее
    ]

    function ConsLog(value){
        console.log("callBackFunction=", value);
    }

    return(
        <div className="grid-main">
            <div  className="main">
                {dataMock.map(i=>
                    <Block
                        object={i}
                        onFunction={ConsLog}
                    />
                )}
                

            </div>
        </div>
    );
}

export default Main;