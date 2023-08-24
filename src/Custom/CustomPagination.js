import {Pagination} from "@mui/material";
import {useEffect, useState} from "react";

export default function CustomPagination({data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(0);
    const itemsToShow = data?.slice(startIndex, endIndex);
    const itemsPerPage = 5;

    useEffect(() => {
        setStartIndex((currentPage - 1) * itemsPerPage);
        setEndIndex(startIndex + itemsPerPage);
        console.log(startIndex, endIndex, currentPage);
        console.log(currentPage);
        setPageCount(Math.ceil(data?.length / itemsPerPage));
    }, [currentPage, startIndex, endIndex]);
    const handlePageChange = (e, value) => {
        setCurrentPage(value);
    };
    return (
        <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}/>
    )
};