import { tags } from "@/static";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal, Tag } from "antd";
import React from "react";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const SearchModal = ({ open, setOpen }: Props) => {
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Modal
            title=""
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="reset" type="dashed" onClick={handleOk}>
                    Reset
                </Button>,
            ]}
        >
            <div className="flex items-center gap-2 border rounded-full py-2 px-3 mt-8">
                <SearchOutlined className="text-neutral-400 text-xl" />
                <input
                    type="text"
                    className="outline-none w-full"
                    placeholder="Search ..."
                />
            </div>

            {/* search keyword  */}
            <div className="flex flex-row flex-wrap justify-center gap-2 my-5">
                {tags.map((tag) => (
                    <Tag key={tag} className="px-2 py-[3px] cursor-pointer">
                        {tag}
                    </Tag>
                ))}
            </div>
        </Modal>
    );
};

export default SearchModal;
