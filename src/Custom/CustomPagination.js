import {Pagination} from "@mui/material";
import "./CustomPagination.css";

export default function CustomPagination({count, page, onChange}) {

    return (
        <Pagination
            count={count}
            page={page}
            onChange={onChange}/>
    )
};