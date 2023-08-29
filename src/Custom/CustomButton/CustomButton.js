import {Button} from "@mui/material";
import "./CustomButton.css";

export default function CustomButton({onClick, name}) {
    return (
        <div style={{display: "flex", alignItems: "center",
            justifyContent: "center", marginTop: "20px"}}>

            <Button onClick={onClick} style={
                {
                    color:"black",
                    fontFamily:"HakgyoansimWoojuR, sans-serif",
                    fontSize: "18px",
                    alignItems: "center",
                    justifyContent: "center",
                }
            }>
                {name}
            </Button>
        </div>

    );
};