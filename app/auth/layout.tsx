import { Carousel } from "antd";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="w-full min-h-screen grid grid-cols-12 bg-neutral-100">
            {/* form section  */}
            <div className="col-span-5">{children}</div>

            {/* Carousel section  */}
            <div className="w-full min-h-screen col-span-7 p-5">
                <Carousel autoplay>
                    <div className="bg-green-500 h-[calc(100vh-40px)] rounded-md">
                        <h3>1</h3>
                    </div>
                    <div className="bg-blue-500 h-[calc(100vh-40px)] rounded-md">
                        <h3>2</h3>
                    </div>
                    <div className="bg-pink-500 h-[calc(100vh-40px)] rounded-md">
                        <h3>3</h3>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default AuthLayout;
