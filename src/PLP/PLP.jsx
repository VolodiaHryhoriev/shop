import style from "./PLP.module.css"
import React, {useEffect} from 'react'
import productA from "../images/Product A.png"
import productB from "../images/Product B.png"
import productC from "../images/Product C.png"
import productD from "../images/Product D.png"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RouteConst} from "../common/RouteConst/RouteConst";

const PLP = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        document.querySelector("#productBlockA").addEventListener("click", function handleClick() {
            navigate(RouteConst.ProductAInfo)
        })
        document.querySelector("#productBlockB").addEventListener("click", function handleClick() {
            navigate(RouteConst.ProductBInfo)
        })
        document.querySelector("#productBlockC").addEventListener("click", function handleClick() {
            navigate(RouteConst.ProductCInfo)
        })
        document.querySelector("#productBlockD").addEventListener("click", function handleClick() {
            navigate(RouteConst.ProductDInfo)
        })
        document.querySelector("#productBlockA2").addEventListener("click", function handleClick() {
            navigate(RouteConst.ProductAInfo)
        })
        document.querySelector("#productBlockC2").addEventListener("click", function handleClick() {
            navigate(RouteConst.ProductCInfo)
        })
    }, [])

    return(
        <div className={style.container}>
            <div className={style.block}>
                <h1>Category name</h1>
                <div className={style.products}>
                    <div className={style.productBlock} id={"productBlockA"}>
                        <img src={productA} alt="product"/>
                        <div>
                        <p>Apollo Running Short</p>
                        <h4>$50.00</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockC"}>
                        <img src={productC} alt="product"/>
                        <div>
                        <p>Apollo Running Short</p>
                        <h4>$30.00</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockD"}>
                        <img src={productD} alt="product"/>
                        <div>
                        <p>Apollo Running Short</p>
                        <h4>$20.00</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockB"}>
                        <img src={productB} alt="product"/>
                        <div>
                        <p>Apollo Running Short</p>
                        <h4>$40.00</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockA2"}>
                        <img src={productA} alt="product"/>
                        <div>
                        <p>Apollo Running Short</p>
                        <h4>$50.00</h4>
                        </div>
                        </div>
                    <div className={style.productBlock} id={"productBlockC2"}>
                        <img src={productC} alt="product"/>
                        <div>
                        <p>Apollo Running Short</p>
                        <h4>$30.00</h4>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    )

}


export default PLP