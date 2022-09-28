import React, { useState } from "react";
import { editUser } from "../features/session/sessionSlice";
import { useDispatch } from "react-redux";

export default function EditProfileForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ username: username }));
  };

  return (
    <section>
      <h2>ویرایش نام کاربری</h2>
      <form onSubmit={handleSubmit}>
        <label>
          نام کاربری
          <div>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
            <button className="primary">ویرایش</button>
          </div>
        </label>
      </form>
    </section>
  );
}
