const UserForm: React.FC = () => {
  return (
    <>
      <div className="card card-flush py-4">
        
        <div className="card-body pt-0">
          <div className="fv-row">
            <label className="required form-label">Name</label>
            <input
              type="text"
              name="name"
              value=""
              className="form-control mb-2"
              placeholder="User name"
              required
            />
            <div className="text-muted fs-7">A user name is required.</div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="fv-row">
            <label className="required form-label">Email</label>
            <input
              type="email"
              name="email"
              value=""
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
              <label className="required form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control mb-2"
                placeholder="Password"
              />
              <div className="text-muted fs-7">A password is required.</div>
            </div>
            <div className="col-md-6 my-3">
              {" "}
              <label className="required form-label">Confirm Password</label>
              <input
                type="password"
                id="co_password"
                name="co_password"
                className="form-control mb-2"
                placeholder="Confirm Password"
              />
              <div className="text-muted fs-7">Confirm your password.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserForm;
