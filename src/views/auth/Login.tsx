export default function Login() {
  return (
    <>
      <div className="items-center justify-center h-screen bg-[#00C8B3]">
        <div>
          <h1>hello</h1>
        </div>

        <div className="p-10 rounded-[16px] bg-[#FFFFFF]">
          <div className="card-header">
            <h1 className="font-bold text-center p-5">Login</h1>
          </div>
          <div className="form">
            <form>
              <div className="Username/email">
                <label>Username or Email</label>
                <div>
                  <input name="userName" type="text" placeholder="Enter a User Name" />
                </div>
              </div>
              <div className="">
                <label className="block">Password</label>
                <input name="password" type="password" placeholder="Enter a Password" />
              </div>
              <div className="submit-btn">
                <button className="w-full btn-secondary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
