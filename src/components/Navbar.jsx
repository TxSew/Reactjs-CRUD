import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [User, SetUser] = useState("");
  useEffect(() => {
    const UserKey = JSON.parse(localStorage.getItem("token"));
  
    
    if(UserKey) {
      SetUser(UserKey.user.name);
    }
   
  }, [])
  


  return (
    <div className="shadow-lg backdrop-blur-lg py-5 px-5 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <div>
        <ul className="list-none flex justify-center items-center ml-auto gap-5">
          <li>
            <p className="hover:text-blue-500">
              <NavLink to="/">Home</NavLink>
            </p>
          </li>
          <li>
            <p className="hover:text-blue-500">
              <NavLink to="/">About</NavLink>
            </p>
          </li>
          <li>
            <p className="hover:text-blue-500">
              <NavLink to="/">Contact</NavLink>
            </p>
          </li>
     
        </ul>
        </div>
        <ul className="list-none flex justify-center items-center ml-auto gap-5">
      
          {User ? (
            <li className="flex gap-2">
              <p className="hover:text-blue-500">
                <NavLink to={'/admin'}>{User}</NavLink>
              </p>
              <p>/</p>
              <p className="hover:text-blue-500">
                <span
                  onClick={() => {
                    localStorage.clear();
                    SetUser('')
                  }}
                >
                  Logout
                </span>
              </p>
            </li>
          ) : (
            <li className="flex gap-2">
              <p className="hover:text-blue-500">
                <NavLink to="/login">Login</NavLink>
              </p>
              <p>/</p>
              <p className="hover:text-blue-500">
                <NavLink to="/register">Register</NavLink>
              </p>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
