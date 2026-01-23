
import { useParams, Navigate } from "react-router-dom";
import { projectsData } from "@/hooks/projectsData";


export default function ProjectDetail() {
  const { projectId } = useParams();

  const projectEntry = projectId ? projectsData[projectId] : null;

  if (!projectEntry) {
    return <Navigate to="/portfolio" replace />;
  }

  const ProjectComponent = projectEntry.component;
  return <ProjectComponent />;
}
