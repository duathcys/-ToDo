import {IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./CustomSearch.css";
export default function CustomSearch({label, onChange, onClick}){
    return(
        <div className="search-style">
            <TextField
                variant="standard"
                label={label}
                onChange={onChange}
            sx={{width:600, marginLeft: "50px"}}/>
            <IconButton onClick={onClick}>
                <SearchIcon/>
            </IconButton>
        </div>
    )
}