import {
    CommentOutlined,
    LogoutOutlined,
    NotificationOutlined,
    SearchOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Dropdown, MenuProps } from "antd";
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
                <UserOutlined /> Profile
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
                <SettingOutlined /> Settings
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
                <LogoutOutlined /> Logout
            </a>
        ),
    },
];

const Header = () => {
    return (
        <div className="h-16 flex justify-between items-center bg-white rounded-md px-4">
            {/* left section  */}
            <div className="flex items-center gap-2 border rounded-full py-2 px-3">
                <SearchOutlined className="text-neutral-400 text-xl" />
                <input
                    type="text"
                    className="outline-none"
                    placeholder="Search ..."
                />
            </div>
            {/* right section  */}
            <div className="flex items-center gap-5 relative">
                {/* message  */}
                <Badge count={5} color="blue">
                    <CommentOutlined className="text-2xl text-neutral-500" />
                </Badge>

                {/* notification  */}
                <Badge count={5} color="pink">
                    <NotificationOutlined className="text-2xl text-neutral-500" />
                </Badge>

                {/* user menu  */}
                <Dropdown menu={{ items }} placement="bottomRight" arrow>
                    <Avatar icon size={"large"} />
                </Dropdown>
            </div>
        </div>
    );
};

export default Header;
