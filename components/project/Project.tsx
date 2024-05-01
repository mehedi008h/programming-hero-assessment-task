import {
    AntDesignOutlined,
    CodepenCircleOutlined,
    DeleteColumnOutlined,
    EditOutlined,
    EyeOutlined,
    MoreOutlined,
    StarFilled,
    UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Progress, Tag, Tooltip } from "antd";
import React from "react";

const items: MenuProps["items"] = [
    {
        key: "1",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                <EyeOutlined /> View
            </a>
        ),
    },
    {
        key: "2",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                <EditOutlined /> Edit
            </a>
        ),
    },
    {
        key: "3",
        label: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.luohanacademy.com"
            >
                <DeleteColumnOutlined /> Delete
            </a>
        ),
    },
];

const Project = () => {
    return (
        <div className="col-span-3 bg-white p-3 rounded-md hover:shadow-sm transition-all">
            {/* heading section  */}
            <div className="flex justify-between">
                {/* icon & title  */}
                <div className="flex items-center gap-2">
                    <Avatar
                        icon={<CodepenCircleOutlined />}
                        shape="square"
                        size={"large"}
                    />
                    <div>
                        <h5>Project Management</h5>
                        <p className="text-neutral-400 text-sm font-normal">
                            Programming Hero
                        </p>
                    </div>
                </div>

                {/* menu  */}
                <div className="flex items-center gap-1">
                    <StarFilled className="text-pink-600 p-2 border-2 rounded-full hover:border-pink-600 cursor-pointer" />
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                        <MoreOutlined className="text-2xl" />
                    </Dropdown>
                </div>
            </div>

            <div className="flex justify-between items-center my-4">
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <Tag color="gray" className="text-sm px-2 py-[3px]">
                        Selected Progress
                    </Tag>
                </Dropdown>
                <Tag color="red" className="text-sm px-2 py-[3px]">
                    High
                </Tag>
            </div>

            {/* progress  */}
            <p className="text-base text-neutral-600">Task Done: 25 / 30</p>
            <Progress percent={50} status="active" />

            {/* project tags  */}
            <div className="flex flex-row flex-wrap gap-2 my-4">
                <Tag>Ios</Tag>
                <Tag>React Native</Tag>
            </div>

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

            {/* due date  */}
            <Tag color="red" className="mt-4">
                Due Date: 13-12-2024
            </Tag>
        </div>
    );
};

export default Project;
