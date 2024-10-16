import {useState} from "react";
import { useParams, Link } from 'react-router-dom';
import "./TaskDetail.css";


function TaskDetail(props){

  const { id } = useParams();

  // 
  function findTask(in_arr, in_id){
    let copyMain = Object.assign([], in_arr);
    for(let index=0; index < in_arr.length; index++){
      let subIndex;
      let copyMainIssues = Object.assign([], copyMain[index].issues);
      const copyId = copyMainIssues.find((element, subIndexIntro)=> {
        subIndex = subIndexIntro;
        if(element.id===in_id){
          return(element.id);
        }
      });
      // 
      if(copyId!==undefined){
        return([copyId.label, copyId.description, index, subIndex]);
      }
    }
  }
  // Получение [index, subIndex] необходимы для того, чтобы потом повторно не искать по id нужный description
  let [label, descript, index, subIndex] = findTask(props.dataMock, id);
  const [valueTD, setValueTD] = useState(descript);
  function sendDescript(in_event, in_index, in_subIndex){
    let description = in_event.target.value;
    setValueTD(description);
    props.writeDescript(in_index, in_subIndex, description);
  }

  return (
    <>
      <h1>{label}</h1>
      <Link to={`/`} className="taskdetail-link">
        <div className="taskdetail-close">X</div>
      </Link>
      
      <textarea
        className='taskdetail-textarea'
        name="postContent"
        onChange={event => sendDescript(event, index, subIndex)}
      >{valueTD}</textarea>
      <button className='taskdetail-button' onClick={()=>console.log("V=", 1)}>SAVE</button>
    </>
    
  )
}

export default TaskDetail;