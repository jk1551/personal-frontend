import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div>
      <Header />
      </div>
        <Outlet />
        <div>
      <Footer />
      </div>
    </div>
  );
}
