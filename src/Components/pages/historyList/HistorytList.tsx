import React, {useState} from "react";
import './historyList.css'
import {TiPlus} from "react-icons/ti";
import ultramarines from "../../../UnitDate/ultramarines";
import { NavLink } from "react-router-dom";

export default function HistorytList(){

    return(
        <div>
            <div className="history--wrapper">
                <div className="history">
                    <span> History </span> 
                </div>
            </div>
            <div>
                <NavLink to="/fraction" className={'button'}> <div className="fraction--button"> {ultramarines.name} </div> </NavLink>
                <div>
                    <NavLink to="/form" className={'button'}> <div className="new__list--button"> <TiPlus/> </div> </NavLink>
                </div>
            </div>
        </div>
    )
}