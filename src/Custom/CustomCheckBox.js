import {CheckBox} from "@mui/icons-material";
import "./CustomCheckBox.css";
export default function CustomCheckBox({name, label, value, onChange, checked}) {
    return(
        <CheckBox
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            checked={checked}/>
    )
};