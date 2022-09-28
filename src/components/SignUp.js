import React, { useState } from "react";
import { signUp } from "../features/session/sessionSlice";
import { useDispatch } from "react-redux";
// import useHistory
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  // Grab the history object
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp({ username: username }));
    // imperatively redirect the user to /profile
    history.push("/profile");
  };

  return (
    <section>
      <h1>ثبت نام</h1>
      <form onSubmit={handleSubmit}>
        <label>
          اسم کاربر
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button type="submit" className="primary">
              ثبت نام
            </button>
          </div>
        </label>
      </form>
    </section>
  );
}
