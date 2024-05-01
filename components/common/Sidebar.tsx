import {
    CalendarOutlined,
    FundProjectionScreenOutlined,
    HomeOutlined,
    ProjectOutlined,
    UnorderedListOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";

const Sidebar = () => {
    return (
        <aside className="w-full h-screen overflow-auto bg-white py-6 flex flex-col justify-between">
            <div>
                {/* logo  */}
                <div className="text-center">
                    <ProjectOutlined className="text-3xl" />
                </div>

                {/* links  */}
                <div className="mt-10 ps-6">
                    <p className="uppercase font-medium mb-2">Main</p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer text-neutral-600 hover:text-indigo-500 border-r-2 border-white hover:border-indigo-500">
                            <HomeOutlined className="text-lg" />
                            <p className="text-base font-normal">Home</p>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer">
                            <FundProjectionScreenOutlined className="text-lg text-neutral-600" />
                            <p className="text-neutral-600 text-base font-normal">
                                Projects
                            </p>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer">
                            <UnorderedListOutlined className="text-lg text-neutral-600" />
                            <p className="text-neutral-600 text-base font-normal">
                                My Task
                            </p>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer">
                            <CalendarOutlined className="text-lg text-neutral-600" />
                            <p className="text-neutral-600 text-base font-normal">
                                Calendar
                            </p>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer">
                            <CalendarOutlined className="text-lg text-neutral-600" />
                            <p className="text-neutral-600 text-base font-normal">
                                Time Manage
                            </p>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer">
                            <CalendarOutlined className="text-lg text-neutral-600" />
                            <p className="text-neutral-600 text-base font-normal">
                                Reports
                            </p>
                        </li>
                        <li className="flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer">
                            <CalendarOutlined className="text-lg text-neutral-600" />
                            <p className="text-neutral-600 text-base font-normal">
                                Settings
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* footer  */}
            <div className="mx-6 border-2 flex items-center gap-3 justify-center py-3 rounded-md cursor-pointer">
                <UsergroupAddOutlined className="text-xl" />
                <p>Invite Teammate</p>
            </div>
        </aside>
    );
};

export default Sidebar;
