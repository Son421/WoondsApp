import React from "react";
import {TiHome} from "react-icons/ti";
import './head.css'
import {showHistory} from "../../features/navigationSlice";
import {useAppDispatch} from "../../hooks";

export default function Head(){
    const dispatch = useAppDispatch();

    return(
        <div className="header__line">
            <div>
                <TiHome onClick={() => dispatch(showHistory())} className="home--button"/>
            </div>
        </div>
    );
}