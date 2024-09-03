import {useState, useEffect} from "react";
import "./Main.css";
import Block from "./Block.jsx";


function Main(){

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
            onFunction: onArray,
            onFunction_2: onEnter
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
            onFunction: onCount2,
        },
    ]

    let newPosts = [];
    let newSub = [];


    const [main, setMain] = useState(dataMock);
    // Добавление задания в Backlog
    function addDataBlocklog(key, value){
        // newPosts = dataMock.map(function(element)
        //     {
        //         if(element.title === 'Backlog'){
        //             element = {...element, issues: [...element.issues, {id: '',[key]: value,} ] };
        //         }
        //         return(element);

        //     }
        // );
        
        setMain(main => [...main, 'A']);

        console.log("MAIN=", main);
    }

    // func
    function onEnter(in_){
        console.log("APP=", in_);
        console.log(dataMock);
        addDataBlocklog('superKey', in_);
        console.log('New Main', main);
    }

    // функция []
    const [array, setArray] = useState([1,2,3]);
    function onArray(in_){
        console.log('Array=', array);
        let rrr = 5+6;
        setArray(rrr);
        console.log('Array=', array);
    }

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
                {dataMock.map(element=>
                    {
                        let onFnc = element.onFunction;
                        let onEnt = element.onFunction_2;

                        return(
                            <Block
                                array={element}
                                onFunction={onFnc}
                                onEnter={onEnt}
                            />)
                    }
                )}
            </div>
        </div>
    );
}

export default Main;