import {useState} from "react";
import { useParams, Link } from 'react-router-dom';
import "./TaskDetail.css";


function TaskDetail(props){
  const [valueTD, setValueTD] = useState('');

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

  let [div_1, descript] = findTask(props.dataMock, id);

  function saveLocal(){
    
  }

  return (
    <>
      <h1>{div_1}</h1>
      <Link to={`/`} className="taskdetail-link">
        <div className="taskdetail-close">X</div>
      </Link>
      
      <textarea
        className='taskdetail-textarea'
        name="postContent"
        onChange={event => setValueTD(event.target.value)}
      >{descript}</textarea>
      <p>{valueTD}</p>
      <button className='taskdetail-button' onChange={console.log("V=", 1)}>save</button>
    </>
    
  )
}

export default TaskDetail;