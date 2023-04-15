import { donebox, title, description, assignee } from './Pages/Dashboardcss';

function Done(props: any) {
  return (
    <div>
      {props.value.status == 'Done' && (
        <div style={donebox}>
          <div>
            <p style={title}>{props.value.title}</p>
            <p style={description}>{props.value.description}</p>
            <p style={assignee}>Assignee: Aegon</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Done;
