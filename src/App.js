import './App.css';
import React from "react"
import PLP from "./PLP/PLP"
import Navbar from "./header/Navbar";
import Cart from "./Cart/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { RouteConst } from "./common/RouteConst/RouteConst";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductAInfo from "./productInfo/ProductA/ProductAInfo";
import ProductBInfo from "./productInfo/ProductB/ProductBInfo";
import ProductCInfo from "./productInfo/ProductC/ProductCInfo";
import ProductDInfo from "./productInfo/ProductD/ProductDInfo";

const App = () => {
        return (
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path={RouteConst.PLP} element={<PLP />} />
                    <Route path={RouteConst.Cart} element={<Cart />} />
                    <Route path={RouteConst.ProductAInfo} element={<ProductAInfo />} />
                    <Route path={RouteConst.ProductBInfo} element={<ProductBInfo />} />
                    <Route path={RouteConst.ProductCInfo} element={<ProductCInfo />} />
                    <Route path={RouteConst.ProductDInfo} element={<ProductDInfo />} />


                    {/*<Route path={RouteConst.NOT_FOUND_PAGE} element={<NotFoundPage />} />*/}




                    {/*<Route path="*" element={<Navigate to={RouteConst.NOT_FOUND_PAGE} />} />*/}
                </Routes>
            </div>
    )
}

const AppContainer = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

export default AppContainer;
