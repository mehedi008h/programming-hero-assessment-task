import {
    AppstoreOutlined,
    BarsOutlined,
    FilterOutlined,
    SortAscendingOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import React from "react";

const items: MenuProps["items"] = [
    {
        key: "1",
        label: <p>Status</p>,
    },
    {
        key: "2",
        label: <p>Due Date</p>,
    },
    {
        key: "3",
        label: <p>Assigne</p>,
    },
];

const FilterBar = () => {
    return (
        <div className="border rounded-md px-4 py-3 bg-white flex justify-between items-center">
            <div>
                <AppstoreOutlined className="text-lg" />
                <BarsOutlined className="text-lg" />
            </div>

            {/* sort, filter section  */}
            <div className="flex items-center gap-4">
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <div className="flex items-center gap-2 text-neutral-600">
                        <FilterOutlined />
                        <p className="text-sm font-normal">Filter</p>
                    </div>
                </Dropdown>
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <div className="flex items-center gap-2 text-neutral-600">
                        <SortAscendingOutlined />
                        <p className="text-sm font-normal">Sort</p>
                    </div>
                </Dropdown>
            </div>
        </div>
    );
};

export default FilterBar;
