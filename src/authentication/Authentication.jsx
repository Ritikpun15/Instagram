import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login")
  }

  return (
    <>
      <div className="w-full flex justify-center items-center">
        {/* LEFT */}
        <div className="w-3/2">
          <img
            src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png"
            width={420}
          />
        </div>
        {/* Right */}
        <div className="flex flex-col items-center justify-center p-3">
          <div>
            {
              active === "login" ? (<Login />) : (<Signup />)
            }
            </div>
          <div className="text-xs border w-80 text-center py-4 mt-3">
            <span>
              {active === "login" ? (
                (<>
                  Don't have an account?
                  <button className="text-sky-500 font-medium ml-2"
                  onClick={handleChange}>
                    {" "}
                    Sign up
                  </button>
                </>)
              ) : (
                (<>
                  Have an account?
                  <button className="text-sky-500 font-medium ml-2"
                  onClick={handleChange}>
                    Log in
                  </button>
                </>)
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
