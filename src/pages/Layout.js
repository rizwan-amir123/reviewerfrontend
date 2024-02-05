import LogoImgSrc from '../assets/logo.png';
import { Outlet } from "react-router-dom";


import '../App.css';
import Header from '../Components/Header.js'

function Layout() {
  return (
    <div className="">
      <Header src={LogoImgSrc}/>
      
      
      <Outlet />
    </div>
  );
}

export default Layout;
