import { useParams, Navigate } from "react-router-dom";
import { gameProjectsData } from "@/hooks/GameProjectsData";

export default function GameProjectsDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId || !gameProjectsData[projectId]) {
    return <Navigate to="/portfolio/games" replace />;

  }

  const ProjectComponent = gameProjectsData[projectId].component;
  return <ProjectComponent />;
}
