import "./Block.css";

function Block(props){

    return(
        <div className="block">
            <div className="block-title">{props.array.title}</div>
            {props.array.issues.map(i=> <div className="block-content">{i.name}</div>)}
            <div className="block-input"><input type="text"/></div>
            <div className="block-add"><div className="block-add-text" onClick={props.onFunction}>+ Add card</div></div>

        </div>
    );
}

export default Block;