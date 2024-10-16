import "./Select.css";

function Select(props){
    console.log(props.options);

    // Формирование Select
    let arrTag = props.options.map(function(in_element, in_index){
    // in_index+1 необходимо для того, чтобы компенсировать <option  selected >Выберете...</option>
        return <option value={in_index+1}>{in_element.label}</option>
    });

    function sendToBlock(in_e){
        // in_index-1 необходимо для того, чтобы компенсировать in_index+1 (<option  selected >Выберете...</option>)
        let index = in_e.target.value-1;
        props.send(index);
    }


    return(
        <>
            <select className="block-select" onChange={(e)=>sendToBlock(e)}>
                <option  disabled selected></option>
                {arrTag}
            </select>
        </>
    );
}

export default Select;