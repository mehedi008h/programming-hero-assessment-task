"use client";
import React, { useState } from "react";
import Task from "./Task";
import useTasks from "@/hooks/useTasks";
import Loader from "../common/Loader";

enum Status {
    TODO = "Todo",
    PROGRESS = "Progress",
    COMPLETED = "Completed",
}

const Tasks = () => {
    // fetch tasks
    const { data: tasks, isLoading, isError } = useTasks();

    // todo tasks
    const todos = tasks?.filter((task) => task.status === Status.TODO);
    // progress tasks
    const progress = tasks?.filter((task) => task.status === Status.PROGRESS);
    // completed tasks
    const completedd = tasks?.filter(
        (task) => task.status === Status.COMPLETED
    );

    const [todo, setTodo] = useState<string[]>();
    const [ongoing, setOngoing] = useState<string[]>();
    const [completed, setCompleted] = useState<string[]>();

    function handleOnDragOver(e: React.DragEvent) {
        e.preventDefault();
    }

    function handleOnDrag(e: React.DragEvent, name: string) {
        e.dataTransfer.setData("name", name);
    }

    function handleOnDropTodo(e: React.DragEvent) {
        // Set the dropped task to todo state
        if (todo) {
            setTodo([
                ...todo.filter(
                    (taskName) => taskName !== e.dataTransfer.getData("name")
                ),
                e.dataTransfer.getData("name"),
            ]);
        } else {
            setTodo([e.dataTransfer.getData("name")]);
        }

        // If dropping from ongoing --> todo
        // Delete from ongoing
        ongoing?.forEach((task) => {
            if (task === e.dataTransfer.getData("name")) {
                setOngoing([
                    ...ongoing.filter(
                        (taskName) =>
                            taskName !== e.dataTransfer.getData("name")
                    ),
                ]);
            }
        });

        // If dropping from completed --> todo
        // Delete from completed
        completed?.forEach((task) => {
            if (task === e.dataTransfer.getData("name")) {
                setCompleted([
                    ...completed.filter(
                        (taskName) =>
                            taskName !== e.dataTransfer.getData("name")
                    ),
                ]);
            }
        });
    }

    function handleOnDropOngoing(e: React.DragEvent) {
        // Set the dropped task to todo state
        if (ongoing) {
            setOngoing([
                ...ongoing.filter(
                    (taskName) => taskName !== e.dataTransfer.getData("name")
                ),
                e.dataTransfer.getData("name"),
            ]);
        } else {
            setOngoing([e.dataTransfer.getData("name")]);
        }

        // If dropping from todo --> ongoing
        // Delete from todo
        todo?.forEach((task) => {
            if (task === e.dataTransfer.getData("name")) {
                setTodo([
                    ...todo.filter(
                        (taskName) =>
                            taskName !== e.dataTransfer.getData("name")
                    ),
                ]);
            }
        });

        // If dropping from completed --> ongoing
        // Delete from completed
        completed?.forEach((task) => {
            if (task === e.dataTransfer.getData("name")) {
                setCompleted([
                    ...completed.filter(
                        (taskName) =>
                            taskName !== e.dataTransfer.getData("name")
                    ),
                ]);
            }
        });
    }

    function handleOnDropCompleted(e: React.DragEvent) {
        // Set the dropped task to todo state
        if (completed) {
            setCompleted([
                ...completed.filter(
                    (taskName) => taskName !== e.dataTransfer.getData("name")
                ),
                e.dataTransfer.getData("name"),
            ]);
        } else {
            setCompleted([e.dataTransfer.getData("name")]);
        }

        // If dropping from todo --> completed
        // Delete from todo
        todo?.forEach((task) => {
            if (task === e.dataTransfer.getData("name")) {
                setTodo([
                    ...todo.filter(
                        (taskName) =>
                            taskName !== e.dataTransfer.getData("name")
                    ),
                ]);
            }
        });

        // If dropping from ongoing --> completed
        // Delete from ongoing
        ongoing?.forEach((task) => {
            if (task === e.dataTransfer.getData("name")) {
                setOngoing([
                    ...ongoing.filter(
                        (taskName) =>
                            taskName !== e.dataTransfer.getData("name")
                    ),
                ]);
            }
        });
    }

    return (
        <div className="grid grid-cols-12 gap-8 mt-4">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {/* to do  */}
                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-3">
                        <p className="text-lg font-semibold uppercase text-neutral-500">
                            To Do (10)
                        </p>
                        {todos?.map((todo) => (
                            <Task key={todo.id} task={todo} />
                        ))}
                    </div>

                    {/* in progress  */}
                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-3">
                        <p className="text-lg font-semibold uppercase text-neutral-500">
                            In Progress (19)
                        </p>
                        {progress?.map((progres) => (
                            <Task key={progres.id} task={progres} />
                        ))}
                    </div>

                    {/* done  */}
                    <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-3">
                        <p className="text-lg font-semibold uppercase text-neutral-500">
                            Done (20)
                        </p>
                        {completedd?.map((complete) => (
                            <Task key={complete.id} task={complete} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Tasks;
