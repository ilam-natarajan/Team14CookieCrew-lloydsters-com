import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ColleagueOffers from "./pages/ColleagueOffers";
import ReferralStars from "./pages/ReferralStars";
import LatestFeatures from "./pages/LatestFeatures";
import NotFound from "./pages/NotFound";
import Feedbacks from "./pages/Feedbacks";
import AdvocateDetail from "./pages/AdvocateDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/advocate/:id" element={<AdvocateDetail />} />
          <Route path="/colleague-offers" element={<ColleagueOffers />} />
          <Route path="/referral-stars" element={<ReferralStars />} />
          <Route path="/latest-features" element={<LatestFeatures />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
