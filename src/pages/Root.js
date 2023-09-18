import { Outlet, Link } from "react-router-dom";
export const Root = () => {
  return (
    <div>
      <h1>crad holder </h1>
      <Link to="/">Cards</Link>
      <br />
      <Link to="/addcard">Add New card</Link>
      <Outlet />
    </div>
  );
};