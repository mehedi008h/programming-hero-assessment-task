import React from "react";
import Task from "./Task";

const Tasks = () => {
    return (
        <div className="grid grid-cols-12 gap-8 mt-4">
            {/* to do  */}
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-3">
                <p className="text-lg font-semibold uppercase text-neutral-500">
                    To Do (10)
                </p>
                <Task />
                <Task />
                <Task />
            </div>

            {/* in progress  */}
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-3">
                <p className="text-lg font-semibold uppercase text-neutral-500">
                    In Progress (19)
                </p>
                <Task />
            </div>

            {/* done  */}
            <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-3">
                <p className="text-lg font-semibold uppercase text-neutral-500">
                    Done (20)
                </p>
                <Task />
            </div>
        </div>
    );
};

export default Tasks;
