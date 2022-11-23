import './App.css';
import React from "react";
import axios from "axios";

function App() {
  const [currentusers, setCurrentusers] = React.useState("empty");

  React.useEffect(() => {
    axios.get('https://backend-backup-web.herokuapp.com/users/').then((response) => {
      setCurrentusers(response.data);
    });
  }, []);

  if (currentusers !== "empty") {
    return (
      <div>
        <h1>Users:</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Victories</th>
          </tr>
            {currentusers.length !== 0 &&
              Object.values(currentusers).map((value) => {
                return (
                  <tr>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.password}</td>
                    <td>{value.victories}</td>
                  </tr>
                );
              })}
        </table>
      </div>
    );
  } else {
    return (
      <h1>No Users Yet.</h1>
    );
  }
}

export default App;
