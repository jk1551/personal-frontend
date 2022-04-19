import logo from './logo.svg';
import './App.scss';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
        <Outlet />
    </div>
  );
}
