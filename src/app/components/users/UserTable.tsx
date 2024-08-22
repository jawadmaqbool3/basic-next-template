import axios from "axios";

import {
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  useEffect,
} from "react";

import UserTableProps from "@/app/component_interfaces/Users/UserTableProps";
import UserTableHandler from "@/app/component_interfaces/Users/UserTableHandler";

const UserTable = forwardRef<UserTableHandler>(({}, ref) => {
  const [users, setUsers] = useState<UserTableProps[]>([]);

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refreshTable();
  }, []);

  useImperativeHandle(ref, () => ({
    refresh() {
      refreshTable();
    },
  }));

  const refreshTable = () => {
    axios
      .get("/api/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="card-body pt-3">
        <div className="table-responsive">
          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
            <thead>
              <tr className="border-0">
                <th className="fw-bold p-0">SR#</th>
                <th className="fw-bold p-0 min-w-150px text-start">Name</th>
                <th className="fw-bold p-0 min-w-150px text-start">Email</th>
                <th className="fw-bold p-0 text-start"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
});
export default UserTable;
