import { useState } from "react";
import PostList from "./PostList";

function UserCard({ user }) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <ul>
      <li>👥 {user.username}</li>
      <li>👤 {user.name}</li>
      <li>📧 {user.email}</li>
      <li>📞 {user.phone}</li>
      <button onClick={handleToggle}>
        {show ? "Hide Posts" : "Show Posts"}
      </button>
      {show && <PostList userId={user.id} />}
    </ul>
  );
}

export default UserCard;
