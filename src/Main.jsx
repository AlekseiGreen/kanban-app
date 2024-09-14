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
                     label: '1_1111',
             description: 'Fix all the bugs 1'
                 },
                 {
                    id: '11',
                    label: '11_1111',
            description: 'Fix all the bugs 11'
                },
            ],
            onFunction: onWriteBacklog,
        },
        {
            title: 'Ready',
            issues: [
                {
                    id: '2',
                    label: '2_222',
                    description: 'Fix all the bugs 3'
                }
            ],
            onFunction: onWriteReady,
        },
        {
            title: 'In progress',
            issues: [
                {
                    id: '3',
                    label: '3_3333',
                    description: 'Fix all the bugs 3'
                }
            ],
            onFunction: onWriteInProgress,
        },
        {
            title: 'Finished',
            issues: [
                {
                    id: '4',
                    label: '4_4444',
                    description: 'Fix all the bugs 4'
                }
            ],
            onFunction: onWriteFinished,
        },
    ]


    const [main, setMain] = useState(dataMock);
    // Добавление задания в Backlog
    function addDataBlocklog(key, value){
        let copyMain = Object.assign([], main);
        let copyMainIssues = Object.assign([], copyMain[0].issues);
        copyMainIssues.push({id: '', label: value, description: ''});
        copyMain[0].issues = copyMainIssues;

        setMain(copyMain);
        console.log("Copy=", copyMain);
    }

    // func onWriteBacklog
    function onWriteBacklog(in_){
        console.log("APP=", in_);
        console.log(dataMock);
        addDataBlocklog('superKey', in_);
        console.log('New Main', main);
    }

    // func onWriteReady
    const [array, setArray] = useState("onWriteReady");
    function onWriteReady(in_){
        console.log('Array=', array);
    }

    // onWriteReady onWriteInProgress
    const [count1, setCount1] = useState('onWriteInProgress');
    function onWriteInProgress(){
        console.log('COUNT1=', count1);
    }

    // onWriteInProgress onWriteFinished
    const [count2, setCount2] = useState('onWriteFinished');
    function onWriteFinished(){
        setCount2(count2 + 1);
        console.log('COUNT2=', count2);
    }

    return(
        <div className="grid-main">
            <div  className="main">
                {/* Вывод всех блоков в цикле */}
                {main.map((element, index)=>
                    {
                        let onFunc = element.onFunction;
                        if(index>0){
                            index = index - 1;
                        }

                        return(
                            <Block
                                array={element}
                                onWrite={onFunc}
                                partArray={main[index].issues}
                            />)
                    }
                )}
            </div>
        </div>
    );
}

export default Main;