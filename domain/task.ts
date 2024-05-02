export interface Task {
    id: number;
    title: string;
    description: string;
    assignDate: string;
    dueDate: string;
    priority: string;
    status: string;
    tags: string[];
    projectIdentifier: string;
    developer: string;
    assigned: string;
}
