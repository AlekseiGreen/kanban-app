import {useState, useEffect} from "react";
import "./Main.css";
// import Block from "./Block.jsx";
import Avatar from "./Avatar.jsx";


const data = [
    {
        size: 100,
        person: {
            name: 'Bill Gates',
            imageUrl: 'https://static01.nyt.com/images/2021/05/17/business/14altGates-print/14Gates--top-mediumSquareAt3X.jpg'
        }
    },
    {
        size: 100,
        person: {
            name: 'Sreve Jobs',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg'
        }
    },
    {
        size: 100,
        person: {
            name: 'Pavel Durov',
            imageUrl: 'https://starsunfolded.com/wp-content/uploads/2021/01/Pavel-Durov.jpg'
        }
    },
]

function Main(){
    const testClickAvatar = () => {
        console.log("CLick");
    }

    const [currentAvatar, setCurrentAvatar] = useState(0);

    const onClickPrev = () => {
        setCurrentAvatar(currentAvatar - 1);
        console.log(currentAvatar);
    };

    const onClickNext = () => {
        setCurrentAvatar(currentAvatar + 1);
        console.log(currentAvatar);
    };

    useEffect(()=>{
        console.log('useEffect_Click');
        return()=>{console.log('useEffect_Return');}
    }, []);

    return(
        <div className="grid-main">
            <div  className="main">
                <Avatar
                    size={data[currentAvatar].size}
                    person={data[currentAvatar].person}
                    onClick={testClickAvatar}
                />
                <button onClick={onClickPrev}>Prev</button>
                <button onClick={onClickNext}>Next</button>
            </div>
        </div>
    );
}

export default Main;