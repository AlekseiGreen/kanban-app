import "./Block.css";

function Block(props){
    const array = "TXT";
    // props.onFunction(array);

    return(
        <div className="block">
            <div className="block-title">{props.title}</div>
            <div className="block-content">{props.content}</div>
            <div className="block-input"><input type="text"/></div>
            <div className="block-add"><div className="block-add-text" onClick={props.onFunction(array)}>+ Add card</div></div>
        </div>
    );
}

export default Block;