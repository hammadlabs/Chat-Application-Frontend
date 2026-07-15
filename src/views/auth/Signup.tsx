export default function Signup() {
  return (
    <>
      <div>
        <div className="Title"></div>
        <div className="Form">
          <form>
            <div className="firstName">
              <input type="text" name="fName" placeholder="First Name" />
              <input type="text" name="lName" placeholder="Last Name" />
            </div>
            <div className="userName">
              <input name="userName" type="email" placeholder="Email" />
            </div>
            <div className="password">
              <input name="password" type="email" placeholder="Email" />
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
