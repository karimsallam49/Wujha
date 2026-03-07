import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "../Components/Layout/AppLayout";
import NotFound from "../Pages/NotFound";
import LoadingFallback from "../Components/LoadingFallback/LoadingFallback";

// Lazy load all pages
const HomePage = lazy(() => import("../Pages/HomePage"));
const OurStory = lazy(() => import("../Pages/OurStory"));
const Investment = lazy(() => import("../Pages/Investment"));
const Services = lazy(() => import("../Pages/Services"));
const MediaCenter = lazy(() => import("../Pages/MediaCenter"));
const Careers = lazy(() => import("../Pages/Careers"));
const FAQPage = lazy(() => import("../Pages/FAQPage"));
const ContactUs = lazy(() => import("../Pages/ContactUs"));
const CentralPage = lazy(() => import("../Pages/Central7/CentralPage"));
const AllProjects = lazy(() => import("../Pages/AllProject/AllProjects"));
const Uptown = lazy(() => import("../Pages/Uptown/Uptown"));
const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "Ourstory",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <OurStory />
          </Suspense>
        ),
      },
      {
        path: "Investment",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Investment />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "MediaCenter",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MediaCenter />
          </Suspense>
        ),
      },
      {
        path: "Careers",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Careers />
          </Suspense>
        ),
      },
      {
        path: "FAQPage",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <FAQPage />
          </Suspense>
        ),
      },
      {
        path: "ContactUs",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "Central7",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CentralPage />
          </Suspense>
        ),
      },
      {
        path: "AllProjects",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AllProjects />
          </Suspense>
        ),
      },
      {
        path: "Uptown",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Uptown />
          </Suspense>
        ),
      },
      {
        path: "AboutUs",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
