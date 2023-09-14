import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Admin = () => {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [members, setMembers] = useState([]);
    const [reload, setReload] = useState(false);

  useEffect(()=>{
    const getData = async () => {
    const response = await axios.get("https://jsd5-mock-backend.onrender.com/members")
      setMembers(response.data)
    }
    getData();
  },[reload]);

const createData = async (name, lastname, position) => {
    const response = await axios.post("https://jsd5-mock-backend.onrender.com/members"
     ,{
        id: uuidv4(),
        name: name,
      lastname: lastname,
      position: position,}
    );
    if (response.status === 200){
      setReload(!reload)
    }
    console.log('createData',response.status)
  }

  const deleteData = async (id) => {
    const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
    if (response.status === 200 && response.data) {
      setReload(!reload);
    }
    console.log('deleteData',response.status)
  };

  return (
    <div className="input">
      <h2>Create User Here</h2>
      <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" d="lastName" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
      <input type="text" id="position" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}/>
      <button onClick={() => createData(name, lastname, position)}>Save</button>
      <main className="main">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name </th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <TableBody members={members} deleteData={deleteData}/>
      </table>
    </main>
    </div>
  );
};

const TableBody = ({members, deleteData}) => {
    return(
        <tbody>
            {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
              <td><button onClick={() => deleteData(member.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
    )
}

export default Admin;
