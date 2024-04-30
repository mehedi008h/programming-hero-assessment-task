import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

interface Props {
    children: React.ReactNode;
    footerText: string;
    footerLinkText: string;
    footerLink: string;
}

const AuthWrapper = ({
    children,
    footerText,
    footerLinkText,
    footerLink,
}: Props) => {
    return (
        <div className="w-full min-h-screen p-5 flex flex-col justify-between items-center">
            {/* header  */}
            <div className="w-full flex justify-between items-center">
                {/* logo  */}
                <div className="text-xl font-semibold text-neutral-500">
                    Project Management
                </div>

                {/* back link  */}
                <Link href={"/"} className="flex items-center gap-2">
                    <ArrowLeftOutlined color="black" /> <p>Go Back</p>
                </Link>
            </div>

            {/* form  */}
            {children}

            {/* footer  */}
            <h5 className="font-normal text-base mb-2 text-neutral-600">
                {footerText}
                <Link
                    href={footerLink}
                    className="font-semibold text-base ms-1"
                >
                    {footerLinkText}
                </Link>
            </h5>
        </div>
    );
};

export default AuthWrapper;
