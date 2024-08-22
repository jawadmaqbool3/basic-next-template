import UserTableProps from "./UserTableProps";

export  interface UserTableRefreshHandler {
  refresh: () => void;
}
export  interface UserTableEditHandler {
  editFunction: (user: UserTableProps) => void
}
