import React, { useState ,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLeaf, faSun, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button';
import './Navbar.css'

export const Navbar = () => {

    const [click,setClick]=useState(false)
    const[button,setbutton]=useState(true)

    const handleclick =()=>{
        setClick(!click)

    }

    const closeMobileMenu=()=>{
        setClick(false)
    }

    const showButton=()=>{
        if(window.innerWidth<=960){
            setbutton(false)
        }else{
            setbutton(true)
        }
    }

    useEffect(() => {
        showButton();
    
        const handleResize = () => {
            showButton();
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    

  return (
    <div className="navbar">
        <div className="navbar-container">
            <Link to="/" className='navbar-logo'>
            <FontAwesomeIcon icon={faSun} className='faSun'/> ADVENTURE
            </Link>

            <div className="menu-icon" onClick={handleclick}>
                <FontAwesomeIcon className ={click ? 'faTimes' : 'faBars'} icon={click ? faTimes:faBars} />
            </div>

                <ul className={click ? 'nav-menu active':'nav-menu'}>

                        <li className='nav-item'>
                            <Link to="/home" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/arks" className='nav-links' onClick={closeMobileMenu}>Arks</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/about" className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>

                        <li className='nav-item' >
                            <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>

                </ul>

                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} 
        </div>
    </div>
  )
}
