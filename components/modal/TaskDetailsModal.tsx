"use client";
import {
    AlertOutlined,
    FieldTimeOutlined,
    MessageOutlined,
    NodeIndexOutlined,
    NotificationOutlined,
    PaperClipOutlined,
    PauseCircleOutlined,
    PlayCircleOutlined,
} from "@ant-design/icons";
import { Button, Modal, Tag } from "antd";
import React, { useState } from "react";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const TaskDetailsModal = ({ open, setOpen }: Props) => {
    // state for time tracking
    const [onTimeCount, setOnTimeCount] = useState<boolean>(false);
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    // handle time tracking
    const handleTimeTracking = () => {
        setOnTimeCount(!onTimeCount);
    };
    return (
        <Modal
            title="Task Details"
            open={open}
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
    );
};

export default TaskDetailsModal;
