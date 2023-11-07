import React from 'react';
import styles from './Header.module.css';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
const Header = () =>{
    return(
        <header>
            
            <div className={styles.headerCon}>
            <div className={styles.dummy}></div>
            {/* <Cart/>
            <button className ={styles.headerBtns}><FontAwesomeIcon icon={faRightToBracket} /></button> */}
            <Link to='/signin'><button className ={styles.headerBtns}><FontAwesomeIcon icon={faUserPlus} /></button></Link>
            </div>
        </header>
    )
}
export default Header;