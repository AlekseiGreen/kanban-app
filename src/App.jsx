import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import TaskDetail from "./TaskDetail.jsx";
import Task from "./components/Task.jsx";


function App(){

    return(
        <Router>
            <Header/>
            
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/:id" element={<TaskDetail/>}/>
                    <Route path="*" element={<h1>Page not found</h1>}/>
                </Routes>

            <Footer/>
        </Router>
    );
}

export default App;