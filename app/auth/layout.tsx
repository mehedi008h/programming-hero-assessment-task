import React from "react";

interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="w-full min-h-screen grid grid-cols-12">
            <div className="col-span-5">{children}</div>
            <div className="col-span-7">2</div>
        </div>
    );
};

export default AuthLayout;
