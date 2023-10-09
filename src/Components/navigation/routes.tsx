import { Route, Routes } from "react-router-dom";
import Form from "../pages/form/Form";
import HistorytList from "../pages/historyList/HistorytList";
import UnitList from "../pages/unitList/UnitList";
import ultramarines from "../../UnitDate/ultramarines";

export default () => (
    <Routes>
        <Route path="/" element={<HistorytList/>} />
        <Route path="/fraction" element={<UnitList unit={ultramarines}/>} />
        <Route path="/form" element={<Form/>} />
    </Routes>
);