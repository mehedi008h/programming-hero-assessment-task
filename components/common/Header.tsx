"use client";

import {
    CommentOutlined,
    LogoutOutlined,
    MenuOutlined,
    NotificationOutlined,
    SearchOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Dropdown, MenuProps } from "antd";
import React, { useState } from "react";
import SearchModal from "../modal/SearchModal";
import MobDrawer from "./MobDrawer";

const items: MenuProps["items"] = [
    {
        key: "1",
        label: (
            <p>
                <UserOutlined /> Profile
            </p>
        ),
    },
    {
        key: "2",
        label: (
            <p>
                <SettingOutlined /> Settings
            </p>
        ),
    },
    {
        key: "3",
        label: (
            <p>
                <LogoutOutlined /> Logout
            </p>
        ),
    },
];

const Header = () => {
    const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className="h-16 flex justify-between items-center bg-white rounded-md px-4 mb-4">
            {/* left section  */}
            <div className="flex items-center gap-3">
                <MenuOutlined
                    onClick={() => setOpenDrawer(true)}
                    className="text-xl xl:hidden lg:hidden block"
                />
                <SearchOutlined
                    onClick={() => setOpenSearchModal(true)}
                    className="text-neutral-400 text-xl xl:hidden lg:hidden block"
                />

                {/* for web  */}
                <div
                    onClick={() => setOpenSearchModal(true)}
                    className="xl:flex lg:flex items-center gap-2 border rounded-full py-2 px-3 hidden"
                >
                    <SearchOutlined className="text-neutral-400 text-xl" />
                    <input
                        type="text"
                        className="outline-none"
                        placeholder="Search ..."
                    />
                </div>
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
                    <Avatar icon={<UserOutlined />} size={"large"} />
                </Dropdown>
            </div>

            {/* search modal  */}
            <SearchModal open={openSearchModal} setOpen={setOpenSearchModal} />

            {/* drawer  */}
            <MobDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </div>
    );
};

export default Header;
