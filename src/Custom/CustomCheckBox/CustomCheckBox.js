import {Checkbox} from "@mui/material";
import "./CustomCheckBox.css";

export default function CustomCheckBox({name, label, value, onChange, checked}) {
    return(
        <Checkbox
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            checked={checked}/>
    )
};