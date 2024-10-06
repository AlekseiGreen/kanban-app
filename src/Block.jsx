import {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
// import Select from 'react-select';
import "./Block.css";
import Select from './components/Select';


const linkDetail = "/detail";

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

    function onSendBlock(in_data, in_index){
        props.onWrite(in_data, in_index);
        setVisual(!visual);
    }


    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map((element)=> <Link to={`/task/${element.id}`} className="block-content">{element.label}</Link>)}
            {!visualInput && visual && <div className="block-input"><input type="text" ref={fileInputRef} onChange={handleEnter}/></div>}
            {!visualInput && !visual &&  <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card</div></div>}
            {!visualInput && visual && <div className="block-submit"><div className="block-submit-text" onClick={()=>onSendBacklog(fileInputRef)}>Submit</div></div>}
            {visualInput && !visual &&  <div className="block-add"><div className="block-add-text" onClick={onVision}>+ Add card</div></div>}
            {visualInput && visual && <Select
                send={onSendBlock}
                options={props.partArray}
            />}
        </div>
    );
}

export default Block;