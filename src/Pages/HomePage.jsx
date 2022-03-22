import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h2>Welcome</h2>
      <p>Create your phone book of contacts</p>
      <p><Link to={"/register"}>Register</Link> (for new users) or <Link to={"/login"}>login</Link> to get access to your contacts.</p>
    </>
  )
};