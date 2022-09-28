import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice";

// Import the NavLink component.
import { NavLink } from "react-router-dom";

export default function Header() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logOut());
  };

  // Replace the 4 <a> tags with <NavLink> components
  return (
    <div className="header">
      <NavLink to="/about">درباره</NavLink>
      <NavLink to="/articles">مقالات</NavLink>
      <NavLink to="/categories">طبقه بندی</NavLink>
      {currentUser.username ? (
        <>
          <NavLink to="/شخص">شخص</NavLink>
          <button onClick={handleLogout} className="logout">
            {" "}
            خروج{" "}
          </button>
        </>
      ) : (
        <NavLink to="/sign-up">ثبت نام</NavLink>
      )}
    </div>
  );
}
