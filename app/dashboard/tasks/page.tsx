import { TaskFilterBar, Tasks } from "@/components";
import React from "react";

const TasksPage = () => {
    return (
        <div>
            <TaskFilterBar />
            <Tasks />
        </div>
    );
};

export default TasksPage;
