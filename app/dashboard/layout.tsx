import { Header, Sidebar } from "@/components";
import React from "react";
interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="w-full min-h-screen flex bg-neutral-100">
            {/* sidebar  */}
            <div className="min-h-screen w-[280px] fixed">
                <Sidebar />
            </div>
            {/* main section  */}
            <main className="w-full py-4 px-4 ms-[280px]">
                {/* header  */}
                <Header />
                {/* main component  */}
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
