import "./Footer.css"


function Footer(props){
    const ACTIVE_TASKS = 0;
    const FINISHED_TASKS = 3;


    return(
        <div className="grid-footer">
            <div className="footer">
                <div>Active tasks: {props.dataMock[ACTIVE_TASKS].issues.length}</div>
                <div>Finished tasks: {props.dataMock[FINISHED_TASKS].issues.length}</div>
            </div>
        </div>
    );
}

export default Footer;
