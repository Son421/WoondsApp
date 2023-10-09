import React, {useState} from "react";
import './form.css'

export default function HistorytList(){

    return(
        <div>
            <form className="form--wrapper">
                <span className="from--text"> Import the army below </span>
                <textarea name="unitInfo" className="form"></textarea>
                <div className="form--button"> Send </div>
            </form>
        </div>
    )
}