import style from "../ProductInfo.module.css"
import productD from "../../images/Product D.png"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {actionInfo} from "../../redux/action";

const ProductDInfo = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer.product);

    const navToCart = (event) => {
        dispatch(actionInfo.setCart(product));
        event.currentTarget.disabled = true;
    }

    return (
        <div className={style.container}>
            <div className={style.photoBlock}>
                <img src={product.image} alt="img"/>
            </div>
            <div className={style.product}>
                <div className={style.productInfo}>
                    <h1 id={"name"}>{product.name}</h1>
                    <h3>Price:</h3>
                    <h3 id={"price"}>{product.price}</h3>
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
                    <input className={style.orderButton} type="button" value="ORDER" id={"order"} onClick={navToCart}/>
                </div>
            </div>
        </div>
    );
}
export default ProductDInfo;