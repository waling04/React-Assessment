import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [members, setMembers] = useState([]);

useEffect(()=>{
  const getData = async () => {
  const response = await axios.get('https://jsd5-mock-backend.onrender.com/members')
    setMembers(response.data)
  };
  getData();
},[]);

return (
  <div>
    <main className="main">
    <table className="user-table">
      <thead>
        <tr>
          <th>Name </th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
      </thead>
      <TableBody members={members}/>
    </table>
  </main>
  </div>
);
};

const TableBody = ({members}) => {
  return(
      <tbody>
          {members.map((member) => (
          <tr key={member.id}>
            <td>{member.name}</td>
            <td>{member.lastname}</td>
            <td>{member.position}</td>
          </tr>
        ))}
      </tbody>
  )
}

export default User
