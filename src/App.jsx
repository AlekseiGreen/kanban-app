import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import Detail from "./Detail";


function App(){

    return(
        <Router>
            <Header/>
            
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    {/* implement a route cycle */}
                    <Route path="/detail" element={<Detail/>}/>
                    <Route path="*" element={<h1>Page not found</h1>}/>
                </Routes>

            <Footer/>
        </Router>
    );
}

export default App;