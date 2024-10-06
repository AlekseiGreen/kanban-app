import { useParams } from 'react-router-dom';


function TaskDetail(props){
    const { id } = useParams();

    function findTask(in_arr, in_index, in_id){
      let copyMain = Object.assign([], in_arr);
      let copyMainIssues = Object.assign([], copyMain[in_index].issues);
      const copyId = copyMainIssues.find((element)=>element.id===Number(in_id));
      return(copyId);
    }
    console.log("FindTask=",findTask(props.dataMock, 1, id));

    return (
      <>
        <h1>Label {}</h1>
        <div>ID {id}</div>
        <div>Descr {}</div>
      </>
      
    )
}

export default TaskDetail;