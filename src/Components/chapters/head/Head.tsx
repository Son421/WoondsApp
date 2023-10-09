import React from "react";
import {TiHome} from "react-icons/ti";
import { NavLink } from "react-router-dom";
import './head.css'

export default function Head(){

    return(
        <div className="header__line">
            <div>
                 <NavLink to="/" className={'home--button'}> <TiHome/> </NavLink>
            </div>
        </div>
    );
}