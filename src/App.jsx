import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from "react";
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import TaskDetail from "./components/TaskDetail.jsx";


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
    function addDataBase(in_index, in_id, in_label, in_description=""){
        let copyMain = Object.assign([], main);
        let copyMainIssues = Object.assign([], copyMain[in_index].issues);
        copyMainIssues.push({id: in_id, label: in_label, description: in_description});
        copyMain[in_index].issues = copyMainIssues;

        console.log("Copy=>>", copyMain);
        setMain(copyMain);
        
    }

    // Удаление задания из DataBase (Array)
    function getCutElement(in_index, in_index_issues){
        let copyMain = Object.assign([], main);
        let copyMainIssues = Object.assign([], copyMain[in_index].issues);

        let cutElement = copyMainIssues.slice(in_index_issues, in_index_issues + 1);

        copyMainIssues.splice(in_index_issues, 1);

        copyMain[in_index].issues = copyMainIssues;
        setMain(copyMain);

        return(cutElement);
    }

    // Запись Description по индексам
    function writeDescript(in_index, in_index_issues, in_description){
        // Копируем массив
        let copyMain = Object.assign([], main);
        console.log("copyMain=", copyMain);

        // Копируем определенный раздел
        let copyMainIssues = Object.assign([], copyMain[in_index].issues);
        console.log("copyMainIssues=", copyMainIssues);
        // Копируем определенный подраздел
        let copyMainIssuesObj = Object.assign({}, copyMainIssues[in_index_issues]);
        console.log("copyMainIssuesObj=", copyMainIssuesObj);
        // Переписываем Description
        copyMainIssuesObj.description = in_description;
        console.log("description=", copyMainIssuesObj);
        // Обновляем issues
        copyMainIssues.splice(in_index_issues, 1, copyMainIssuesObj);
        console.log("copyMainIssues=", copyMainIssues);
        //
        copyMain[in_index].issues = copyMainIssues;
        console.log("copyMain=", copyMain);

        setMain(copyMain);
    }

    // func onWriteBacklog
    function onWriteBacklog(in_data, in_id){
        // 0 - Blacklog
        addDataBase(0, in_id, in_data, "");
    }

    // func onWriteReady
    function onWriteReady(in_index){
        // cutElement - возвращается объект в массиве
        // 0 - Blacklog
        let cutElement = getCutElement(0, in_index);
        // 1 - Ready
        addDataBase(1, cutElement[0].id, cutElement[0].label, cutElement[0].description);
    }

    // onWriteReady onWriteInProgress
    function onWriteInProgress(in_index){
        // 1 - Ready
        let cutElement = getCutElement(1, in_index);
        // 2- InProgress
        addDataBase(2, cutElement[0].id, cutElement[0].label, cutElement[0].description);
    }

    // onWriteInProgress onWriteFinished
    function onWriteFinished(in_index){
        // 2 - InProgress
        let cutElement = getCutElement(2, in_index);
        // 3 - Finished
        addDataBase(3, cutElement[0].id, cutElement[0].label, cutElement[0].description);
    }

    return(
        <Router>
            <Header/>
            
                <Routes>
                    <Route path="/" element={<Main dataMock={main}/>}/>
                    <Route path="/task/:id" element={<TaskDetail dataMock={main} writeDescript={writeDescript}/>} />
                    <Route path="*" element={<h1>Page not found</h1>}/>
                </Routes>

            <Footer/>
        </Router>
    );
}

export default App;