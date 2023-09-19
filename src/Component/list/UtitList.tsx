import React, {useState} from "react";
import './unitList.css'
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";

interface unitType{
    unitNames: (string | undefined)[]
    unitWoonds: (string | undefined | number)[]
    name: string
}

export default function UnitList(props: {unit: unitType}){
    const [showList, setShowList] = useState(false);

    function showUp(){
        setShowList(!showList);
    }
    
    if(!showList){
        return(
            <div>
                <div>
                    <div onClick={showUp} className='unit__show--button'> {props.unit.name} <TiArrowSortedDown/> </div>
                </div>
            </div>
        );
    }else{
        return(
            <div>
                <div>
                    <div onClick={showUp} className='unit__show--button'> {props.unit.name} <TiArrowSortedUp/> </div>
                    {props.unit.unitNames.map((nameUnit) => (
                        <div> {nameUnit} </div>
                    ))}
                </div>
            </div>
        );
    }
}

