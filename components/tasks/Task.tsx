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
    NotificationOutlined,
    PaperClipOutlined,
    PauseCircleOutlined,
    PlayCircleOutlined,
    StarFilled,
    UserAddOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Modal, Tag } from "antd";
import React, { useState } from "react";

const Task = () => {
    // state for time tracking
    const [onTimeCount, setOnTimeCount] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // handle time tracking
    const handleTimeTracking = () => {
        setOnTimeCount(!onTimeCount);
    };

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <div onClick={showModal}>
                    <EyeOutlined /> View
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <div>
                    <EditOutlined /> Edit
                </div>
            ),
        },
        {
            key: "3",
            label: (
                <div>
                    <DeleteColumnOutlined /> Delete
                </div>
            ),
        },
    ];

    return (
        <div className="col-span-3 bg-white p-3 rounded-md hover:shadow-sm transition-all">
            {/* heading section  */}
            <div className="flex justify-between">
                {/* title  */}
                <div className="flex items-center gap-2">
                    <h5>Project Management</h5>
                </div>

                {/* menu  */}
                <div className="flex items-center gap-1">
                    {/* time tracking button  */}
                    {onTimeCount ? (
                        <PauseCircleOutlined
                            onClick={handleTimeTracking}
                            className="text-green-700 text-xl cursor-pointer"
                        />
                    ) : (
                        <PlayCircleOutlined
                            onClick={handleTimeTracking}
                            className="text-gray-600 text-xl cursor-pointer"
                        />
                    )}
                    <Dropdown menu={{ items }} placement="bottomRight" arrow>
                        <MoreOutlined className="text-2xl" />
                    </Dropdown>
                </div>
            </div>

            <div className="flex justify-between items-center my-4">
                <Tag color="gray" className="text-sm px-2 py-[3px]">
                    <FieldTimeOutlined /> 02:40
                </Tag>

                <Tag color="red" className="text-sm px-2 py-[3px]">
                    <AlertOutlined /> 15-12-2024
                </Tag>
            </div>

            {/* task tags  */}
            <div className="flex flex-row flex-wrap gap-2 my-4">
                <Tag>Ios</Tag>
                <Tag>React Native</Tag>
            </div>

            {/* assgned  */}
            <div className="flex justify-between items-center">
                <Avatar icon={<UserOutlined />} />
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
            </div>

            <Modal
                title="Task Details"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Mark As Complete
                    </Button>,
                ]}
            >
                <div className="flex items-center gap-1">
                    <NotificationOutlined className="text-indigo-500" />{" "}
                    <h5 className="text-base font-normal">Task Title</h5>
                </div>
                <p className="text-sm text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore quod exercitationem hic quidem blanditiis sed!
                </p>

                <div className="flex justify-between items-center my-4">
                    <Tag color="gray" className="text-sm px-2 py-[3px]">
                        <FieldTimeOutlined /> Assign Date : 01-12-2024
                    </Tag>

                    <Tag color="red" className="text-sm px-2 py-[3px]">
                        <AlertOutlined /> Due Date : 15-12-2024
                    </Tag>
                </div>

                {/* task tags  */}
                <div className="flex flex-row flex-wrap gap-2 my-4">
                    <Tag>Ios</Tag>
                    <Tag>React Native</Tag>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Tag color="gray" className="text-sm px-2 py-[3px]">
                            <FieldTimeOutlined /> Total Work Hour : 04:20
                        </Tag>
                        {/* time tracking button  */}
                        {onTimeCount ? (
                            <PauseCircleOutlined
                                onClick={handleTimeTracking}
                                className="text-green-700 text-xl cursor-pointer"
                            />
                        ) : (
                            <PlayCircleOutlined
                                onClick={handleTimeTracking}
                                className="text-gray-600 text-xl cursor-pointer"
                            />
                        )}
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
                </div>
            </Modal>
        </div>
    );
};

export default Task;
