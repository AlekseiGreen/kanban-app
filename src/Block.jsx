import {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import "./Block.css";
import Select from './components/Select';


function Block(props){
    const fileInputRef = useRef(null);

    const [visual, setVisual] = useState(false);
    let visualInput = false;

    function onVision(){
        setVisual(!visual);
    }


    if(props.array.title === 'Backlog'){
        visualInput = false;
    } else{
        visualInput = true;
        
    }

    function onSendBacklog(in_dataRef){
        if(in_dataRef.current.value === undefined || in_dataRef.current.value  === "" || in_dataRef.current.value  === null ){
            console.log("нет данных");
            setVisual(!visual);
        } else{
            props.onWrite(in_dataRef.current.value, in_dataRef.current.id);
            fileInputRef.current.value = null;
            setVisual(!visual);
        }
    }

    function onSendBlock(in_index){
        props.onWrite(in_index);
        setVisual(!visual);
    }

    const uniqueID = `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;


    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map((element)=> <Link to={`/task/${element.id}`} className="block-content">{element.label}</Link>)}
            {!visualInput && visual && <input className="block-input" type="text" id={uniqueID} ref={fileInputRef} />}
            {!visualInput && !visual && <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card</div></div>}
            {!visualInput && visual && <button className="block-submit" onClick={()=>onSendBacklog(fileInputRef)}><div className="block-submit-text" >Submit</div></button>}
            {visualInput && !visual && <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card</div></div>}
            {visualInput && visual &&
                <Select
                    send={onSendBlock}
                    options={props.partArray}
                />
            }
        </div>
    );
}

export default Block;