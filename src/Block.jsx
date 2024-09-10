import {useState, useRef} from 'react';
import Select from 'react-select';

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
            setVisual(!visual);
        } else{
            props.onWrite(in_dataRef.current.value);
            fileInputRef.current.value = null;
            setVisual(!visual);
        }
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]



    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map(element=> <div className="block-content">{element.name}</div>)}
            {visual && <div className="block-input"><input type="text" ref={fileInputRef} onChange={handleEnter}/></div>}
            {!visual &&  <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card</div></div>}
            {visual && <div className="block-submit"><div className="block-submit-text" onClick={()=>onSendData(fileInputRef)}>Submit</div></div>}
            <Select options={options} onChange={(e)=>console.log(e.label)}/>
        </div>
    );
}

export default Block;