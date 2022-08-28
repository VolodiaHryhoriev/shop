import style from "./Cart.module.css"
import {useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

const Cart = () => {
    const product = useSelector(state => state.productReducer.cart)
    const ref = useRef();


        const res = product.reduce((o, i) => {
            if (!o.find(v => v.id === i.id)) {
                o.push(i);
            }
            let arr = o.filter(item => item.qty !== 0);
            return arr;
        }, []);

    let countArr = [];
    res.map(item=>countArr.push(item.qty))
    let qty = countArr.reduce((acc, num) => acc + num, 0);
    const [count, setCount] = useState(qty);
    let [price, setPrice] = useState(res.reduce((a, c) => a + parseInt(c.price.substring(1))* c.qty, 0))

    const riseCount = (event) => {
        let current = res.filter(c=>c.id === parseInt(event.target.parentNode.parentNode.parentNode.parentNode.id) )
        current[0].qty++;
        setCount(count+1);
        setPrice(price + parseInt(current[0].price.substring(1)))
    }

    const decreaseCount = (event) => {
        let current = res.filter(c=>c.id === parseInt(event.target.parentNode.parentNode.parentNode.parentNode.id) )
        current[0].qty--;
        setCount(count-1);
        setPrice(price-parseInt(current[0].price.substring(1)))
    }




    return (
        <div className={style.container}>
            <div className={style.cartContent}>
            <h1>Cart</h1>
            <hr/>
                {res.length === 0 && <div>Cart is empty</div>}
                {res.map((item) => (
                    <div ref={ref} key={item.id} id={item.id}>
                   <div className={style.product}>
                   <div className={style.productInfo}>
                   <h1>{item.name}</h1>
                   <h3>{item.price}</h3>
                   <h5>SIZE:</h5>
                   <div className={style.sizePanel}>
                   <input type="button" value="S" className={style.sizeButton}/>
                   <input type="button" value="M" className={style.sizeButton}/>
                   <input type="button" value="L" className={style.sizeButton}/>
                   <input type="button" value="XL" className={style.sizeButton}/>
                   </div>
                   <h5>COLOR:</h5>
                   <div className={style.colorChoice}>
                   <div className={style.inputColor1}><input type="button" /></div>
                   <div className={style.inputColor2}><input type="button" /></div>
                   <div className={style.inputColor3}><input type="button" /></div>
                   </div>
                   </div>
                   <div className={style.productImage}>
                   <div className={style.imageCounter}>
                   <button onClick={riseCount}>+</button>
                   <p id={"count"}>{item.qty}</p>
                   <button onClick={decreaseCount}>-</button>
                   </div>
                   <img src={item.image} alt="productA"/>
                   </div>
                   </div>
                    <hr></hr>
                    </div>
                   ))
               }
                {res.length > 0 && <div className={style.orderInfo}>
                    <h3>Quantity: {count}</h3>
                    <h3>Total: ${price}</h3>
                    <input type="button" value="ORDER"/>
                </div> }
            </div>
        </div>
    )
}

export default Cart;