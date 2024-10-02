import { useParams } from 'react-router-dom';


function TaskDetail(){
    const { id } = useParams()

    return (
      <h1>Book {id}</h1>
    )
}

export default TaskDetail;