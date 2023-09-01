import React, { useEffect, useState } from "react";
import clsx from "clsx";

import UserCard from "./UserCard";

import { client } from "proto/client";

import type { User } from "proto/chat";

interface IUsersListProps {
  className?: string;
}

function UsersList({ className = "" }: IUsersListProps) {
  //STATES
  const [users, setUsers] = useState<User[]>([]);

  //LIFE CYCLE HOOKS
  useEffect(() => {
    client
      .getAllUsers({})
      .then((res) => setUsers(res.response.users))
  }, []);

  return (
    <div
      className={clsx([
        "flex flex-col gap-y-3 overflow-y-scroll pt-[6.5rem] p-2 custom-scroll border-[0.5px] border-linePrimary rounded-md shadow-lg",
        className,
      ])}
    >
      {users?.map((user) => (
        <UserCard key={user.id} userData={user} />
      ))}
    </div>
  );
}

export default React.memo(UsersList);
