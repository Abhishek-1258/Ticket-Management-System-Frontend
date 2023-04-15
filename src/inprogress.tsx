import { inprogressbox, title, description, assignee } from './Pages/Dashboardcss';

function InProgress(props: any) {
  return (
    <div>
      {props.value.status == 'In Progress' && (
        <div style={inprogressbox}>
          <div>
            <p style={title}>{props.value.title}</p>
            <p style={description}>{props.value.description}</p>
            <p style={assignee}>Assignee: Abhishek</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InProgress;
