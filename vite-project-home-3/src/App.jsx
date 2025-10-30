import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }
    getUsers();
  }, []);

  if (loading) {
    return <p>Hol up...</p>;
  } else {
    return (
      <>
        <UserList usersData={users} />
      </>
    );
  }
}

export default App;
