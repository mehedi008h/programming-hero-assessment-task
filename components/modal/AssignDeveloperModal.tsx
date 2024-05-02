import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import React from "react";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const AssignDeveloperModal = ({ open, setOpen }: Props) => {
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Modal
            title="Assign Developer"
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="reset" type="dashed" onClick={handleOk}>
                    Reset
                </Button>,
            ]}
        >
            <div className="flex items-center gap-2 border rounded-full py-2 px-3 mt-4">
                <SearchOutlined className="text-neutral-400 text-xl" />
                <input
                    type="text"
                    className="outline-none w-full"
                    placeholder="Search ..."
                />
            </div>

            {/* search keyword  */}
            <div className="flex flex-row flex-wrap justify-center gap-2 my-5"></div>
        </Modal>
    );
};

export default AssignDeveloperModal;
