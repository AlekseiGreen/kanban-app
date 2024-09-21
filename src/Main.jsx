import {useState} from "react";
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
    // Добавление задания в DataBase (Array)
    function addDataBase(value, index){
        let copyMain = Object.assign([], main);
        let copyMainIssues = Object.assign([], copyMain[index].issues);
        copyMainIssues.push({id: '', label: value, description: ''});
        copyMain[index].issues = copyMainIssues;

        setMain(copyMain);
        // console.log("Copy=", copyMain);
    }

    // Удаление задания из DataBase (Array)
    function delDataBase(in_index, in_index_issues){
        let copyMain = Object.assign([], main);
        let copyMainIssues = Object.assign([], copyMain[in_index].issues);

        copyMainIssues.splice(in_index_issues, 1);

        copyMain[in_index].issues = copyMainIssues;
        setMain(copyMain);

    }

    // func onWriteBacklog
    function onWriteBacklog(in_data){
        addDataBase(in_data, 0);
        console.log('New Main', main);
    }

    // func onWriteReady
    function onWriteReady(in_data, in_index){
        // 0 - Blacklog
        delDataBase(0, in_index);
        // 1 - Ready
        addDataBase(in_data, 1);
    }

    // onWriteReady onWriteInProgress
    function onWriteInProgress(in_, in_index){
        // 1 - Ready
        delDataBase(1, in_index);
        // 2- InProgress
        addDataBase(in_, 2);
    }

    // onWriteInProgress onWriteFinished
    function onWriteFinished(in_, in_index){
        // 2 - InProgress
        delDataBase(2, in_index);
        // 3 - Finished
        addDataBase(in_, 3);
    }

    // Необходимо для сдвига массива (dataMock) влево
    let indexBack = 0;

    return(
        <div className="grid-main">
            <div  className="main">
                {/* Вывод всех блоков в цикле */}
                {main.map((element, index)=>
                    {
                        
                        let onFunc = element.onFunction;
                        if(index>0){
                            // Сдвиг влево
                            indexBack = index - 1;
                        }

                        return(
                            <Block
                                array={element}
                                onWrite={onFunc}
                                partArray={main[indexBack].issues}
                                index={index}    
                            />)
                    }
                )}
            </div>
        </div>
    );
}

export default Main;