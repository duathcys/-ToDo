import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import "./CustomSelect.css";
export default function CustomSelect({inputLabel, placeholder, id, label, onChange, value, data}){
    return (
        <FormControl sx={{width:500, height:50}}>
            <InputLabel>{inputLabel}</InputLabel>
            <Select
                className="select"
                placeholder={placeholder}
                id={id}
                label={label}
                onChange={onChange}
                value={value}>
                {data?.map((value)=>{
                    return <MenuItem value={value.name}>
                        {value.name}
                    </MenuItem>
                })}
            </Select>
        </FormControl>
    );
}