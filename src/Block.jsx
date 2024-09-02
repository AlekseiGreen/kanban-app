import {useState, useRef} from 'react';
import "./Block.css";

// let dataRef;

function Block(props){
    const fileInputRef = useRef(null);

    const [visual, setVisual] = useState(false);

    function onVision(){
        setVisual(!visual);
    }
    
    const handleEnter = (event)=>{
        console.log("BLOCK=",event.target.value);
    }

    function onSendData(in_dataRef){
        if(in_dataRef.current.value === undefined || in_dataRef.current.value  === "" || in_dataRef.current.value  === null ){
            console.log("нет данных");
        } else{
            props.onEnter(in_dataRef.current.value);
            fileInputRef.current.value = null;
            setVisual(!visual);
        }
    }

    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map(element=> <div className="block-content">{element.name}</div>)}
            {visual && <div className="block-input"><input type="text" ref={fileInputRef} onChange={handleEnter}/></div>}
            {!visual &&  <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card</div></div>}
            {visual && <div className="block-submit"><div className="block-submit-text" onClick={()=>onSendData(fileInputRef)}>Submit</div></div>}
        </div>
    );
}

export default Block;