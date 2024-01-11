import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UiPage from "./pages/UiPage";
import UxPage from "./pages/UxPage";
import EnhancementPage from "./pages/EnhancementPage";
import FeaturesPage from "./pages/FeaturesPage";
import FeedbackDetailPage from "./pages/FeedbackDetailPage";
import FeedbackLayout from "./ui/FeedbackLayout";
import BugsPage from "./pages/BugsPage";
import PageNotFound from "./pages/PageNotFound";
import { GlobalStyle } from "./styles/GlobalStyles";
import AddFeedback from "./features/addFeedback/AddFeedback";
import EditFeedback from "./features/editFeedback/EditFeedback";
import RoadmapLayout from "./ui/RoadmapLayout";
import RoadmapPage from "./pages/RoadmapPage";


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ui" element={<UiPage />} />
            <Route path="/ux" element={<UxPage />} />
            <Route path="/enhancements" element={<EnhancementPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/bugs" element={<BugsPage />} />
          </Route>
          <Route>
            <Route path="/feedback" element={<FeedbackLayout />}>
              <Route element={<Navigate replace to="/feedback/:id" />} />
              <Route path="/feedback/:id" element={<FeedbackDetailPage />} />
              <Route
                path="/feedback/addnewfeedback"
                element={<AddFeedback />}
              />
              <Route
                path="/feedback/editfeedback/:id"
                element={<EditFeedback />}
              />
            </Route>
          </Route>
          <Route path="/roadmap" element={<RoadmapLayout />}>
            <Route index element={<RoadmapPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
