import "./App.css";
import MainPage from "./MainPage.jsx";
import Detail from "./Detail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>
        </Router>
    );
}

export default App;