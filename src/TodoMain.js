import {Title, TodoInputbox} from "./component/common";

function TodoMain({children}) {

    return (
        <div>
            <>
                <Title>WELCOME</Title>
                <TodoInputbox>{children}</TodoInputbox>
            </>
        </div>
    )
}