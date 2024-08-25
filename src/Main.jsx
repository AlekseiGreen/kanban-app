import {useState, useEffect} from "react";
import "./Main.css";
import Block from "./Block.jsx";


function Main(){
    let s = 'name';
    let name = 'bar';
    console.log(eval(s));

    localStorage.setItem('titleBox', "Title");
    localStorage.setItem('contentBox', "Content");

    const dataMock = [
        {
             title: 'backlog',
             issues: [
                 {
                     id: '1',
                     name: 'Sprint bugfix',
             description: 'Fix all the bugs'
                 }
            ],
            function: 'ConsLog'
        },
        {
            title: 'log',
            issues: [
                {
                    id: '2',
                    name: 'dfsf dfd',
            description: 'Fix all the bugs'
                }
            ],
            function: 'ConsLog'
       },
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