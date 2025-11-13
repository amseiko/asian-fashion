import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Fashion from "./pages/Fashion";
import Beauty from "./pages/Beauty";
import Trends from "./pages/Trends";
import Skincare from "./pages/Skincare";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ComingSoon from "./pages/ComingSoon";
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
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Redirect all product routes to Coming Soon */}
          <Route path="/products/*" element={<Navigate to="/coming-soon" replace />} />
          {/* Redirect any unknown route to Coming Soon (no 404s) */}
          <Route path="*" element={<Navigate to="/coming-soon" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
