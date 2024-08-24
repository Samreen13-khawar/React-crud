import React, { useState } from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);
  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    const user = { name, email, address };
    if (edit) {
      const updatedUsers = users.map((u, index) => index === active ? user : u);
      setUsers(updatedUsers);
      setEdit(false);
      setActive(null);
    } else {
      setUsers([...users, user]);
    }
    setName("");
    setEmail("");
    setAddress("");
  };

  const onEditClick = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);
    setActive(index);
    setEdit(true);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      
      <div className='crud'>React CRUD app without database</div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
            <form onSubmit={addUser}>
              <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='form-group'>
                <label>Address</label>
                <input type='text' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-success form-control">{edit ? "Update" : "Add"}</button>
            </form>
          </div>
        </div>
      </div>
      <table className="table table-border mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button className="btn btn-info" onClick={() => onEditClick(index)}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
