"use client";

import { sidebarLinks } from "@/static/sidebar";
import { ProjectOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
    // state for active sidebar link
    const [active, setActive] = useState<string>("Home");
    return (
        <aside className="w-full h-screen overflow-auto bg-white py-6 flex flex-col justify-between">
            <div>
                {/* logo  */}
                <div className="text-center">
                    <ProjectOutlined className="text-3xl" />
                </div>

                {/* links  */}
                <div className="mt-10 ps-6">
                    <ul className="space-y-2">
                        {sidebarLinks.map((item) => (
                            <Link
                                href={item.link}
                                key={item.id}
                                onClick={() => setActive(item.name)}
                                className={`flex items-center gap-3 hover:bg-neutral-50 ps-4 py-2 rounded-s-2xl cursor-pointer  hover:text-indigo-500 border-r-2  hover:border-indigo-500 ${
                                    active === item.name
                                        ? "border-indigo-500 text-indigo-500 bg-neutral-50"
                                        : "border-white text-neutral-600"
                                }`}
                            >
                                {item.icon}
                                <p className="text-base font-normal">
                                    {item.name}
                                </p>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>

            {/* footer  */}
            <div className="mx-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center gap-3 justify-center py-3 rounded-md cursor-pointer">
                <UsergroupAddOutlined className="text-xl" />
                <p>Invite Teammate</p>
            </div>
        </aside>
    );
};

export default Sidebar;
