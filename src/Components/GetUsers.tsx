import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
interface UserProps {
  firstName: string;
  email: string;
}

function GetUsers() {
  const { data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState<UserProps[]>([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {users.map((val) => {
        return (
          <h6>
            {" "}
            {val.firstName} {val.email}
          </h6>
        );
      })}
    </div>
  );
}

export default GetUsers;