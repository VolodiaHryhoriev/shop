import style from "./PLP.module.css"
import React, {useEffect} from 'react'
import productA from "../images/Product A.png"
import productB from "../images/Product B.png"
import productC from "../images/Product C.png"
import productD from "../images/Product D.png"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RouteConst} from "../common/RouteConst/RouteConst";
import {actionInfo} from "../redux/action";

const PLP = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const obj = {
        productA: {
            id: 1,
            name: "Product A",
            price: "$50.00",
            image: productA
        },
        productB: {
            id: 2,
            name: "Product B",
            price: "$40.00",
            image: productB
        },
        productC: {
            id: 3,
            name: "Product C",
            price: "$30.00",
            image: productC
        },
        productD: {
            id: 4,
            name: "Product D",
            price: "$20.00",
            image: productD
        }
    }

    useEffect(() => {
        document.querySelector("#productBlockA").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productA))
            navigate(RouteConst.ProductAInfo)
        })
        document.querySelector("#productBlockB").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productB));
            navigate(RouteConst.ProductBInfo)
        })
        document.querySelector("#productBlockC").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productC));
            navigate(RouteConst.ProductCInfo)
        })
        document.querySelector("#productBlockD").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productD));
            navigate(RouteConst.ProductDInfo)
        })
        document.querySelector("#productBlockA2").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productA));
            navigate(RouteConst.ProductAInfo)
        })
        document.querySelector("#productBlockC2").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productC));
            navigate(RouteConst.ProductCInfo)
        })
    }, [])

    return(
        <div className={style.container}>
            <div className={style.block}>
                <h1>Category name</h1>
                <div className={style.products}>
                    <div className={style.productBlock} id={"productBlockA"}>
                        <img src={obj.productA.image} alt="product"/>
                        <div>
                            <p>{obj.productA.name}</p>
                            <h4>{obj.productA.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockC"}>
                        <img src={obj.productC.image} alt="product"/>
                        <div>
                            <p>{obj.productC.name}</p>
                            <h4>{obj.productC.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockD"}>
                        <img src={obj.productD.image} alt="product"/>
                        <div>
                            <p>{obj.productD.name}</p>
                            <h4>{obj.productD.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockB"}>
                        <img src={obj.productB.image} alt="product"/>
                        <div>
                            <p>{obj.productB.name}</p>
                            <h4>{obj.productB.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockA2"}>
                        <img src={obj.productA.image} alt="product"/>
                        <div>
                            <p>{obj.productA.name}</p>
                            <h4>{obj.productA.price}</h4>
                        </div>
                        </div>
                    <div className={style.productBlock} id={"productBlockC2"}>
                        <img src={obj.productC.image} alt="product"/>
                        <div>
                            <p>{obj.productC.name}</p>
                            <h4>{obj.productC.price}</h4>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    )

}


export default PLP