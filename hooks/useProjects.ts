import { useQuery } from "@tanstack/react-query";
import project from "../static/project.json";
import { Project } from "@/domain/project";

const fetchData = async (): Promise<Project[]> => {
    // Simulating a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return project; // Return the imported JSON data
};

const useProjects = () =>
    useQuery({
        queryKey: ["projects"],
        queryFn: () => fetchData(),
    });

export default useProjects;
