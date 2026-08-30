export default function Login() {
  return (
    <>
      <div className="h-screen bg-background relative">
        <div className="absolute flex  bg-surface top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[80%] rounded-[16px]">
          <div className="flex-1 ">
            <div className="m-10 formContainer ">
              <div>
                <h1 className="text-2xl font-bold text-primary ">Welcome</h1>
              </div>
              <div className="flex justify-center">
                <div className="w-[400px] mx-1 my-10  ">
                  {/* heading div */}
                  <div className="mb-4">
                    <h1>Login</h1>
                  </div>
                  {/* Form Div */}
                  <div className="form">
                    <form className="flex flex-col gap-4">
                      <div>
                        <input
                          className="border border-gray-200 rounded-[6px] outline-none px-2 py-3 w-full"
                          name="userName"
                          type="text"
                          placeholder="Enter a User Name"
                        />
                      </div>
                      <div>
                        <input
                          className="border border-gray-200 rounded-[6px] outline-none px-2 py-3 w-full"
                          name="password"
                          type="password"
                          placeholder="Enter a Password"
                        />
                      </div>
                      <div className="flex justify-end">
                        <a href="#" className="text-sm text-accent hover:underline">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="submit-btn">
                        <button
                          className="w-full bg-secondary rounded px-10 py-2 font-medium text-surface"
                          type="submit"
                        >
                          LOGIN
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* Other Logins */}
                  <div className="flex items-center justify-center ">
                    <hr className="my-4" />
                    <span>OR</span>
                    <hr className="my-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="m-5  rounded ">2</div>
          </div>
        </div>
      </div>
    </>
  );
}
