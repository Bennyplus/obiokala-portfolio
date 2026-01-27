import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLoadingSpinner from "@/components/GlobalLoadingSpinner";

import Index from "./pages/Index";
import PortfolioHub from "./pages/PortfolioHub";
import GameProjects from "./pages/gameprojects/GameProjectPage";
import GameProjectDetail from "./pages/GameProjectsDetail";
import AIProjects from "./pages/aiprojects/AIProjectsPage";
import AIProjectDetail from "./pages/AIProjectsDetails";
import PetBreedDemo from "./pages/aiprojects/PetBreedClassificationDemo";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GlobalLoadingSpinner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:projectId" element={<GameProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-projects/:projectId" element={<AIProjectDetail />} />
          <Route path="/portfolio" element={<PortfolioHub />} />
          <Route path="/portfolio/games" element={<GameProjects />} />
          <Route path="/portfolio/ai" element={<AIProjects />} />
          <Route path="/portfolio/ai/pet-breed-classification/demo"   element={<PetBreedDemo />}/>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
