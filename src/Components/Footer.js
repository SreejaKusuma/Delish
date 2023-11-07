import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer>
            <div className="footerH">Contact Us</div>
            <div className="linksH">
            <Link to="https://wa.me/918939174600"><span className="links"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</span></Link>
            <Link to="https://www.instagram.com/delish_cakesnchocolates/"><span className="links"><FontAwesomeIcon icon={faInstagram} /> Instagram</span></Link>
            </div>
        </footer>
    )
}

export default Footer;