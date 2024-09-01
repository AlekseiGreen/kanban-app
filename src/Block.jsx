import {useState, useRef} from 'react';
import "./Block.css";

// let dataRef;

function Block(props){
    const fileInputRef = useRef(null);

    console.log("fileRef", fileInputRef);


    const [visualInput, setVisualInput] = useState(false);

    function onVisionInput(){
        setVisualInput(!visualInput);
    }
    
    const handleEnter = (event)=>{
        console.log("BLOCK=",event.target.value);
    }

    function onSendData(in_dataRef){
        console.log("Ref=", in_dataRef);
        if(in_dataRef.current.value === undefined || in_dataRef.current.value  === "" || in_dataRef.current.value  === null ){
            console.log("нет данных");
        } else{
            console.log("Send data=", in_dataRef.current.value);
            props.onEnter(in_dataRef.current.value);
            fileInputRef.current.value = null;
            setVisualInput(!visualInput);
        }
    }

    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map(element=> <div className="block-content">{element.name}</div>)}
            {visualInput && <div className="block-input"><input type="text" ref={fileInputRef} onChange={handleEnter}/></div>}
            {!visualInput &&  <div className="block-add"><div className="block-add-text" onClick={onVisionInput}>+ Add card</div></div>}
            {visualInput && <div className="block-submit"><div className="block-submit-text" onClick={()=>onSendData(fileInputRef)}>Submit</div></div>}
        </div>
    );
}

export default Block;