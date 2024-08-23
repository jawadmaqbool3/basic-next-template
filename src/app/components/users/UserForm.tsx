import axios from "axios";
import {
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  useEffect,
} from "react";
import UserFormProps from "@/app/component_interfaces/Users/UserFormProps";
import UserFormHandler from "@/app/component_interfaces/Users/UserFormHandler";

const UserForm = forwardRef<UserFormHandler, UserFormProps>((props, ref) => {
  const formRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    submit(callback) {
      submitUser(callback);
    },
  }));

  const [formData, setFormData] = useState<UserFormProps>(props);

  useEffect(() => {
    setFormData(props);
  }, [props]);

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitUser(() => {});
  };

  const submitUser = (callback: () => void) => {
    axios
      .post("/api/users", formData)
      .then((res) => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="card card-flush py-4">
          <div className="card-body pt-0">
            <div className="fv-row">
              <label className="required form-label">First Name</label>
              <input
                type="text"
                name="first_name"
                onChange={handleChange}
                value={formData.first_name}
                className="form-control mb-2"
                placeholder="First Name"
                required
              />
              <div className="text-muted fs-7">First name is required.</div>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="fv-row">
              <label className="required form-label">Last Name</label>
              <input
                type="text"
                name="last_name"
                onChange={handleChange}
                value={formData.last_name}
                className="form-control mb-2"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="fv-row">
              <label className="required form-label">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="form-control mb-2"
                placeholder="User Email"
                required
              />
              <div className="text-muted fs-7">An email is required.</div>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col-md-6 my-3">
                <label
                  className={`${
                    formData.formMode === 1 ? "required" : ""
                  } form-label`}
                >
                  Password
                </label>
                <input
                  autoComplete="on"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                  className="form-control mb-2"
                  placeholder="Password"
                />
                <div className="text-muted fs-7">A password is required.</div>
              </div>
              <div className="col-md-6 my-3">
                <label
                  className={`${
                    formData.formMode === 1 ? "required" : ""
                  } form-label`}
                >
                  Confirm Password
                </label>
                <input
                  autoComplete="on"
                  type="password"
                  id="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  name="confirm_password"
                  className="form-control mb-2"
                  placeholder="Confirm Password"
                />
                <div className="text-muted fs-7">Confirm your password.</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
});

export default UserForm;
