import {useState, useEffect} from "react";
import "./Main.css";
import Block from "./Block.jsx";


function Main(){

    localStorage.setItem('titleBox', "Title");
    localStorage.setItem('contentBox', "Content");

    // массив
    const dataMock = [
        {
             title: 'Backlog',
             issues: [
                 {
                     id: '1',
                     name: 'Sprint bugfix',
             description: 'Fix all the bugs 1'
                 },
                 {
                    id: '11',
                    name: 'Sprint bugfix 11',
            description: 'Fix all the bugs 11'
                },
            ],
            onFunction: onCount1
        },
        {
            title: 'Ready',
            issues: [
                {
                    id: '2',
                    name: '222 222',
            description: 'Fix all the bugs 3'
                }
            ],
            onFunction: onCount2
        },
        {
            title: 'In progress',
            issues: [
                {
                    id: '3',
                    name: '333 33',
            description: 'Fix all the bugs 3'
                }
            ],
            onFunction: onCount1
        },
        {
            title: 'Finished',
            issues: [
                {
                    id: '4',
                    name: '444 444',
            description: 'Fix all the bugs 4'
                }
            ],
            onFunction: onCount2
        },
    ]

    // функция 1
    const [count1, setCount1] = useState(0);
    function onCount1(){
        setCount1(count1 + 1);
        console.log('COUNT1=', count1);
    }

    // функция 2
    const [count2, setCount2] = useState(0);
    function onCount2(){
        setCount2(count2 + 1);
        console.log('COUNT2=', count2);
    }

    return(
        <div className="grid-main">
            <div  className="main">
                {/* Вывод всех блоков в цикле */}
                {dataMock.map(i=>
                    {
                        let onFnc = i.onFunction;

                        return(
                            <Block
                                array={i}
                                onFunction={onFnc}
                            />)
                    }
                )}
            </div>
        </div>
    );
}

export default Main;