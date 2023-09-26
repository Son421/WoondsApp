import React, {useState} from "react";
import HistorytList from "../list/HistorytList";
import {navigation} from "../../features/navigationSlice";
import {useAppSelector} from "../../hooks";
import UnitList from "../list/UnitList";
import ultramarines from "../../UnitDate/ultramarines";

export default function Main(){
    const value = useAppSelector(navigation);

    if(value == 'history'){
        return(
            <div>
                <HistorytList/>
            </div>
        )
    }else if(value == 'list'){
        return(
            <div>
               <UnitList unit={ultramarines}/>
            </div>
        )
    }else{
        return(
            <div>
                
            </div>
        )
    }
}