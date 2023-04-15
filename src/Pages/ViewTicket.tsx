import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  container,
  backButton,
  createTicket,
  editticket,
  horizontalline,
  typebox,
  title,
  description,
  desDetail,
  rowwise,
  assign,
  assignto,
  assigntextbox,
  reporter,
  reportertextbox,
  stat,
  statustextbox,
} from './ViewTicketcss';
import back from '../Images/back.svg';
import edit from '../Images/edit.svg';

function ViewTicket() {
  const [Assign, SetAssign] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/get-ticket')
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        SetAssign(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div style={container}>
      <form>
        <div>
          <a href="http://localhost:3000/">
            <img src={back} style={backButton} />
          </a>
          <label style={createTicket}>Ticket</label>
          <img src={edit} style={editticket} />
        </div>
        <hr style={horizontalline} />
        <p style={title}>Ticket Title</p>
        <input style={typebox} type="text"></input>
        <p style={description}>Description </p>
        <textarea rows={10} style={desDetail}></textarea>
        <div style={rowwise}>
          <div style={assign}>
            <label style={assignto}>Assign To</label>
            <input type="text" style={assigntextbox}></input>

            <label style={reporter}>Reporter</label>
            <input type="text" style={reportertextbox}></input>
          </div>
          <div>
            <p style={stat}>Status</p>
            <input type="text" style={statustextbox}></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ViewTicket;
