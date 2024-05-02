"use client";

import {
    AlertOutlined,
    DeleteColumnOutlined,
    EditOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    MessageOutlined,
    MoreOutlined,
    NodeIndexOutlined,
    PaperClipOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Tag } from "antd";
import React, { useState } from "react";
import { AddTaskModal, AssignDeveloperModal } from "@/components";

const ProjectDetailsCard = () => {
    const [openAssignDeveloperModal, setOpenAssignDeveloperModal] =
        useState<boolean>(false);
    const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);

    // dropdown menu items
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <p onClick={() => setOpenAssignDeveloperModal(true)}>
                    <UserAddOutlined /> Assign Developer
                </p>
            ),
        },
        {
            key: "2",
            label: (
                <p onClick={() => setOpenAddTaskModal(true)}>
                    <EditOutlined /> Add Task
                </p>
            ),
        },
        {
            key: "3",
            label: (
                <p>
                    <EditOutlined /> Update Project
                </p>
            ),
        },
        {
            key: "4",
            label: (
                <p>
                    <DeleteColumnOutlined /> Delete Project
                </p>
            ),
        },
    ];
    return (
        <div className="bg-white p-4 rounded-md flex items-start gap-5">
            {/* image  */}
            <div className="h-64 w-64 bg-gray-400 rounded-md"></div>

            <div>
                {/* title  */}
                <div className="w-full flex justify-between items-center">
                    <h5 className="text-lg font-normal">Project Title</h5>
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                        <MoreOutlined className="text-2xl" />
                    </Dropdown>
                </div>

                {/* description  */}
                <p className="text-sm font-normal text-neutral-500 mt-2 w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, ipsa molestiae consequatur cum aliquam reiciendis
                    provident eum ducimus assumenda magni?
                </p>

                {/* project tags  */}
                <div className="flex flex-row flex-wrap gap-2 my-4">
                    <Tag>Ios</Tag>
                    <Tag>React Native</Tag>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex gap-1 items-center text-neutral-600 cursor-pointer">
                        5<PaperClipOutlined />
                    </div>
                    <div className="flex gap-1 items-center text-neutral-600 cursor-pointer">
                        3<MessageOutlined />
                    </div>
                    <div className="flex gap-1 items-center text-neutral-600 cursor-pointer">
                        2<NodeIndexOutlined />
                    </div>
                </div>

                <div className="flex justify-start items-center my-4">
                    <Tag color="gray" className="text-sm px-2 py-[3px]">
                        <FieldTimeOutlined /> Assign Date : 01-12-2024
                    </Tag>

                    <Tag color="red" className="text-sm px-2 py-[3px]">
                        <AlertOutlined /> Due Date : 15-12-2024
                    </Tag>
                </div>

                <div>
                    <p className="text-base font-normal">
                        Assigned Developer :
                    </p>
                    {/* project member  */}
                    <div className="">
                        <Avatar
                            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                            className="p-1 border-2 border-neutral-300 cursor-pointer hover:border-indigo-300"
                        />
                        <Avatar
                            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                            className="p-1 border-2 border-neutral-300 -ms-2 bg-white cursor-pointer hover:border-indigo-300"
                        />
                        <Avatar
                            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                            className="p-1 border-2 border-neutral-300 -ms-2 bg-white cursor-pointer hover:border-indigo-300"
                        />
                        <Avatar
                            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                            className="p-1 border-2 border-neutral-300 -ms-2 bg-white cursor-pointer hover:border-indigo-300"
                        />
                        <Avatar className="-ms-2 z-10 bg-neutral-400 cursor-pointer">
                            +1
                        </Avatar>
                    </div>
                </div>
            </div>

            {/* modal  */}
            <AssignDeveloperModal
                open={openAssignDeveloperModal}
                setOpen={setOpenAssignDeveloperModal}
            />

            <AddTaskModal
                open={openAddTaskModal}
                setOpen={setOpenAddTaskModal}
            />
        </div>
    );
};

export default ProjectDetailsCard;
