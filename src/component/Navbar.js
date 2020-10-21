import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
function Navbar(){
    const [click,setCLick] = useState(false)
    const [button,setButton] = useState(true)
    const closeMobileMenu = ()=>{
        setCLick(false)
    }
    const showBtn = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showBtn();
    },[])
    window.addEventListener('resize',showBtn)
    return (
        <div>
            <nav className="navbar">
                <div className = "navbar-container">
                    <Link to = "/" className="navbar-logo"onClick={closeMobileMenu}>
                        <i className = "fab fa-typo3"/>
                    </Link>
                    <div className = "menu-icon" onClick = {()=>setCLick(!click)}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className = {click ? 'nav-menu active':'nav-menu'}>
                         <li className='nav-item'>
                             <Link to = '/' className = 'nav-links' onClick={closeMobileMenu}>
                                     Home
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to = '/service' className = 'nav-links' onClick={closeMobileMenu}>
                                     Service
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to = '/products' className = 'nav-links' onClick={closeMobileMenu}>
                                     Products
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to = '/sign-up' className = 'nav-links-mobile ' onClick={closeMobileMenu}>
                                     Sign Up
                             </Link>
                         </li>
                    </ul>
                    {button && <Button buttonSTyle = 'btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;