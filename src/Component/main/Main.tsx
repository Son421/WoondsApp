import React, {useState} from "react";
import UnitList from "../list/UtitList";
import ultramarines from "../../UnitDate/ultramarines";

export default function Main(){

    return(
        <div>
            <div>
                <UnitList unit={ultramarines} />
            </div>
        </div>
    )
}