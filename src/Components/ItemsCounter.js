import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/esm/Button";

const ItemsCounter = (props) => {
    const [counter, setCounter] = useState(1);
    useEffect(()=>{
        props.setOrderDetails({...props.orderDetails,'Quantity':counter})
    }, [counter])
    return(
        <span>
            <Button className="minus" onClick={()=>setCounter(counter-1)}>-</Button>
            <span className="count">{counter}</span>
            <Button className="plus" onClick={()=>setCounter(counter+1)}>+</Button>

        </span>
    )
}

export default ItemsCounter;