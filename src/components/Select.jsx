

function Select(props){
    // props.option[0].key
    console.log(props.options);
//     let arr =   [
//         {
//             id: '1',
//             label: 'one',
//     description: 'Fix all the bugs 1'
//         },
//         {
//            id: '11',
//            label: 'two',
//    description: 'Fix all the bugs 11'
//        },
//    ];

//    let arr = props.option;

    let arrTag = props.options.map(function(element, index){
        return <option value="">{element.label}</option>
    });


    return(
        <>
            <select name="" id="">
                {arrTag}
            </select>
        </>
    );
}

export default Select;