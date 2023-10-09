import React, {useState} from "react";
import './unitList.css'
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import UnitItem from '../../chapters/unitItem/UnitItem'

interface unitType{
    unitNames: (string[])[]
    unitWoonds: (number[])[]
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
                    <div className="utit__list--wrapper">
                        {props.unit.unitNames.map((name, index) => (
                            <div>
                                {props.unit.unitWoonds[index].map((woond, id) =>(
                                    <div>
                                        <UnitItem name={name[id]} woond={woond}/>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}