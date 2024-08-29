import "./Block.css";

function Block(props){
    let textData;
    const handleEnter = (event)=>{
        console.log("BLOCK=",event.target.value);
        textData = event.target.value;
    }
    function onSetData(){
        props.onEnter(textData);
    }


    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map(element=> <div className="block-content">{element.name}</div>)}
            {/* <div className="block-input"><input type="text" onChange={handleEnter}/></div>
            <div className="block-add"><div className="block-add-text" onClick={props.onFunction}>+ Add card</div></div> */}
            <div className="block-input"><input type="text" onChange={handleEnter}/></div>
            <div className="block-add"><div className="block-add-text" onClick={onSetData}>+ Add card</div></div>
            

        </div>
    );
}

export default Block;