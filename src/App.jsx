import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState, useId} from "react";
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import TaskDetail from "./TaskDetail.jsx";
import Task from "./components/Task.jsx";


function App(){
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
                    description: 'Fix all the bugs 2'
                },
                {
                    id: '22',
                    label: '22_222',
                    description: 'Fix all the bugs 22'
                },
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
    function addDataBase(in_value, in_index, in_id){
        let copyMain = Object.assign([], main);
        let copyMainIssues = Object.assign([], copyMain[in_index].issues);
        copyMainIssues.push({id: in_id, label: in_value, description: ''});
        copyMain[in_index].issues = copyMainIssues;

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
    function onWriteBacklog(in_data, in_id){
        addDataBase(in_data, 0, in_id);
        console.log('App -> ID=', in_id);
        console.log('Run from App=', main);
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

    return(
        <Router>
            <Header/>
            
                <Routes>
                    <Route path="/" element={<Main dataMock={main}/>}/>
                    <Route path="/task/:id" element={<TaskDetail dataMock={main}/>} />
                    <Route path="*" element={<h1>Page not found</h1>}/>
                </Routes>

            <Footer/>
        </Router>
    );
}

export default App;