import User from "./User";

export default interface UserFormProps extends User {
  password: string;
  confirm_password: string;
}
