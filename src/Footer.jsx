import "./Footer.css"


function Footer(props){
    const INDEX_ACTIVE_TASKS = 0;
    const INDEX_FINISHED_TASKS = 3;
    let activeTasks;
    let finishedTasks;

    try{
        activeTasks = props.dataMock[INDEX_ACTIVE_TASKS].issues.length;
    } catch(error){
        activeTasks = 0;
    }
    try{
        finishedTasks = props.dataMock[INDEX_FINISHED_TASKS].issues.length;
    } catch(error){
        finishedTasks = 0;
    }


    return(
        <div className="grid-footer">
            <div className="footer">
                <div>Active tasks: {activeTasks}</div>
                <div>Finished tasks: {finishedTasks}</div>
            </div>
        </div>
    );
}

export default Footer;
