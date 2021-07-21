import logo from "./images/logo.gif";
import { Link } from "react-router-dom";

const Nav=()=>{

    return(
        <nav className="App">
        <div className='flex'>
            <Link to='/Frozen-World'>
            <img src={logo} className='logo' width='110px' height='100px' />
            </Link>
            <h3 className='lets'>Frozen World</h3>
            <h5 className='sub-head'>Cold Storage</h5>
        </div>
        <div className='flex_container'>
            <Link to='/Frozen-World'>
            <button className='nav_i home'>Home</button>
            </Link>
            <Link to='/contact' >
            <button className='nav_i contact'>Contact us</button>
            </Link>
            <div className='dropdown'>
            <button className='nav_i gallery'>Gallery&#x25BE; </button>
            <div class="dropdown-content">
            <Link to='/machine'>
             <a href="#">Machinery</a>
             </Link>
             <Link to='/warehouse'>
             <a href="#">Warehouse</a>
             </Link>
             </div>
             </div>
             <Link to='/about'>
             <button className='nav_i who'>Who we are</button>
             </Link>
            <button className='nav_i log'>Log in</button>
        </div>
    </nav>
    )
}

export default Nav;