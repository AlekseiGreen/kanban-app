import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from "react";
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import TaskDetail from "./components/TaskDetail.jsx";


function App(){
    // массив
    const dataMock3 = [
        {
            title: 'Backlog',
            issues: [],
            onFunction: 'onWriteBacklog',
        },
        {
            title: 'Ready',
            issues: [],
            onFunction: 'onWriteReady',
        },
        {
            title: 'In progress',
            issues: [],
            onFunction: 'onWriteInProgress',
        },
        {
            title: 'Finished',
            issues: [],
            onFunction: 'onWriteFinished',
        },
    ];

    // localStorage.clear();

    if(localStorage.length === 0){
        localStorage.setItem('arr', JSON.stringify(dataMock3));
    console.log("Вход в условие=>");

    }

    function convertLS(){
        let arr = JSON.parse( localStorage.getItem('arr') );
        for(let i=0; i < dataMock3.length; i++){
            arr[i].onFunction = eval(arr[i].onFunction);
        }
        return(arr);
    }
    let dataMock;
    dataMock = convertLS();

    console.log("LocalStorage=", dataMock);

    function convertFuncToString(in_copyMain){
        for(let i=0; i < in_copyMain.length; i++){
            in_copyMain[i].onFunction = String(in_copyMain[i].onFunction);
            console.log("CONVERT_0=", in_copyMain);
            in_copyMain[i].onFunction = in_copyMain[i].onFunction.split('(').shift();
            console.log("CONVERT_1=", in_copyMain);
            in_copyMain[i].onFunction = in_copyMain[i].onFunction.slice(9);
            console.log("CONVERT_2=", in_copyMain);
        }
        localStorage.setItem('arr', JSON.stringify(in_copyMain));
        console.log("CONVERT_=", JSON.parse( localStorage.getItem('arr') ));
    }

    const [main, setMain] = useState(dataMock);

    // Добавление задания в DataBase (Array)
    function addDataBase(in_index, in_id, in_label, in_description=""){
        let copyMain = Object.assign([], main);
        let copyMainIssues = Object.assign([], copyMain[in_index].issues);
        copyMainIssues.push({id: in_id, label: in_label, description: in_description});
        copyMain[in_index].issues = copyMainIssues;

        convertFuncToString(copyMain)
        
        for(let i=0; i < copyMain.length; i++){
            copyMain[i].onFunction = eval(copyMain[i].onFunction);
        }
        console.log("copyMAIN_=", copyMain);

        setMain(copyMain);
        console.log("MAIN_=", main);
        
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

        // Копируем определенный раздел
        let copyMainIssues = Object.assign([], copyMain[in_index].issues);
        // Копируем определенный подраздел
        let copyMainIssuesObj = Object.assign({}, copyMainIssues[in_index_issues]);
        // Переписываем Description
        copyMainIssuesObj.description = in_description;
        // Обновляем issues
        copyMainIssues.splice(in_index_issues, 1, copyMainIssuesObj);
        //
        copyMain[in_index].issues = copyMainIssues;

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
                    <Route path="*" element={<div className="grid-pagenotefound"><h1>Page not found</h1></div>}/>
                </Routes>

            <Footer dataMock={main}/>
        </Router>
    );
}

export default App;