import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {useCreateCategoryMutation} from "../../hooks/useCreateMutation";
import {useGetCategoryQuery} from "../../hooks/useGetCategoryQuery";
import {TodoListBlock} from "../common";
import * as PropTypes from "prop-types";

function DataGrid(props) {
    return null;
}

DataGrid.propTypes = {
    initialState: PropTypes.shape({
        pagination: PropTypes.shape({
            paginationModel: PropTypes.shape({
                pageSize: PropTypes.number,
                page: PropTypes.number
            })
        })
    }),
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    columns: PropTypes.any,
    checkboxSelection: PropTypes.bool,
    rows: PropTypes.any
};
export default function TodoCategory() {
    const { mutate: onCreateCategory } = useCreateCategoryMutation();
    const [category, setCategory] = useState("");
    const {data:categoryList} = useGetCategoryQuery();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selection, setSelection] = useState([]);

    const onChangePage = (e, newPage)=>{
        setPage(newPage)
    }
    const onChangeRowsPerPage = (e)=>{
        setRowsPerPage(+e.target.value);
        setPage(0);
    }

    const categoryColumns = [
        {
            id:'id',
            label:'ID',
            minWidth: 200,
        },
        {
            id:'name',
            label:'카테고리명',
            minWidth: 200,
        },
    ]

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const onCreate = () => {
        onCreateCategory({name: category});
        setCategory('');
    }
    const onSelect = (e) => {
        setSelection(categoryList?.data.filter((cat) => cat.id === e.target.id));
        console.log('selection', selection);
    };

    return (
        <>
            <TodoListBlock>
                <h2>카테고리 편집</h2>
                <Paper sx={{width:"500px", overflow:"hidden", backgroundColor: "transparent",borderShadow:"none", outLine:"none" }} style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>
                    <TableContainer sx={{maxHeight:440}} style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>
                        <Table stickyHeader aria-label="sticky table"  style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>
                            <TableHead>
                                <TableRow style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>
                                    <TableCell key="id" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>ID</TableCell>
                                    <TableCell key="name" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>카테고리명</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>
                                {categoryList?.data.slice(page * rowsPerPage, page* rowsPerPage + rowsPerPage) .map((category)=>{
                                    return (
                                        <TableRow id={category.id} onClick={onSelect}>
                                            <TableCell id={category.id} key="id" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>{category.id}</TableCell>
                                            <TableCell id={category.id} key="name" style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}>{category.name}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={categoryList?.data.length}
                        page={page}
                        onPageChange={onChangePage}
                        onRowsPerPageChange={onChangeRowsPerPage}
                        rowsPerPage={rowsPerPage}
                        style={{fontFamily:"HakgyoansimWoojuR, sans-serif"}}/>
                </Paper>
            </TodoListBlock>
            {/*<TodoListBlock>*/}
            {/*    <>*/}
            {/*        <h2>카테고리</h2>*/}
            {/*        <h2>이름 : </h2>*/}
            {/*    </>*/}
            {/*</TodoListBlock>*/}
        </>
    );
};