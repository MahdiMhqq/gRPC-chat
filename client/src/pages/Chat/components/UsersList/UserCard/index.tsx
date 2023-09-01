import clsx from "clsx";

import type { User } from "proto/chat";

interface IUserCardProps {
  className?: string;
  userData: User;
}

function UserCard({ className = "", userData }: IUserCardProps) {
  //VARIABLES
  const myUsername = localStorage.getItem("username");
  const isMine = myUsername === userData.name;

  return (
    <p
      className={clsx([
        "px-3 py-2 rounded-md whitespace-nowrap overflow-x-hidden text-ellipsis ltr shrink-0",
        isMine ? "bg-primary text-tSecondary" : "bg-sDisabled text-tPrimary",
        className,
      ])}
    >
      @{userData.name}
    </p>
  );
}

export default UserCard;
