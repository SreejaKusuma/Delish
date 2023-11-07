import React from "react";
import './Chocolates.css';
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleLeft} from '@fortawesome/free-regular-svg-icons';
import { useEffect } from "react";


const Chocolates = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
    return (
        <>
            <div id="chsection_one">
            <Link to='/' className="chGoBack"><FontAwesomeIcon icon={faCircleLeft} className="chGoBackIcon" /></Link>
            <p id="heading">Chocolates</p>
            <p className="dummy"></p>
            </div>
            <select id="filter">
                <option>All</option>
                <option>Dark Chocolate</option>
                <option>White Chocolate</option>
                <option>Almond Chocolate</option>
                <option>Dry Fruit Chocolate</option>
                <option>Customised Chocolates</option>
                <option>Assorted Chacolates</option>
                <option>Chocolate Bars</option>
                <option>Designer Chocolates</option>
            </select>
            
            <input id="searchbox" type="search" placeholder=" Search Chocolates"/>

            <div id="clear"></div>

            <div class="choco">
                <img class="imgchoco"src= "" />
                <br/>
                <span class="content">
                    Chocolates
                </span>
            </div>
        </>
    )
}

export default Chocolates;