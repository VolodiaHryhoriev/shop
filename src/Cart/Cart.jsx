import style from "./Cart.module.css"
import productA from "../images/Product A.png";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import productReducer from "../redux/reducer";


const Cart = () => {
    const [count, setCount] = useState(1);
    const product = useSelector(state => state.productReducer.cart);
    const dispatch = useDispatch();
    // const getInfoThunk = () => dispatch(getInfo())

    // useEffect(() => {
        // getInfoThunk();

    // }, [cartItems?])

        const res = product.reduce((o, i) => {
            if (!o.find(v => v.id == i.id)) {
                o.push(i);
            }
            return o;
        }, []);

    const riseCount = () => {
        setCount(count+1);
    }
    const decreaseCount = () => {
        if (count <= 1) {
            return count
        } else {
            setCount(count-1);
        }
    }


    return (
        <div className={style.container}>
            <div className={style.cartContent}>
            <h1>Cart</h1>
            <hr/>
                {res.length === 0 && <div>Cart is empty</div>}
                { res.map((item) => (
                   <div key={item.id} className={style.product}>
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
                   <p>{count}</p>
                   <button onClick={decreaseCount}>-</button>
                   </div>
                   <img src={item.image} alt="productA"/>
                   </div>
                   </div>
                   ))
               }
                <hr/>
                <div className={style.orderInfo}>
                    <h3>Quantity</h3>
                    <h3>Total:</h3>
                    <input type="button" value="ORDER"/>
                </div>
            </div>
        </div>
    )
}

export default Cart;