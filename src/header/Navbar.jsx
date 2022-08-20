import style from "./navbar.module.css"
import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCode, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {RouteConst} from "../common/RouteConst/RouteConst";
const Navbar = () => {
       return(
           <div className={style.container}>
            <nav>
                <div className={style.leftNav}>
                <ul>
                    <li>Woman</li>
                    <li>Man</li>
                    <li>Kids</li>
                </ul>
                </div>
                <div className={style.logoNav}>
                    <FontAwesomeIcon className={style.cartIcon} icon={faCode} />
                </div>
                <div className={style.rightNav}>
                       <Link className={style.cartNav} to={RouteConst.Cart}><FontAwesomeIcon className={style.cartIcon} icon={faCartShopping} /></Link>
                </div>
            </nav>
        </div>
       )
}

export default Navbar;