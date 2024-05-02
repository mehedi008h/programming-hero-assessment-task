import { Drawer } from "antd";
import React from "react";
import Sidebar from "./Sidebar";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const MobDrawer = ({ open, setOpen }: Props) => {
    const onClose = () => {
        setOpen(false);
    };
    return (
        <Drawer
            title=""
            onClose={onClose}
            open={open}
            placement="left"
            className="w-[280px]"
        >
            <Sidebar onClose={onClose} />
        </Drawer>
    );
};

export default MobDrawer;
