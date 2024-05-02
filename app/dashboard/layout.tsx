import { Header, Sidebar } from "@/components";
import React from "react";
interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="w-full min-h-screen flex bg-neutral-100">
            {/* sidebar  */}
            <div className="min-h-screen w-[280px] fixed xl:block lg:block hidden">
                <Sidebar />
            </div>
            {/* main section  */}
            <main className="w-full py-4 px-4 xl:ms-[280px] lg:ms-[280px] ms-0">
                {/* header  */}
                <Header />
                {/* main component  */}
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
