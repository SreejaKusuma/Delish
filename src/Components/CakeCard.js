import React from "react";
import CakeModal from "./CakeModal";


const CakeCard = (props) =>{

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <div className="cakes" onClick={() => setModalShow(true)}>
            <img src={props.image} alt={props.name} className="imgcake"/>
            <div className="content">
                <div className="name">
                {props.name}
                </div>
                <div className="info">
                <p>&#8377;&nbsp;{props.price}/{props.weight}Kg</p>
                {/* <p>Flavor: {props.flavor}</p>
                <p>Weight: {props.weight}Kg</p> */}
                </div>
            </div>
        </div>

        <CakeModal id = {props.id} name={props.name} image= {props.image} price={props.price} flavor={props.flavor} weight={props.weight} show={modalShow} onHide={() => setModalShow(false)} />
        
      </>
    )
}



export default CakeCard;