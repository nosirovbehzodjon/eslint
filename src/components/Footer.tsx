import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="App-footer">
      <div className="container flex justify-between">
        <NavLink to="/about">About</NavLink>&nbsp;|&nbsp;
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </footer>
  );
}
