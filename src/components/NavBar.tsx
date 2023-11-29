import { NavLink } from "react-router-dom";

interface Props {
  routes: {
    title: string;
    path: string;
    element: any;
  }[];
}

export default function NavBar({ routes }: Props) {
  return (
    <header className="App-header">
      {/* 
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink> 
      */}
      {(routes || []).map(({ title, path }) => (
        <NavLink key={path} to={path}>
          {title}
        </NavLink>
      ))}
    </header>
  );
}
