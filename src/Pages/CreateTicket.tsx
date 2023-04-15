import React, { useEffect, useState } from 'react';
import {
  backButton,
  container,
  createTicket,
  horizontalline,
  Title,
  typebox,
  Description,
  desDetail,
  rowwise,
  assignto,
  reporter,
  dropdown1,
  statusticket,
  todo,
  cancelsave,
  cancel,
  save,
  assign,
  report,
  re,
} from './CreateTicketcss';
import back from '../Images/back.svg';
import { AssignToName } from '../assignto/assignfun';
import { useNavigate } from 'react-router-dom';

function CreateTicket() {
  const goTo = useNavigate();

  const [title, SetTitle] = useState('');
  const [description, SetDescription] = useState('');
  const [assignTo, SetAssignto] = useState('');
  const [reporter, Setreporter] = useState('');
  const [status, SetTodo] = useState('');

  const [Assign, SetAssign] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/get-users')
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        SetAssign(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // console.log(Assign);

  const handlesubmit = (event: any) => {
    event.preventDefault();
    const details = { title, description, assignTo, reporter, status };
    // console.log(details.Title);
    fetch('http://localhost:8080/api/v1/create-ticket', {
      method: 'post',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    }).then((response) => response.json());
    console.log(details);
  };

  return (
    <div style={container}>
      <form>
        <div>
          <a href="http://localhost:3000/">
            <img src={back} style={backButton} />
          </a>
          <label style={createTicket}>Create Ticket</label>
        </div>
        <hr style={horizontalline} />
        <p style={Title}>Ticket Title</p>
        <input
          style={typebox}
          type="text"
          placeholder="Type here"
          value={title}
          onChange={(event) => SetTitle(event.target.value)}
        ></input>
        <p style={Description}>Description </p>
        <textarea
          rows={10}
          style={desDetail}
          placeholder="Type here"
          value={description}
          onChange={(event) => SetDescription(event.target.value)}
        ></textarea>

        <div style={rowwise}>
          <div style={assign}>
            <label style={assignto}>Assign To</label>
            <select
              style={dropdown1}
              value={assignTo}
              onChange={(event) => SetAssignto(event.target.value)}
            >
              <option>Select user</option>
              {Assign.map((item, i) => {
                return <AssignToName key={i} value={item} index={i}></AssignToName>;
              })}
            </select>
          </div>

          <div style={report}>
            <label style={re}>Reporter</label>
            <select
              style={dropdown1}
              value={reporter}
              onChange={(event) => Setreporter(event.target.value)}
            >
              <option>Select user</option>
              {Assign.map((item, i) => {
                return <AssignToName key={i} value={item}></AssignToName>;
              })}
            </select>
          </div>
        </div>
        <p style={statusticket}>Status</p>
        <select style={dropdown1} value={status} onChange={(event) => SetTodo(event.target.value)}>
          <option style={todo} value="">
            To Do
          </option>
          <option style={todo} value="">
            In Progress
          </option>
          <option style={todo} value="">
            In Testing
          </option>
          <option style={todo} value="">
            Done
          </option>
          <option style={todo} value="">
            Archive
          </option>
        </select>
        <div style={cancelsave}>
          <button style={cancel} onClick={() => goTo('/create')}>
            Cancel
          </button>
          <button style={save} onClick={handlesubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTicket;
