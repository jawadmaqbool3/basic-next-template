import User from "./User";

export default interface UserTableProps extends User {
  _id: string;
  name: string;
}
