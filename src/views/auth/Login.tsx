export default function Login() {
  return (
    <>
      <div>
        <div className="card">
          <div className="card-header">Login</div>
          <div className="form">
            <form>
              <div className="Username/email">
                <input name="userName" type="text" placeholder="Enter a User Name" />
              </div>
              <div className="Password"></div>
              <div className="submit-btn">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
