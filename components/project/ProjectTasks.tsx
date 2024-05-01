"use client";

import React, { useState } from "react";
import { Table, TableColumnsType, Tag } from "antd";
import {
    AlertOutlined,
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    FieldTimeOutlined,
    MessageOutlined,
    NodeIndexOutlined,
    PaperClipOutlined,
} from "@ant-design/icons";

interface DataType {
    key: React.Key;
    title: string;
    assignDate: number;
    dueDate: string;
    status: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: "Title",
        dataIndex: "title",
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: "Assign Date",
        dataIndex: "assignDate",
        render: (text: string) => (
            <Tag color="blue" className="flex items-center gap-2 w-fit">
                <FieldTimeOutlined />
                {text}
            </Tag>
        ),
    },
    {
        title: "Due Date",
        dataIndex: "dueDate",
        render: (text: string) => (
            <Tag color="red" className="flex items-center gap-2 w-fit">
                <AlertOutlined />
                {text}
            </Tag>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        render: (text: string) => (
            <Tag color="red" className="flex items-center gap-2 w-fit">
                {text}
            </Tag>
        ),
    },
    {
        title: "Activity",
        render: () => (
            <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center text-neutral-600 cursor-pointer">
                    <PaperClipOutlined />
                </div>
                <div className="flex gap-1 items-center text-neutral-600 cursor-pointer">
                    <MessageOutlined />
                </div>
                <div className="flex gap-1 items-center text-neutral-600 cursor-pointer">
                    <NodeIndexOutlined />
                </div>
            </div>
        ),
    },
    {
        title: "Action",
        render: (text: string) => (
            <div className="flex items-center gap-3">
                <EyeOutlined className="text-base hover:text-blue-500 cursor-pointer" />
                <EditOutlined className="text-base hover:text-yellow-500 cursor-pointer" />
                <DeleteOutlined className="text-base hover:text-red-500 cursor-pointer" />
            </div>
        ),
    },
];

const data: DataType[] = [
    {
        key: "1",
        title: "John Brown",
        assignDate: 32,
        dueDate: "New York No. 1 Lake Park",
        status: "Todo",
    },
    {
        key: "2",
        title: "Jim Green",
        assignDate: 42,
        dueDate: "London No. 1 Lake Park",
        status: "Progress",
    },
    {
        key: "3",
        title: "Joe Black",
        assignDate: 32,
        dueDate: "Sydney No. 1 Lake Park",
        status: "Done",
    },
    {
        key: "4",
        title: "Disabled User",
        assignDate: 99,
        dueDate: "Sydney No. 1 Lake Park",
        status: "Todo",
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.title === "Disabled User", // Column configuration not to be checked
        name: record.title,
    }),
};

const ProjectTasks = () => {
    const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
        "checkbox"
    );
    return (
        <div className="mt-4">
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default ProjectTasks;
