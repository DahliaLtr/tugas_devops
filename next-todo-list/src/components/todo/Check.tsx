import { TodoType } from "@/types/todo";
import { Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ITodoProps {
    todo: TodoType;
    onComplete?: (todo: TodoType) => void;
}

const CheckTodo = ({ todo, onComplete }: ITodoProps) => {
    const [todoState, setTodoState] = useState<TodoType>(todo);
    const [ch, setCh] = useState(false);
    useEffect(() => {
        setTodoState(todo);
        console.log(todo);
    }, [todo]);

    return (
        <Checkbox
            radius="sm"
            color="success"
            lineThrough
            isSelected={todoState.isComplete == 1}
            value={todoState.id.toString()}
            classNames={{
                label: "ml-2 text-white before:bg-gray-500 ",
                icon: "text-white",
            }}
            onChange={() => {
                if (onComplete) onComplete(todoState);
                setTodoState({
                    ...todoState,
                    isComplete: todoState.isComplete == 1 ? 0 : 1,
                });
            }}
        >
            {todoState.task}
        </Checkbox>
    );
};

export default CheckTodo;
