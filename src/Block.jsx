import {useRef} from 'react';
import "./Block.css";

let textData;


function Block(props){
    const fileInputRef = useRef();
    console.log(fileInputRef);
    
    const handleEnter = (event)=>{
        console.log("BLOCK=",event.target.value);
        textData = event.target.value;
    }

    function onSendData(in_textData){
        console.log("Ref=", fileInputRef.current.value);
        if(in_textData === undefined || in_textData === ""){
            console.log("нет данных");
        } else{
            console.log("Send data=", in_textData);
            props.onEnter(in_textData);
            fileInputRef.current.value ="";
        }
    }

    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map(element=> <div className="block-content">{element.name}</div>)}
            {true && <div className="block-input"><input type="text" ref={fileInputRef} onChange={handleEnter}/></div>}
            <div className="block-add"><div className="block-add-text" onClick={()=>onSendData(textData)}>+ Add card</div></div>
        </div>
    );
}

export default Block;