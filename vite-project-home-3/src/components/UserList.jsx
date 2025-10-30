import UserCard from "./UserCard";

function UsersList({ usersData }) {
  return usersData.map((user) => {
    return <UserCard key={user.id} user={user} />;
  });
}

export default UsersList;
