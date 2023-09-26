import React, {useState} from "react";
import './historyList.css'
import {TiArrowSortedDown, TiPlus} from "react-icons/ti";
import ultramarines from "../../UnitDate/ultramarines";

export default function HistorytList(){

    return(
        <div>
            <div className="history--wrapper">
                <div className="history">
                    <span> History </span> 
                    <div> <TiArrowSortedDown/> </div> 
                </div>
            </div>
            <div>
                <div className="fraction--button"> {ultramarines.name} </div>
                <div>
                    <div className="new__list--button"> 
                        <TiPlus/>
                    </div>
                </div>
            </div>
        </div>
    )
}