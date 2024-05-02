export interface Project {
    id: number;
    title: string;
    description: string;
    assignDate: string;
    dueDate: string;
    photo: string;
    projectLeader: string;
    tags: string[];
    developers: string[];
    tasks: string;
    priority: string;
}
