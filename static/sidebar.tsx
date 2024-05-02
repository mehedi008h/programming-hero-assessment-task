import {
    CalendarOutlined,
    ClockCircleOutlined,
    FundProjectionScreenOutlined,
    HomeOutlined,
    MessageOutlined,
    PieChartOutlined,
    SettingOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";

// sidebar links
export const sidebarLinks = [
    {
        id: 1,
        name: "Home",
        link: "/dashboard",
        icon: <HomeOutlined className="text-lg" />,
    },
    {
        id: 2,
        name: "Projects",
        link: "/dashboard/projects",
        icon: <FundProjectionScreenOutlined className="text-lg" />,
    },
    {
        id: 3,
        name: "My Task",
        link: "/dashboard/tasks",
        icon: <UnorderedListOutlined className="text-lg" />,
    },
    {
        id: 4,
        name: "Inbox",
        link: "/dashboard",
        icon: <MessageOutlined className="text-lg" />,
    },
    {
        id: 5,
        name: "Calendar",
        link: "/dashboard",
        icon: <CalendarOutlined className="text-lg" />,
    },
    {
        id: 6,
        name: " Time Manage",
        link: "/dashboard",
        icon: <ClockCircleOutlined className="text-lg" />,
    },
    {
        id: 7,
        name: " Reports",
        link: "/dashboard",
        icon: <PieChartOutlined className="text-lg" />,
    },
    {
        id: 8,
        name: "Settings",
        link: "/dashboard",
        icon: <SettingOutlined className="text-lg" />,
    },
];
