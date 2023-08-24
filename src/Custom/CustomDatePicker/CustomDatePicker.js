import DatePicker from "react-datepicker";
import "./CustomDatePicker.css";
export default function CustomDatePicker({selected, onChange}) {
    return (
        <div style={{display:"flex"}}>
            <DatePicker selected={selected} onChange={onChange}/>
        </div>
    )
};