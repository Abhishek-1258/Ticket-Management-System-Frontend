import { intestingbox, title, description, assignee } from './Pages/Dashboardcss';

function TestingName(props: any) {
  return (
    <div>
      {props.value.status == 'In Testing' && (
        <div style={intestingbox}>
          <div>
            <p style={title}>{props.value.title}</p>
            <p style={description}>{props.value.description}</p>
            <p style={assignee}>Assignee: Deamon</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestingName;
