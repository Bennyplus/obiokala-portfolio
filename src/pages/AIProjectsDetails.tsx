import { useParams, Navigate } from "react-router-dom";
import { aiProjectsData } from "@/hooks/AIProjectsData";

export default function AIProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId || !aiProjectsData[projectId]) {
    return <Navigate to="/portfolio/ai" replace />;
  }

  const ProjectComponent = aiProjectsData[projectId].component;
  return <ProjectComponent />;
}
