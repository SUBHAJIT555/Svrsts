import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
const About = lazy(() => import("../Pages/About"));
const Service = lazy(() => import("@/Pages/Service"));
const Contact = lazy(() => import('@/Pages/Contact'))
const TermsAndCondition = lazy(() => import('@/Pages/TermsAndCondition'))
const PrivacyPolicy = lazy(() => import('@/Pages/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('@/Pages/CookiePolicy'))
const ExhibitionStandBuilding = lazy(() => import('@/Pages/ExhibitionStandBuilding'))
const WoodWork = lazy(() => import('@/Pages/WoodWork'))
const EventDecoration = lazy(() => import('@/Pages/EventDecoration'))
const OfficeInterior = lazy(() => import('@/Pages/OfficeInterior'))
const Furniture = lazy(() => import('@/Pages/Furniture'))
const InteriorDesign = lazy(() => import('@/Pages/InteriorDesign'))
const PaintingServices = lazy(() => import('@/Pages/PaintingServices'))
const CompleteInteriorSolutions = lazy(() => import('@/Pages/CompleteInteriorSolutions'))



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/services/exhibition-stand-building",
        element: <ExhibitionStandBuilding />,
      },
      {
        path: "/services/wood-work",
        element: <WoodWork />,
      },
      {
        path: "/services/event-decoration",
        element: <EventDecoration />,
      },
      {
        path: "/services/office-interior",
        element: <OfficeInterior />,
      },
      {
        path: "/services/furniture",
        element: <Furniture />,
      },
      {
        path: "/services/interior-design",
        element: <InteriorDesign />,
      },
      {
        path: "/services/painting-services",
        element: <PaintingServices />,
      },
      {
        path: "/services/complete-interior-solutions",
        element: <CompleteInteriorSolutions />,
      },
    ],
  },
]);
