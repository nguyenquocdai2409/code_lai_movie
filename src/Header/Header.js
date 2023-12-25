import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  let user = useSelector((state) => state.reducer.userLogin);
  let renderMenu = () => {
    if (user) {
      return (
        <>
          <span
          style={{cursor: 'pointer'}}
          onClick={() => { navigate('/account') }}
          className=" font-medium text-dark hover:text-orange-500">{user.hoTen}</span>
          <button
            onClick={() => {
              window.location.href = "/login";
              localStorage.removeItem("USER_LOGIN");
            }}
            className=" btn-theme hover:text-orange-500"
          >
            Sign out
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="btn-theme"
          >
            Sign in
          </button>
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className="btn-theme"
          >
            Sign up
          </button>
        </>
      );
    }
  };
  return (
    <div>
      <div className="flex justify-between shadow-md space-y-8 items-center ">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="text-red-500 font-medium ml-10"
          style={{ fontSize: "30px", cursor: "pointer" }}
        >
          CyberFlix
        </span>
        <div className="mr-16 mb-8 space-x-5">{renderMenu()}</div>
      </div>
    </div>
  );
}
