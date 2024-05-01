"use client";
import {
    FacebookFilled,
    GithubFilled,
    GoogleCircleFilled,
} from "@ant-design/icons";
import {
    Avatar,
    Button,
    Checkbox,
    Divider,
    Form,
    FormProps,
    Input,
} from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

const LoginForm = () => {
    const router = useRouter();
    // login success
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
        router.push("/dashboard");
        toast.success("Successfully Sign in");
    };

    // login failed
    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo
    ) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="xl:w-[400px] lg:w-[400px] w-[300px]">
            {/* heading  */}
            <h3 className="text-2xl font-semibold text-neutral-700">
                Welcome Back
            </h3>
            <p className="text-sm font-normal text-neutral-500">
                Enter your email & password to Sign in.
            </p>

            {/* login form  */}
            <Form
                name="basic"
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="mt-5"
            >
                {/* email field  */}
                <Form.Item<FieldType>
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input className="h-10" />
                </Form.Item>

                {/* password field  */}
                <Form.Item<FieldType>
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                        {
                            min: 8,
                            message:
                                "Password must be at least 8 characters long",
                        },
                    ]}
                    className="mt-8"
                >
                    <Input.Password className="h-10" />
                </Form.Item>

                {/* remember me */}
                <Form.Item<FieldType> name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* sign in button  */}
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full h-10 -mt-4"
                    >
                        Sign In
                    </Button>
                </Form.Item>
            </Form>

            {/* divider  */}
            <Divider>OR</Divider>

            {/* social media login  */}
            <div className="flex justify-center items-center gap-4">
                <Avatar
                    size={50}
                    icon={<GoogleCircleFilled />}
                    className="text-[#BD3032] bg-neutral-300 hover:bg-neutral-200 cursor-pointer"
                />
                <Avatar
                    size={50}
                    icon={<FacebookFilled />}
                    className="text-[#1877F2] bg-neutral-300 hover:bg-neutral-200 cursor-pointer"
                />
                <Avatar
                    size={50}
                    icon={<GithubFilled />}
                    className="text-black bg-neutral-300 hover:bg-neutral-200 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default LoginForm;
