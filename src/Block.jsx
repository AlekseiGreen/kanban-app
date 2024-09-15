import {useState, useRef} from 'react';
import Select from 'react-select';

import "./Block.css";

// let dataRef;


function Block(props){
    const fileInputRef = useRef(null);
    const fileCHRef = useRef(null);


    const [visual, setVisual] = useState(false);
    const [selectValue, setSelectValue] = useState('');
    let visualInput = false;

    function onVision(){
        setVisual(!visual);
    }


    if(props.array.title === 'Backlog'){
        visualInput = false;
    } else{
        visualInput = true;
    }
    
    const handleEnter = (event)=>{
        console.log("BLOCK=",event.target.value);
    }

    function onSendBacklog(in_dataRef){
        if(in_dataRef.current.value === undefined || in_dataRef.current.value  === "" || in_dataRef.current.value  === null ){
            console.log("нет данных");
            setVisual(!visual);
        } else{
            props.onWrite(in_dataRef.current.value);
            fileInputRef.current.value = null;
            setVisual(!visual);
        }
    }

    function onSendReady(in_data){
        props.onWrite(in_data);
    }


    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map(element=> <div className="block-content">{element.label}</div>)}
            {!visualInput && visual && <div className="block-input"><input type="text" ref={fileInputRef} onChange={handleEnter}/></div>}
            {!visualInput && !visual &&  <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card</div></div>}
            {!visualInput && visual && <div className="block-submit"><div className="block-submit-text" onClick={()=>onSendBacklog(fileInputRef)}>Submit</div></div>}
            {visualInput && !visual &&  <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card2</div></div>}
            {visualInput && visual && <Select
                classNamePrefix="block-custom-select"
                onChange={(e)=>onSendReady(e.label)}
                options={props.partArray}
            />}
            {console.log('Issues=', props.partArray)}
        </div>
    );
}

export default Block;