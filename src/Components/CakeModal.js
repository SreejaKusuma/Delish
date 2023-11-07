import React, {useRef , useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import styles from './CakeModal.module.css';
import ItemsCounter from "./ItemsCounter";
import cartInfo from './addedToCart.json';

function CakeModal(props) {


    const itemCounter = useRef();
    const [orderDetails, setOrderDetails] = useState({
        "id": 0,
        "weight": 1,
        "flavor": "Vanilla",
        "quantity": 1,
        "customizations": ""
    })
    function saveAddToCartInfo(id){
        orderDetails.id = id;
        console.log(":::",orderDetails);
        props.onHide();

    }
    function handleOrderDetailsChange(e){
        setOrderDetails({...orderDetails, [e.target.name]:e.target.value})
    }

    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered id={"modal" + props.id}>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className={styles.heading}>
                {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span className={styles.body}>
                <img src={props.image} className={styles.cakeImage}/>
                <form className={styles.cakeForm}>
                    <table>
                        <tbody>
                        <tr>
                            <td className={styles.one}><label>Weight: </label></td>
                            <td className={styles.two}><input type="number" name="weight" id="weight" min={1} value={orderDetails.weight} onChange={handleOrderDetailsChange}/></td>
                        </tr>
                        <tr>
                            <td className={styles.one}><label>Falvor: </label></td>
                            <td className={styles.two} name="flavor" value={orderDetails.flavor} onChange={handleOrderDetailsChange}>
                                <select id="flavor">
                                <option>Vanilla</option>
                                <option>Chocolate</option>
                                <option>Strawberry</option>
                                <option>Pineapple</option>
                                <option>Mango</option>
                                <option>Mixed Fruit</option>
                                <option>Blackcurrant</option>
                                <option>Butterscotch</option>
                                <option>Red Velvet</option>
                                <option>Chocotruffle</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.one}><label>Quantity: </label></td>
                            <td><span  className={styles.itemCounter} ref={itemCounter}><ItemsCounter id={props.id} orderDetails={orderDetails} onChange={handleOrderDetailsChange} setOrderDetails={setOrderDetails}/></span></td>
                        </tr>
                        <tr className={styles.textArea}>
                            <td colSpan={2}><label>Other Customizations: </label><br/><textarea rows={4} cols={38} id="customizations" name="customizations" value={orderDetails.customiztion} onChange={handleOrderDetailsChange}></textarea></td>
                        </tr>
                        </tbody>
                    </table>
                </form>

                </span>
                <div className={styles.instr}>
                    <span>Prices might differ according to the customizations.</span><br/>
                    <span>You will be contacted about the updated price soon.</span>
                </div>
            </Modal.Body>
            <Modal.Footer className={styles.modalFooter}>
                <Button className="addCartBtn" onClick={()=> saveAddToCartInfo(props.id)}>Add to cart</Button>
                
                <Button onClick={props.onHide}>Close</Button>

            </Modal.Footer>
        </Modal>
        
    );
}

export default CakeModal;