import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import "./CustomSelect.css";
export default function CustomSelect({inputLabel, placeholder, id, label, onChange, value, data, view}){
    return (
        <FormControl>
            <InputLabel>{inputLabel}</InputLabel>
            {view? (
                    <Select
                        placeholder={placeholder}
                        id={id}
                        label={label}
                        onChange={onChange}
                        value={value}>
                        <MenuItem value={view}>{view}</MenuItem>
                        {data?.map((value)=>{
                            return <MenuItem value={value.name}>
                                {value.name}
                            </MenuItem>
                        })} </Select>
                )
                : (
                    <Select placeholder={placeholder}
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
                )
            }
        </FormControl>
    );
}