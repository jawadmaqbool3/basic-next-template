import User from "./User";

export default interface UserFormProps extends User {
  password?: string;
  formMode?: number;
  confirm_password?: string;
}
