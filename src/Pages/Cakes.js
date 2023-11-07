import React from "react";
import { Link } from "react-router-dom";
import './Cakes.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleLeft} from '@fortawesome/free-regular-svg-icons';
import CakeCard from "../Components/CakeCard";
import { useEffect, useState} from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const Cakes= ()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
        function fetchCakesList(){
            return new Promise((resolve, reject)=>{
                var req = new XMLHttpRequest();
                req.open("GET", "http://localhost:8080/cakeslist");
                req.setRequestHeader("Content-type", "application/json");
                req.send();
                req.onreadystatechange = function(){
                    if(req.readyState===4){
                        if(req.status===200){
                            // console.log("response",JSON.parse(req.responseText))
                            resolve(JSON.parse(req.responseText));
                        }
                        else{
                            reject(req.readyState);
                        }
                    }
                }
            })
        }
        fetchCakesList().then((data)=>{
            setCakeslist(JSON.parse(data));
        }).catch(err=>console.log(err));
    }, []);    

    const [cakeslist, setCakeslist] = useState([]);

    return(
        <div>
        <Header/>
        <div id="csection_one">
            <Link to='/' className="goBack"><FontAwesomeIcon icon={faCircleLeft} className="goBackIcon" /></Link>
            <p id="heading">Cakes</p>
            <p className="dummy"></p>
        </div>

        <div className="repeat">
            <div className="marquee">
                <span>Cakes can be customized</span>
                <span>Cakes can be customized</span>
                <span>Cakes can be customized</span>
                <span>Cakes can be customized</span>
                
            </div>
        </div>

        <div id="cakesSection">

            {cakeslist.map((cake)=> (<CakeCard id = {cake.id} name = {cake.name} image = {cake.image} price = {cake.price} flavor = {cake.flavor} weight = {cake.weight}/>))}
            

        </div>
        <Footer/>
        </div>
       
    )
}

export default Cakes;