import "./App.css";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";


function App(){
    // localStorage.setItem('tt', 2);
    // console.log(localStorage);

    return(
        <div className="grid-container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;