import { useParams } from 'react-router-dom';


function TaskDetail(props){
    const { id } = useParams();

    function findTask(in_arr, in_id){
      let copyMain = Object.assign([], in_arr);
      for(let i=0; i < in_arr.length; i++){
        let copyMainIssues = Object.assign([], copyMain[i].issues);
        const copyId = copyMainIssues.find((element)=> element.id===in_id);
        // 
        if(copyId!==undefined){
          return([copyId.label, copyId.description,]);
        }
      }
    }

    let [div_1, div_2] = findTask(props.dataMock, id);

    return (
      <>
        <h1>{div_1}</h1>
        <div>{div_2}</div>
      </>
      
    )
}

export default TaskDetail;