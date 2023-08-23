import {Button} from "@mui/material";
import "./CustomButton.css";

export default function CustomButton({onClick, name}) {
    return (
        <Button onClick={onClick} style={
            {
                color:"black",
                fontFamily:"HakgyoansimWoojuR, sans-serif",
                fontSize: "18px",
            }
        }>
            {name}
        </Button>
    );
};