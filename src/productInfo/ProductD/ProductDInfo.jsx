import style from "../ProductInfo.module.css"
import productD from "../../images/Product D.png"

const ProductDInfo = () => {

    return (
        <div className={style.container}>
            <div className={style.photoBlock}>
                <img src={productD} alt="img"/>
            </div>
            <div className={style.product}>
                <div className={style.productInfo}>
                    <h1>Apollo</h1>
                    <h1>Running Short</h1>
                    <h3>Price:</h3>
                    <h3>$20.00</h3>
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
                    <input className={style.orderButton} type="button" value="ORDER"/>
                </div>
            </div>
        </div>
    );
}
export default ProductDInfo;