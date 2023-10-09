import React from "react";
import './additionalMenu.css'
import {TiMinus, TiPlus} from "react-icons/ti";

interface propType{
    woond: number
    showAdditionalMenu: boolean
    increment: any
    decrement: any
}

export default function AdditionalMenu(props: propType){

    function plus(){
      props.increment();
    }

    function minus(){
        props.decrement();
    }
    
    if(props.showAdditionalMenu){  
        return(
            <div className="menu--wrapper">
                <TiMinus onClick={minus}/> {props.woond} <TiPlus onClick={plus}/>
            </div>
        );
    }else{
        return null;
    }
}