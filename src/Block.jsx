import "./Block.css";

function Block({props}){
    const array = "TXT";

    return(
        <div className="block">
            <div className="block-title">{}</div>
            <div className="block-content">{array}</div>
            <div className="block-add"><div className="block-add-text">+ Add card</div></div>
        </div>
    );
}

export default Block;