import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css';
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const Home = () => {
    return(
        <>
            <Header/>
            <div id={styles.section_one}>
                <div>
                    <p>Delish - Cakes n' Chocolates</p>
                    <p id={styles.slogan}>Made with Love at Home...</p>
                </div>
            </div>
            <div id={styles.section_two}>
                <div id={styles.cakes}>
                    <Link to='/cakes'><p id={styles.cake}>Cakes</p></Link>
                </div>

                <div id={styles.chocolates}>
                    <Link to='/chocolates'><p id={styles.choco}>Chocolates</p></Link>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Home;