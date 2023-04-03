import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  // const handleSubmit = (e)=>{
  //   e.preventDefault();
  //   localStorage.setItem("user",JSON.stringify(input));
  // } 

  // useEffect = () => {
  //    const data = { name, email, password };
  //    localStorage.setItem("name", JSON.stringify (data) );
  //    localStorage.setItem("email",  JSON.stringify (data));
  //    localStorage.setItem("password", JSON.stringify (data));

  // };

  const handleSubmit = () => {
    console.log({name,email,password})
    localStorage.setItem("result", JSON.stringify({name,email,password}));
    // console.log(data);
  };

  // let a = JSON.parse(localStorage.getItem("data"));
  // console.log("a-----", a);

  // const navigate = useNavigate();
  // const data = localStorage.getItem("data");
  // const handleSubmit = (e) => {
  //   axios
  //     .post("https://reqres.in/api/register", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       localStorage.setItem("data", JSON.stringify(res.data));
  //       if (data) {
  //         navigate("");
  //       } else {
  //         console.log("check your localstorage");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   e.preventDefault();
  //   console.log();
  // };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-purple-600">HELLO DEV</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value )
                    }
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={(e) =>
                      setEmail(e.target.value )
                    }
                    value={email}
                    type="email"
                    name="email"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    value={password}
                    type="password"
                    name="password"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              {/* <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={(e) => confirmsetPassword(e.target.value)}
                    type="password"
                    name="password_confirmation"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div> */}
              <div className="flex items-center justify-end mt-4">
                <a
                  className="text-sm text-gray-600 underline hover:text-gray-900"
                  href="#"
                >
                  Already registered?
                </a>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
