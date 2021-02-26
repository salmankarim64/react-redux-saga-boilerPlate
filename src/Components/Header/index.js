import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getLogin } from "../../redux/actions";
import { userData } from "../../redux/selectors/login";

export default function Header() {
  const text = "Header";
  const dispatch = useDispatch();
  const user = userData;

  useEffect(() => {
    dispatch(getLogin({ Name: "salman", Email: "salmankarim64@gmail.com" }));
  });
  return (
    <div>
      <p> {text} </p>
      <p>I am here{user}</p>
    </div>
  );
}
