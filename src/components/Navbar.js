
import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton] = useState(true);


    const closeMobileMenu=()=> setClick(false);
    const handleClick=()=> setClick(!click);

    const showButton=()=> {
        if (window.innerwidth <=960){
            setButton(false);
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize',showButton);

  return (
    <>
     <nav className='navbar'>
       <div className='navbar-container'>
        <Link to='/Home' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL<i class="ri-bar-chart-line"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'ri-arrow-up-double-fill fa-bars':'ri-arrow-down-double-fill fa-times'}/>
        </div>
        <ul className={click ? 'nav-menu active':'nav-menu'}>
            <li className='nav-item'>
                <Link className='nav-links' to='/Home' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-links' to='/Services' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-links' to='/Products' onClick={closeMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-links-mobile' to='/Sign-Up' onClick={closeMobileMenu}>
                    Sign Up
                </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
       </div>
     </nav>
    </>
  )
}

export default Navbar