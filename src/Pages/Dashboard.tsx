import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  maindiv,
  task,
  taskdashboard,
  create,
  InviteUser,
  line,
  users,
  secondline,
  todo,
  inprogress,
  inner,
  toDo,
  user,
  view,
} from './Dashboardcss';
import toDoBox from '../toDoBox';
import TestingName from '../intesting';
import InProgress from '../inprogress';
import ToDo from '../ToDo';
import Done from '../done';
import { useNavigate } from 'react-router-dom';

function ViewTickets() {
  const View = useNavigate();
  const goTo = useNavigate();
  const [tickets, Settickets] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/get-tickets')
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        Settickets(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // console.log(tickets);

  return (
    <div style={maindiv}>
      <div style={task}>
        <label style={taskdashboard}>Task Dashboard</label>
        <button style={view} onClick={() => View('/viewticket')}>
          View Ticket
        </button>
        <button style={create} onClick={() => goTo('/create')}>
          + Create Ticket
        </button>
        <button style={InviteUser}>+ Invite User</button>
      </div>
      <hr style={line}></hr>
      <div>
        <label style={users}>Users:</label>
        <button style={user}>Abhishek</button>
        <button style={user}>Akshay</button>
        <button style={user}>sahil</button>
        <button style={user}>Deamon</button>
      </div>
      <hr style={secondline} />
      <div style={inner}>
        <div style={todo}>
          <p style={toDo}>TO DO</p>
          {tickets.map((item, ele) => {
            return <ToDo key={ele} value={item} index={ele}></ToDo>;
          })}
        </div>
        <div style={inprogress}>
          <p style={toDo}>IN PROGRESS</p>
          {tickets.map((item, ele) => {
            return <InProgress key={ele} value={item} index={ele}></InProgress>;
          })}
        </div>
        <div style={todo}>
          <p style={toDo}>IN TESTING</p>
          {tickets.map((item, ele) => {
            return <TestingName key={ele} value={item} index={ele}></TestingName>;
          })}
        </div>
        <div style={inprogress}>
          <p style={toDo}>DONE</p>
          {tickets.map((item, ele) => {
            return <Done key={ele} value={item} index={ele}></Done>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ViewTickets;
