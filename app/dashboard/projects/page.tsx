"use client";
import React from "react";
import { Project } from "@/components";
import useProject from "@/hooks/useProjects";

const ProjectPage = () => {
    const { data, isLoading, isError } = useProject();
    return (
        <div className="grid grid-cols-12 gap-5">
            {isLoading ? (
                <div className="col-span-12 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200"></div>
                </div>
            ) : (
                <>
                    {data?.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </>
            )}
        </div>
    );
};

export default ProjectPage;
