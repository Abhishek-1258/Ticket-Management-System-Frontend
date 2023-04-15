import { title, description, assignee, todobox } from './Pages/Dashboardcss';

function ToDo(props: any) {
  return (
    <div>
      {props.value.status === 'To Do' && (
        <div style={todobox}>
          <div>
            <p style={title}>{props.value.title}</p>
            <p style={description}>{props.value.description}</p>
            <p style={assignee}>Assignee: Aemond</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDo;
