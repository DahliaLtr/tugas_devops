import { TodoType } from "@/types/todo";
import { Button, Checkbox } from "@nextui-org/react";
import React, { useState } from "react";
import { ActionButton } from "./ActionButton";
import LoadingBox from "./LoadingBox";
import useSWR from "swr";
import { getFetcher } from "@/libs/fetcher";
import CheckTodo from "./Check";

export interface ITodoListProps {
    onEdit?: (todo: TodoType) => void;
    onDelete?: (todo: TodoType) => void;
    onComplete?: (todo: TodoType) => void;
}

const useReadTasks = () => {
    const url = "/api/todos";

    const { data, isLoading, error, mutate } = useSWR(url, getFetcher, {
        refreshInterval: 1000,
    });

    return { tasks: data, isLoading, taskError: error, mutate };
};

const TodoList = ({ onEdit, onDelete, onComplete }: ITodoListProps) => {
    const { tasks, isLoading, taskError, mutate } = useReadTasks();

    const handleEdit = (todo: TodoType) => {
        if (onEdit) onEdit(todo);
        mutate();
    };

    const handleDelete = (todo: TodoType) => {
        if (onDelete) onDelete(todo);
        mutate();
    };

    const handleComplete = (todo: TodoType) => {
        if (onComplete) onComplete(todo);
        mutate();
    };

    return (
        <div className="relative">
            {isLoading ? (
                <LoadingBox />
            ) : taskError ? (
                <div className="">{taskError.toString()}</div>
            ) : (
                tasks?.data?.map((todo: TodoType) => (
                    <div
                        key={todo.id}
                        className="bg-white/30 backdrop-saturate-125 backdrop-blur-lg drop-shadow-sm flex justify-between items-center px-4 py-3 rounded-lg my-4"
                    >
                        <div className="text-white font-medium">
                            <CheckTodo todo={todo} onComplete={onComplete} />
                        </div>
                        <div className="flex gap-2">
                            <ActionButton
                                text="Done"
                                color="success"
                                icon={<i className="ri-check-line text-lg"></i>}
                                isIconOnly
                                onClick={() => handleComplete(todo)}
                            />
                            <ActionButton
                                text="Edit"
                                color="warning"
                                icon={
                                    <i className="ri-pencil-line text-lg"></i>
                                }
                                isIconOnly
                                onClick={() => handleEdit(todo)}
                            />
                            <ActionButton
                                text="Delete"
                                color="danger"
                                icon={
                                    <i className="ri-delete-bin-2-line text-lg"></i>
                                }
                                isIconOnly
                                onClick={() => handleDelete(todo)}
                            />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TodoList;
