import React, {useState} from "react";
import './unitItem.css'
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import AdditionalMenu from "../additionalMenu/AdditionalMenu";

interface woondsType{
    woond: number
    name: string
}

export default function UnitItem(props: woondsType){
    const [showAdditionalMenu, setShowAdditionalMenu] = useState(false);

    const [woond, setWoond] = useState(props.woond);

    const constaintWoond = props.woond;

    function showUp(){
        setShowAdditionalMenu(!showAdditionalMenu);
    }

    function increment(){
        if(woond !== constaintWoond){
            setWoond(woond + 1);
        }
    }

    function decrement(){
        if(woond !== 0){
            setWoond(woond - 1);
        }
    }

    return(
        <div>
            <div>
                <div className="unit--wrapper">
                    <div>
                        {props.name}
                    </div>
                    <div>
                        {woond}
                        <TiArrowSortedDown onClick={showUp} className="button--wrapper"/> 
                    </div>
                </div>
                <AdditionalMenu woond={woond}  increment={increment} decrement={decrement} showAdditionalMenu={showAdditionalMenu}/> 
            </div>
        </div>
    )
}