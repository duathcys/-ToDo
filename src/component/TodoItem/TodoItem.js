import React, {useEffect, useState} from 'react';
import {MdDelete, MdDone} from 'react-icons/md';
import {BIGBlock, CheckCircle, Remove, Text, TodoItemBlock} from "./style";
import {useDeleteMutation} from "../../hooks/useDeleteMutation";
import {useCheckUpdateMutation} from "../../hooks/useUpdateMutation";
import TodoModal from "../TodoModal/TodoModal";
import {DeleteOutline} from "@mui/icons-material";

TodoModal.propTypes = {};

function TodoItem(params) {
    const {mutate: onClickRemove} = useDeleteMutation();
    const {mutate: onClickUpdate} = useCheckUpdateMutation();
    const initialSortList = params?.params;
    const [sortList, setSortList] = useState(initialSortList);

    useEffect(() => {
        const sortedList = [...initialSortList].sort((a, b) => {
            if (a.dueDate < b.dueDate) {
                return -1
            } else if (a.dueDate > b.dueDate) {
                return 1;
            } else {
                return 0;
            }
        });
        setSortList(sortedList);
    }, [initialSortList]);


    return (
        <ul>
            <BIGBlock>
                <>
                        <TodoItemBlock>
                            <CheckCircle/>
                            <Text>분  류</Text>
                            <Text>할  일</Text>
                            <Text>기  한</Text>
                            <Remove><DeleteOutline/></Remove>
                            <TodoModal/>
                        </TodoItemBlock>
                    {sortList.map((Todo, idx) => {
                        return (
                            <li key={idx}>
                                <TodoItemBlock>
                                    <CheckCircle done={Todo.done} onClick={()=> onClickUpdate({id: Todo.id, done:!Todo.done})}>
                                        {Todo.done && <MdDone/>}
                                    </CheckCircle>
                                    <Text>
                                        {Todo.category}
                                    </Text>
                                    <Text done={Todo.done}>
                                        {Todo.title}
                                    </Text>
                                    <Text done={Todo.done}>
                                        {Todo.dueDate}
                                    </Text>
                                    <Remove onClick={()=>onClickRemove(Todo.id)}>
                                        <DeleteOutline/>
                                    </Remove>
                                    <TodoModal id={Todo.id} title={Todo.title} done={Todo.done} memo={Todo.memo} info={Todo.info} dueDate={Todo.dueDate} category={Todo.category}/>
                                </TodoItemBlock>
                            </li>
                        )
                    })
                    }
                </>
            </BIGBlock>
        </ul>
    );
}

export default TodoItem;