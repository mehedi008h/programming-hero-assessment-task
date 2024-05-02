import { useQuery } from "@tanstack/react-query";
import task from "../static/task.json";
import { Task } from "@/domain/task";

const fetchData = async (): Promise<Task[]> => {
    // Simulating a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return task; // Return the imported JSON data
};

const useTasks = () =>
    useQuery({
        queryKey: ["tasks"],
        queryFn: () => fetchData(),
    });

export default useTasks;
