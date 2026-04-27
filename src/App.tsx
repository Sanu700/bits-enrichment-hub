import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import AcadsPage from "./pages/AcadsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import CampusLifePage from "./pages/CampusLifePage";
import VirtualTourPage from "./pages/VirtualTourPage";
import ParentsPage from "./pages/ParentsPage";
import ResearchPage from "./pages/ResearchPage";
import HealthPage from "./pages/HealthPage";
import AlumniPage from "./pages/AlumniPage";
import HelpPage from "./pages/HelpPage";
import DetailPage from "./components/DetailPage";
import Chatbot from "./components/Chatbot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/acads" element={<AcadsPage />} />
          <Route path="/acads/:slug" element={<DetailPage sectionKey="acads" />} />

          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/admissions/:slug" element={<DetailPage sectionKey="admissions" />} />

          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/campus-life/virtual-tour" element={<VirtualTourPage />} />
          <Route path="/campus-life/:slug" element={<DetailPage sectionKey="campus-life" />} />

          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/parents/:slug" element={<DetailPage sectionKey="parents" />} />

          <Route path="/research" element={<ResearchPage />} />
          <Route path="/research/:slug" element={<DetailPage sectionKey="research" />} />

          <Route path="/health" element={<HealthPage />} />
          <Route path="/health/:slug" element={<DetailPage sectionKey="health" />} />

          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/alumni/:slug" element={<DetailPage sectionKey="alumni" />} />

          <Route path="/help" element={<HelpPage />} />
          <Route path="/help/:slug" element={<DetailPage sectionKey="help" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
