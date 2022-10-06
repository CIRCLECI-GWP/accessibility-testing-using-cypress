function App() {
  return (
    <div className="row">
      <div className="col-md-5 mx-auto">
        <form className="m-4">
          <img
            src="/logo.png"
            alt=""
            width="50%"
            className="d-block mx-auto mb-4"
          />
          <div className="mb-3">
            <h1 className="h3 mb-3 font-weight-normal text-center">
              Create an account
            </h1>{" "}
            {/* Use h1 instead of h3 tags */}
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria_labelledby="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />{" "}
            {/* change exampleInputPassword2 to exampleInputPassword1 */}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />{" "}
            {/* change exampleInputPassword to exampleInputPassword2 */}
          </div>
          <label for="form-check-label" className="form-check-label mb-3">
            I agree to the <a href="/">terms and conditions</a>{" "}
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked1"
            />
            <label className="form-check-label" for="flexCheckChecked1">
              Yes
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked2"
            />
            <label className="form-check-label" for="flexCheckChecked2">
              No
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>{" "}
          {/* delete text-primary */}
        </form>
      </div>
    </div>
  );
}

export default App;
